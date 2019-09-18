<template>
    <div>
        <form @submit.prevent="handleUserConnect">
            Name
            <input type="text" v-model="userName">
            Picture
            <input type="url" v-model="avatarLink">
            <button type="submit">Connect</button>
        </form>
    </div>
</template>

<script>
import User from '../classes/User'

export default {
    data() {
        return {
            userName: '',
            avatarLink: '',
        }
    },
    methods: {
        handleUserConnect(event) {
            this.$store.dispatch('connectUser', new User(this.userName, this.avatarLink))
                .then(() => this.$router.push({name: 'chat'}))
                .catch(console.error)
        },
    },
}
</script>

<style>

</style>