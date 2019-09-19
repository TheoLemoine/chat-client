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

@font-face {
    font-family: "korolev";
    src: url("assets/fonts/Korolev Compressed.woff2") format("woff2"), /* chrome、firefox */
    url("assets/fonts/Korolev Compressed.woff") format("woff"), /* chrome、firefox */
    url("assets/fonts/Korolev Compressed.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url("assets/fonts/Korolev Compressed.svg") format("svg"); /* iOS 4.1- */
}

@font-face {
    font-family: "avenir";
    src: url("assets/fonts/avenir.woff2") format("woff2"), /* chrome、firefox */
    url("assets/fonts/avenir.woff") format("woff"), /* chrome、firefox */
    url("assets/fonts/avenir.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url("assets/fonts/avenir.svg") format("svg"); /* iOS 4.1- */
}

body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

#app {
    width: 100%;
    height: 100%;
    font-family: 'avenir';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.sci-fi-box {
    margin: 3rem 3.5rem;
    padding: 1rem 2rem;

    font-family: 'avenir';
    font-size: 1.3rem;
    color: white;

    border: 1rem solid transparent;
    border-image-source: url('assets/ball/B2/Triste.svg');
    border-image-slice: 55 100 55 140 fill;
    border-image-width: auto;
    border-image-outset: 0;
    border-image-repeat: stretch;

    &.reverse {
        border-image-source: url('assets/ball/B1/Triste.svg');
    }
}

.slide-leave-active {
    transition: all 1s cubic-bezier(0.24, 1.06, 0.51, 0.98);
}
.slide-leave-to {
    transform: translateX(-100vw);
    opacity: 0;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
  background-color: transparent;
}

/* Handle */
*::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  transition: all 0.2s ease;
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  width: 7px;
  height: 7px;
}

</style>
