<template>
    <transition-group
            name="up-fade"
            class="message-list"
            ref="chatBox">
        <messages-list-message
            v-for="(message, index) in messages"
            :key="index"
            :message="message"
        ></messages-list-message>
    </transition-group>
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
        width: 70%;
        height: 92%;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        margin-right: 5%;
    }

    .up-fade-enter-active {
        transition: all 0.4s ease-out;
    }

    .up-fade-enter {
        transform: translateY(1rem);
        opacity: 0;
    }

    .up-fade-enter-to {
        transform: translateY(0);
        opacity: 1;
    }

</style>
