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
        theme: 'Triste',
    },
    mutations: {
        addMessage(state, message) {
            state.messages.push(message)
        },
        setMessages(state, messages){
            state.messages = messages
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
        setUsers(state, users) {
            state.connectedUsers = users
        },
        removeUser(state, username) {
            state.connectedUsers.filter((u) => u.name !== username)
        },
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

                    socket.on('user typing', (typing) => {
                        store.commit('setTyping', typing)
                    })
                    
                    socket.on('users update', ({type, user, users}) => {
                        store.commit('setUsers', users.map(u => new User(u.username, u.avatar)))
                    })
                    
                    socket.on('message new', ({message: { user: { username }, text, created}}) => {
                        const user = store.state.connectedUsers.find(u => u.name === username)
                    
                        store.commit('addMessage', new Message(user, text, created))
                    })
                    
                    socket.on('message update', ({messages}) => {
                        store.commit('setMessages', users.map(m => {
                            const user = store.state.connectedUsers.find(u => m.user.name === u.name)
                            store.commit('addMessage', new Message(user, m.text, m.created))
                        }))
                    })
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

socket.on('command new', ({command, value}) => {
    // nothing yet
})

export default store