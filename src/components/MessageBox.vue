<template>
    <div class="message-box">

        <div class="loader">
            <div class="evolu2"></div>
            <div class="evolu"></div>
            <div class="evolu3"></div>
            <div class="evolu4"></div>
            <div class="evolu2"></div>
            <div class="evolu"></div>
            <div class="evolu3"></div>
            <div class="evolu4"></div>
            <div class="evolu2"></div>
            <div class="evolu"></div>
            <div class="evolu3"></div>
            <div class="evolu4"></div>
        </div>

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
                padding-right: 4.2rem;

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

    .loader{
        display: flex;
        justify-content: left;
        align-items: flex-start;
        transform: rotate(180deg);
        max-height: 20px;
        bottom: 58px;
        left: 230px;
        position: absolute;
    }

    .evolu{
        height: 40px;
        width: 5px;
        background-color: #091a2c;
        background-image: linear-gradient(62deg, #091a2c 0%, #00abe9 100%);
        margin: 0 3px;
        animation: .8s alternate infinite rescale;
    }

    .evolu2{
        height: 40px;
        width: 5px;
        background-color: #00abe9;
        background-image: linear-gradient(62deg, #00abe9 0%, #091a2c 100%);
        margin: 0 3px;
        animation: .5s alternate infinite rescale4;
    }

    .evolu3{
        height: 40px;
        width: 5px;
        background-color: #00abe9;
        background-image: linear-gradient(62deg, #00abe9 0%, #091a2c 100%);
        margin: 0 3px;
        animation: 2.5s alternate infinite rescale3;
    }

    .evolu4{
        height: 40px;
        width: 5px;
        background-color: #00abe9;
        background-image: linear-gradient(62deg, #00abe9 0%, #091a2c 100%);
        margin: 0 3px;
        animation: 1.2s alternate infinite rescale2;
    }


    @keyframes rescale {
        0% {
            height: 15px;
        }
        50% {
            height: 30px;
        }
        100%{
            height: 20px;
        }
    }

    @keyframes rescale2 {
        0% {
            height: 5px;
        }
        50% {
            height: 20px;
        }
        100%{
            height: 2px;
        }
    }

    @keyframes rescale3 {
        0% {
            height: 20px;
        }
        50% {
            height: 35px;
        }
        100%{
            height: 24px;
        }
    }

    @keyframes rescale4 {
        0% {
            height: 9px;
        }
        50% {
            height: 13px;
        }
        100%{
            height: 10px;
        }
    }

</style>
