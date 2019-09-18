<template>
    <div id="app">
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'app',
}
</script>

<style lang="scss">
body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#app {
    width: 100%;
    height: 100%;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.slide-leave-active {
    transition: all 1s cubic-bezier(0.24, 1.06, 0.51, 0.98);
}
.slide-leave-to {
    transform: translateX(-100vw);
    opacity: 0;
}

</style>
