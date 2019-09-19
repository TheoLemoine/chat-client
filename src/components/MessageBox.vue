<template>
    <div class="message-box">
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="toSend" placeholder="Enter your text here...">
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
import Message from '../classes/Message'

export default {
    data() {
        return { toSend: '', }
    },
    methods: {
        handleSubmit() {
            if(this.toSend === '') return

            this.$store.dispatch('sendMessage', new Message(this.$store.state.currentUser, this.toSend))
            this.toSend = ''
        }
    },
}
</script>

<style lang="scss" scoped>
    .message-box {
        width: 80%;
        height: 8%;
        
        border-top: white 1.5px solid;

        form {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            transform-origin: 50% 50%;
            clip-path: polygon(95% 0%, 100% 100%, 0% 100%, 5% 0%);

            input[type=text] {
                border: none;
                width: 80%;
                height: 100%;
                background-color: rgba(50, 123, 190, 0.3);

                font-size: 1.2rem;
                color: white;

                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding-left: 5rem;
            }
            button[type=submit] {
                border: none;
                width: 20%;
                height: 100%;
                font-size: 2rem;
                
                font-size: 1.2rem;
                color: white;
                background-color: rgba(32, 173, 255, 0.3);

                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding-right: 7rem;

                &::before {

                }
            }
        }
    }
</style>