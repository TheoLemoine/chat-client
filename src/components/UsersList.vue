<template>  
    <div class="user-list-container" :class="{open: isOpen}">
        <div class="user-list">
            <users-list-user 
                v-for="(user, index) in users" 
                :key="index"
                :user="user"
            ></users-list-user>
        </div>
        <button class="user-list-open-button" @click="isOpen = !isOpen">Open</button>
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
    data() {
        return {
            isOpen: false,
        }
    },
    components: {
        UsersListUser,
    },
}
</script>

<style lang="scss" scoped>
    .user-list-container {
        --list-width: 15vw;
        position: absolute;
        top: 0;
        left: calc(0vw - var(--list-width));

        display: flex;
        align-items: center;

        transition: left cubic-bezier(0.24, 1.06, 0.51, 0.98) 0.5s;

        &.open {
            left: 0vw;
        }

        .user-list {
            width: var(--list-width);
            height: 100vh;
            background-color: gray;

            &-open-button {
                color: red;
            }
        }
    }
</style>