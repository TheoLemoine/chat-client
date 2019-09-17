<template>
    <div>
        <h1>Messages :</h1>
        <message-list-message 
            v-for="(message, index) in messages" 
            :key="index"
            :message="message"
        ></message-list-message>
    </div>
</template>

<script>
import MessageListMessage from './MessageListMessage'

export default {
    props: {
        messages: Array,
    },
    components: {
        MessageListMessage
    },
}
</script>

<style>

</style>