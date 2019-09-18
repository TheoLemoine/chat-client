<template>
    <div>
        <h1>Messages :</h1>
        <messages-list-message 
            v-for="(message, index) in messages" 
            :key="index"
            :message="message"
        ></messages-list-message>
    </div>
</template>

<script>
import MessagesListMessage from './MessagesListMessage'

export default {
    props: {
        messages: {
           type: Array,
           required: true,
        }
    },
    components: {
        MessagesListMessage
    },
}
</script>

<style>

</style>