<template>
    <div>
        <h1>Users :</h1>
        <users-list-user 
            v-for="(user, index) in users" 
            :key="index"
            :user="user"
        ></users-list-user>
    </div>
</template>

<script>
import UsersListUser from './UsersListUser'

export default {
    props: {
        users: {
           type: Array,
           required: true,
        }
    },
    components: {
        UsersListUser,
    },
}
</script>

<style>

</style>