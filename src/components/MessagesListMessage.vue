<template>
    <div>
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
</style>