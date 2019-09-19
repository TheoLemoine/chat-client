<template>
    <div class="message" :class="{ owned: isOwned }">
        <div class="username">
            {{ message.user.name }}
        </div>
        <div class="time">
            {{ message.createdAt.format('hh:mm') }}
        </div>
        <div class="sci-fi-box content" :class="{ reverse: isOwned }">
            {{ message.content }}
        </div>
    </div>
</template>

<script>
import Message from '../classes/Message'
import moment from 'moment'

export default {
    props: {
        message: {
            type: Message,
            required: true,
        },
    },
    computed: {
        isOwned() {
            return this.$store.state.currentUser.name === this.message.user.name
        }
    }
}
</script>

<style lang="scss" scoped>
.message {

    color: white;
    position: relative;

    .username {
        font-size: 1.25rem;
        font-family: 'korolev';
        text-transform: uppercase;
        letter-spacing: 0.35em;
        position: absolute;
        left: 4%;
        top: 15%;
    }
    .time {
        
        font-size: 0.8rem;
        font-family: 'avenir';
        position: absolute;
        letter-spacing: 0.2em;
        bottom: 19%;
        left: 8%;
    }
    .content {
        
        font-size: 0.9rem;
        width: fit-content;
        word-break: break-all;
        max-width: 40vw;
        min-width: 10vw;
    }
    .time, .content {
    }

    &.owned {
        .content {
            float: right;
        }
        .username {
            left: unset;
            right: 4%;
        }
        .time {
            left: unset;
            right: 8%;
        }
    }
}
</style>