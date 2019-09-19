<template>
    <div class="message" :class="{ owned: isOwned }" ref="message">
        <user-spinner 
            :user="message.user" 
            :size="50" 
            :spinnerWidth="3" 
            class="avatar"
        ></user-spinner>
        <div class="username">
            {{ message.user.name }}
        </div>
        <div class="time">
            {{ message.createdAt.format('H:mm') }}
        </div>
        <div class="sci-fi-box content" 
            :class="[isOwned ? 'reverse' : '', this.$store.state.theme]">
                {{ message.content }}
        </div>
    </div>
</template>

<script>
import Message from '../classes/Message'
import UserSpinner from './UserSpinner'

export default {
    props: {
        message: {
            type: Message,
            required: true,
        },
    },
    mounted() {
        this.$refs.message.scrollIntoView(false)
    },
    computed: {
        isOwned() {
            return this.$store.state.currentUser.name === this.message.user.name
        },
    },
    components: {
        UserSpinner,
    }
}
</script>

<style lang="scss">
.message {

    color: white;
    position: relative;

    .username {
        font-size: 1.25rem;
        font-family: 'korolev';
        text-transform: uppercase;
        letter-spacing: 0.35em;
        position: absolute;
        left: 4.5%;
        top: 15%;
    }
    .time {
        
        font-size: 0.8rem;
        font-family: 'avenir';
        position: absolute;
        letter-spacing: 0.2em;
        bottom: 19%;
        left: 8.5%;
    }
    .content {
        
        font-size: 0.9rem;
        width: fit-content;
        word-break: break-all;
        max-width: 40vw;
        min-width: 10vw;
    }
    .avatar {
        position: absolute;
        top: -12%;
        
        .circle-img-around {
            display: none;
        }
    }

    &.owned {
        .content {
            float: right;
        }
        .username {
            left: unset;
            right: 5%;
        }
        .time {
            left: unset;
            right: 9%;
        }
        .avatar {
            display: none;
        }
    }
}
</style>