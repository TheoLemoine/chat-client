<template>
    <div class="login">
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
    created() {
        const lastUser = JSON.parse(localStorage.getItem('user'))
        this.userName = lastUser.name
        this.avatarLink = lastUser.avatarLink
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
.login {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: orange;
}

form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>