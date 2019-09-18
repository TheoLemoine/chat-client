import Vuex from 'vuex'
import Vue from 'vue'
import io from 'socket.io-client'

import User from './classes/User'
import Message from './classes/Message'

import config from './config'

Vue.use(Vuex)
const socket = io(config.SERVER_URL)

const store = new Vuex.Store({
    state: {
        messages: [],
        connectedUsers: [],
        currentUser: null,
        someoneTyping: false,
    },
    mutations: {
        addMessage(state, message) {
            state.messages.push(message)
        },
        setCurrentUser(state, User) {
            state.currentUser = User;
        },
        setTyping(state, typing) {
            state.someoneTyping = typing
        },
        addUser(state, user) {
            state.connectedUsers.push(user)
        },
        removeUser(state, username) {
            state.connectedUsers.filter((u) => u.name !== username)
        }
    },
    actions: {
        connectUser({commit}, user) {
            return new Promise((resolve, reject) => {
                socket.emit('user register', {
                    username: user.name,
                    avatar: user.avatar,
                })
                socket.on('user registered', () => {
                    commit('setCurrentUser', user)
                    resolve()
                })
                socket.on('chat error', ({code, message}) => {
                    if(code <= 100 || code <= 102) reject(message)
                })
            })
        },
        sendMessage({}, message) {
            new Promise((resolve, reject) => {
                socket.emit('message new', message.content)

                socket.on('chat error', ({code, message}) => {
                    if(code >= 200) reject(message)
                })
            })
        },
        userStartTyping() {
            io.emit('user typing')
        }
    }
})

socket.on('user typing', (typing) => {
    store.commit('setTyping', typing)
})

socket.on('users update', ({type, user: { username, avatar }}) => {
    switch (type) {
        case 'join':
            store.commit('addUser', new User(username, avatar))
            break;

        case 'left':
            store.commit('removeUser', username)
            break;
    
        default:
            break;
    }
})

socket.on('message new', ({message: { user: { username }, text, created}}) => {
    const user = store.state.connectedUsers.find(u => u.name === username)

    store.commit('addMessage', new Message(user, text, created))
})

socket.on('command new', ({command, value}) => {
    // nothing yet
})

export default store