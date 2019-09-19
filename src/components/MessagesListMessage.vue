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
        position: absolute;
        left: 4%;
        top: 15%;
    }
    .time {
        position: absolute;
        bottom: 20%;
        left: 8%;
    }
    .content {
        width: fit-content;
        word-break: break-all;
        max-width: 40vw;
        min-width: 10vw;
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