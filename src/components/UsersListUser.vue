<template>
        <div class="container-name">
            <p>{{ user.name }}</p>
            <div class="name-line"></div>
            <div class="dot-line"></div>
        </div>
</template>

<script>
import User from '../classes/User'

export default {
    props: {
        user: {
            type: User,
            required: true,
        },
    },
}
</script>

<style>
    .container-name{
        margin: 15px 30px;
        width: 120px;
        height: 50px;
        border-top: 1.5px solid white;
        transform: rotate(-20deg);
    }

    .container-name::after{
        content: '';
        position: absolute;
        background: white;
        width: 1.5px;
        height: 40px;
        top: -13.8px;
        right: -18.5px;
        transform: rotate(-70deg);
    }

    .container-name::before{
        content: '';
        position: absolute;
        background: white;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        top: 8.1px;
        right: -45px;
        transform: rotate(-70deg);
    }

    .container-name p{
        text-transform: uppercase;
        font-size: 1.25rem;
        color: white;
        position: relative;
        top: -45px;
        left: -30px;
        letter-spacing: .395rem;
        font-family: korolev, sans-serif;
        font-style: normal;
        font-weight: 500;
        text-align: left;
        padding-left: 30px;
    }

</style>
