<template>
    <div>
        will send : {{ toSend }}
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="toSend"><button type="submit">Send</button>
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
        }
    },
}
</script>

<style>

</style>