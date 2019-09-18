<template>
    <div class="message-list">
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

<style lang="scss" scoped>
    .message-list {
        grid-area: chat;
        display: block;
        overflow-y: scroll;
    }
</style>