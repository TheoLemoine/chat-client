<template>
    <div>
        <user-list :users="connectedUsers"></user-list>
        <message-list :messages="messages"></message-list>
        <message-box @message-sent="sendMessage"></message-box>
    </div>
</template>

<script>
import MessageBox from '../components/MessageBox'
import MessageList from '../components/MessageList'
import UserList from '../components/UserList'

import User from '../classes/User'
import Message from '../classes/Message'

export default {
    data() {
        return {
            messages: [],
            connectedUsers: [],
            currentUser: null
        }
    },
    created() {
        // fake users
        let dude = new User('SomeDude', 'red')
        let jojo = new User('JoJo', 'blue')
        let anon = new User('Anonymousse', 'black')

        this.connectedUsers = [ dude, jojo, anon, ]

        this.currentUser = new User('Me', 'orange')

        // fake messages
        this.messages = [
            new Message(dude, 'Hello am a dude'),
            new Message(jojo, 'JOOOOOOOOOOOOOOJOOOOOOOOOOOOOOOOOOOOO'),
        ]
    },
    methods: {
        sendMessage (message) {
            // using anon as default user
            this.messages.push(new Message(this.currentUser, message))
        }
    },
    components: {
        MessageBox,
        MessageList,
        UserList,
    },
}
</script>

<style>

</style>