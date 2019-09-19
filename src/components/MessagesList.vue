<template>
    <div class="message-list">
        <transition-group name="up-fade">
            <messages-list-message 
                v-for="(message, index) in messages" 
                :key="index"
                :message="message"
            ></messages-list-message>
        </transition-group>
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
        display: block;
        overflow-y: scroll;
    }

    .up-fade-enter-active {
        transition: all 0.2s ease-in-out;
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