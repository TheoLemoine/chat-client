<template>
    <div class="slider-container">
        <div class="user-list-container" :class="{open: isOpen}">

            <user-spinner :user="$store.state.currentUser" :size="150" :spinnerWidth="12"></user-spinner>

            <div class="usernames-container">
                <h2 class="username">{{$store.state.currentUser.name}}</h2><div class="open-slider" @click="isOpen = !isOpen" :class="{open: isOpen}"></div>

                <div class="names">
                    <users-list-user
                            v-for="(user, index) in users"
                            :key="index"
                            :user="user"
                    ></users-list-user>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UsersListUser from './UsersListUser'
import UserSpinner from './UserSpinner'

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
        UserSpinner,
    },
}
</script>

<style lang="scss" scoped>

    .user-list-container {
        --list-width: 20vw;
        width: var(--list-width);
        height: 100%;

        z-index: 998;
        position: absolute;
        top: 0;
        left: calc(-1 * var(--list-width));

        background-color: #091a2c;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow:  3px 3px 15px 15px rgba(0,0,0,0.4);

        transition: left cubic-bezier(0.24, 1.06, 0.51, 0.98) 0.5s;

        &.open {
            left: 0;
        }

    }

    .open-slider{
        cursor: pointer;
        position: absolute;
        top: 50vh;
        height: 30px;
        width: 30px;
        left: calc(var(--list-width) + 30px);
        border-right: 1.5px solid white;
        border-top: 1.5px solid white;
        z-index: 998;
        transition: transform .6s ease-in-out;
        transform: rotate(45deg);

        &.open {
            transform: rotate(45deg) rotate3d(1, 1, 0, 180deg);
        }
    }

    img{
        width: 100%;
    }

    .usernames-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-top: 30px;
    }

    .username{
        font-size: 2rem;
        text-align: center;
        color: white;
        letter-spacing: .395rem;
        font-family: 'korolev', sans-serif;
        font-style: normal;
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 50px;
    }

    .names{
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 10px;
        max-height: 40vh;
    }
</style>
