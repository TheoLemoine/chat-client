<template>
    <div>
        will send : {{ toSend }}
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="toSend"><button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return { toSend: '', }
    },
    methods: {
        handleSubmit() {
            this.$emit('message-sent', this.toSend)
            this.toSend = ''
        }
    },
}
</script>

<style>

</style>