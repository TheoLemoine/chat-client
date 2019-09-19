<template>
    <div class="message-box">
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="toSend" placeholder="Enter your text here...">
            <button type="submit">Envoyer</button>
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

        form {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            transform-origin: 50% 50%;
            
            background-color: rgba(50, 123, 190, 0.3);
            clip-path: polygon(95% 0%, 100% 100%, 0% 100%, 5% 0%);
            
            box-shadow: 0px 0px 40px 20px rgba(0,0,0,0.4);

            input[type=text] {
                
                border: none;
                width: 80%;
                height: 100%;

                font-family: 'avenir';
                font-size: 1.2rem;
                color: white;
                
                background-color: transparent;

                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding-left: 5rem;

                &::placeholder {
                    color: rgba(255, 255, 255, 0.5)
                }
                &:focus {
                    outline: none;
                }
            }

            button[type=submit] {
                border: none;
                width: 20%;
                height: 100%;

                font-family: 'korolev';
                letter-spacing: 0.35em;
                font-size: 1.2rem;
                text-transform: uppercase;
                color: white;
                background-color: rgba(32, 173, 255, 0.3);
                clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 25% 0%);

                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding-right: 5.4%;

                cursor: pointer;

                &:active {
                    box-shadow: 0px 0px 100px 5px rgba(0,0,0,0.2) inset;
                }

                &:focus {
                    outline: none;
                }
            }
        }
    }
</style>