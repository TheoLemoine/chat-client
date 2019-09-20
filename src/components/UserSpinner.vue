<template>
    <div class="circle-global-container" :style="{'--size': size + 'px', '--spinner-width': spinnerWidth + 'px' }">
        <div class="circle-img-around">
            <img src="../assets/Contour_Poto.svg" alt="">
        </div>
        <div class="circle-img">
            <img :src="user.avatarLink" alt="">
        </div>
        <div class="circle-container">
            <div class="circle-ext">
                <div class="circle-middle">
                    <div class="circle-int">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import User from '../classes/User';

export default {
    props: {
        user: User,
        size: Number,
        spinnerWidth: Number,
    }
}
</script>

<style lang="scss">

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .circle-global-container{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        --size: 150px;
        --spinner-width: 12px;
    }

    .circle-container{
        border-radius: 100%;
        height: var(--size);
        width: var(--size);
        display: flex;
        margin-bottom: 40px;
        justify-content: center;
        align-items: center;
        margin-top: 36px;
    }

    .circle-ext{
        width: 90%;
        height: 90%;

        border-radius: 100%;
        border: calc(var(--spinner-width) / 2) solid transparent;
        border-right: calc(var(--spinner-width) / 2) solid white;
        border-bottom: calc(var(--spinner-width) / 2) solid white;

        transform:rotate(-45deg);

        display: flex;
        align-items: center;
        justify-content: center;
        
        animation: 6s linear infinite rotate;
        opacity: .8;
    }

    .circle-middle{
        width: 90%;
        height: 90%;

        border-radius: 100%;
        border: calc(var(--spinner-width) / 6) solid transparent;
        border-right: calc(var(--spinner-width) / 6) solid white;
        border-bottom: calc(var(--spinner-width) / 6) solid white;

        transform:rotate(-45deg);

        display: flex;
        align-items: center;
        justify-content: center;

        animation: 8s alternate infinite rotate;

    }

    .circle-int{
        width: 90%;
        height: 90%;

        border-radius: 100%;
        border: calc(var(--spinner-width) / 3) solid transparent;
        border-right: calc(var(--spinner-width) / 3) solid white;

        transform:rotate(-45deg);

        display: flex;
        align-items: center;
        justify-content: center;

        animation: 4s alternate infinite rotate;
    }

    .circle-img{
        background-color: #00abe95e;
        background-size: cover;

        width: calc(var(--size) / 1.7);
        height: calc(var(--size) / 1.7);

        border-radius: 100%;

        opacity: 0.8;

        overflow: hidden;

        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
    }

    .circle-img-around img{
        width: calc(var(--size) * 1.2);
        height: calc(var(--size) * 1.2);

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        left: 0 ;
        top: calc(var(--size) * 0.19);
    }

    .circle-img img{
        width: auto;
        height: 100%;
    }
</style>