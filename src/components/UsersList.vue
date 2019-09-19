<template>
    <div class="slider-container">


    <div class="user-list-container" :class="{open: isOpen}">

        <div class="circle-global-container">
            <div class="circle-img-around">
                <img src="../assets/Contour_Poto.svg" alt="">
            </div>
            <div class="circle-img">
                <img src="https://image.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg" alt="">
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



        <div class="usernames-container">
            <h2 class="username"> Théo</h2><div class="open-slider" @click="isOpen = !isOpen" :class="{slide: isOpen}"></div>

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
        z-index: 998;
        --list-width: -.5vw;
        position: absolute;
        top: 0;
        width: 280px;
        left: calc(0vw - var(--list-width));

        background-color: #091a2c;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        box-shadow:  3px 3px 15px 15px rgba(0,0,0,0.4);

        transition: left cubic-bezier(0.24, 1.06, 0.51, 0.98) 0.5s;

        &.open {
            left: -20vw;
        }

    }

    .open-slider.slide{
        transform: rotateZ(40deg);
    }

    img{
        width: 100%;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }


    .circle-container{
        border-radius: 100%;
        height: 150px;
        width: 150px;
        display: flex;
        margin-bottom: 40px;
        justify-content: center;
        align-items: center;
        margin-top: 36px;
    }

    .circle-global-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .circle-ext{
        width: 90%;
        height: 90%;
        border-radius: 200px;
        border: 6px solid transparent;
        border-right: 6px solid white;
        border-bottom: 6px solid white;
        -webkit-transform:rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: 6s linear infinite rotate;
        opacity: .8;
    }

    .circle-middle{
        width: 90%;
        height: 90%;
        border-radius: 200px;
        border: 2px solid transparent;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        -webkit-transform:rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: 8s alternate infinite rotate;

    }

    .circle-int{
        width: 90%;
        height: 90%;
        border-radius: 200px;
        border: 4px solid transparent;
        border-right: 4px solid white;
        -webkit-transform:rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: 4s alternate infinite rotate;
    }

    .circle-img{
        background-color: #00abe9;
        width: 80px;
        height: 80px;
        border-radius: 200px;
        opacity: 0.1;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        position: absolute;
    }

    .circle-img-around{
        width: 205px;
        height: 205px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50px;
        top: 15px;
    }


    .circle-img img{
        width: auto;
        height: 100%;
    }

    .container-name{
        margin: 15px 30px;
        width: 120px;
        height: 50px;
        border-top: 1.5px solid white;
        transform: rotate(-20deg);
    }

    .container-name p{
        text-transform: uppercase;
        font-size: 2rem;
        color: white;
        position: relative;
        top: -25px;
        letter-spacing: .395rem;
        font-family: KorolevCompressedW04-Thin, sans-serif;
        font-style: normal;
        font-weight: 500;
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
        font-family: KorolevCompressedW04-Medium, sans-serif;
        font-style: normal;
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 50px;
    }

    .names{
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 10px;
        max-height: 355px;
    }

    .open-slider{
        cursor: pointer;
        position: absolute;
        top: 350px;
        height: 30px;
        width: 30px;
        left: 300px;
        transform: rotate(45deg);
        border-right: 1.5px solid white;
        border-top: 1.5px solid white;
        z-index: 998;
        transition: transform .5s ease;
        transform: rotateZ(220deg);
    }



</style>
