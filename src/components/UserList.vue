<template>
    <div>
        <h1>Users :</h1>
        <user-list-user 
            v-for="(user, index) in users" 
            :key="index"
            :user="user"
        ></user-list-user>
    </div>
</template>

<script>
import UserListUser from './UserListUser'

export default {
    props: {
        users: Array,
    },
    components: {
        UserListUser,
    },
}
</script>

<style>

</style>