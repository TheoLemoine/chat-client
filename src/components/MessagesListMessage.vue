<template>
    <div class="message">
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
}
</script>

<style lang="scss" scoped>

.message {
    margin: 6rem;
    padding: 1rem;

    font-size: 1.5rem;
    color: rgb(189, 189, 189);

    width: fit-content;
    max-width: 60%;
    min-width: 20%;
    word-break: break-all;

    border: solid transparent;
    border-image-source: url('../assets/message-box.svg');
    border-image-slice: 63 180 60 160 fill;
    border-image-width: 110px 380px 120px 350px;
    border-image-outset: 30px;
    border-image-repeat: round;
}

</style>