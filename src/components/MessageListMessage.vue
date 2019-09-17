<template>
    <div>
        {{ message.user.name }} : {{ message.content }}
    </div>
</template>

<script>
import Message from '../classes/Message'

export default {
    props: {
        message: Message,
    },
}
</script>

<style>

</style>