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

</style>
