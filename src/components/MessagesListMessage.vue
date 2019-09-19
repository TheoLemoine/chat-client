<template>
    <div class="message" :class="{ owned: isOwned }">
        {{ message.createdAt.format('h:mm:ss') }} : {{ message.user.name }} : {{ message.content }}
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
    margin: 3rem;
    padding: 1rem 2rem;

    font-size: 1.3rem;
    color: rgb(189, 189, 189);

    width: fit-content;
    max-width: 40%;
    min-width: 20%;
    word-break: break-all;

    border: 1rem solid transparent;
    border-image-source: url('../assets/bulle.svg');
    border-image-slice: 55 100 55 140 fill;
    border-image-width: auto;
    border-image-outset: 0;
    border-image-repeat: stretch;

    &.owned {
        align-self: flex-end;
    }
}

</style>