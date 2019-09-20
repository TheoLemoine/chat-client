<template>
    <div class="chat-container">
        <users-list :users="$store.state.connectedUsers"></users-list>
        <messages-list :messages="$store.state.messages"></messages-list>
        <message-box></message-box>

        <div class="circle-global-container2">
            <div class="circle-container">
                <div class="circle-ext">
                    <div class="circle-middle">
                        <div class="circle-int">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="circle-global-container4">
            <div class="circle-container4">
                <div class="circle-ext">
                    <div class="circle-middle">
                        <div class="circle-int">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="circle-global-container5">
            <div class="circle-container5">
                <div class="circle-ext">
                    <div class="circle-middle">
                        <div class="circle-int">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="circle-global-container6">
            <div class="circle-container6">
                <div class="circle-ext">
                    <div class="circle-middle">
                        <div class="circle-int">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MessageBox from '../components/MessageBox'
import MessagesList from '../components/MessagesList'
import UsersList from '../components/UsersList'

export default {
    components: {
        MessageBox,
        MessagesList,
        UsersList,
    },
}
</script>

<style lang="scss" scoped>
    .chat-container {
        z-index: 999;
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, #091a2c44 0%, #091a2c 100%),
            url('../assets/BG.svg') repeat,
            url('../assets/left-sider.svg') no-repeat 5% 50%;
        background-size: 100%, 15%, 10%;

        background-color: #064766;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
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
        height: 700px;
        width: 700px;
        display: flex;
        margin-bottom: 40px;
        justify-content: center;
        align-items: center;
        margin-top: 36px;
    }


    .circle-container4{
        border-radius: 100%;
        height: 300px;
        width: 300px;
        display: flex;
        margin-bottom: 40px;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    .circle-container5{
        border-radius: 100%;
        height: 200px;
        width: 200px;
        display: flex;
        margin-bottom: 40px;
        justify-content: center;
        align-items: center;
        margin-top: 500px;
    }

    .circle-container6{
        border-radius: 100%;
        height: 200px;
        width: 200px;
        display: flex;
        margin-bottom: 40px;
        justify-content: center;
        align-items: center;
        margin-top: -300px;
    }

    .circle-global-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .circle-global-container2 {
        display: flex;
        justify-content: center;
        align-items: center ;
        position: absolute;
        left: -40%;
        opacity: 0.1;
    }

    .circle-global-container3 {
        display: flex;
        justify-content: center;
        align-items: center ;
        position: absolute;
        right: -30%;
        opacity: 0.15;
    }

    .circle-global-container4 {
        display: flex;
        justify-content: center;
        align-items: center ;
        position: absolute;
        left: 20%;
        opacity: 0.05;
    }

    .circle-global-container5 {
        display: flex;
        justify-content: center;
        align-items: center ;
        position: absolute;
        right: 30%;
        opacity: 0.1;
    }

    .circle-global-container6 {
        display: flex;
        justify-content: center;
        align-items: center ;
        position: absolute;
        right: 20%;
        opacity: 0.1;
    }

    .circle-ext{
        width: 95%;
        height: 95%;
        border-radius: 400px;
        border: 6px solid transparent;
        border-right: 6px solid white;
        border-bottom: 6px solid white;
        -webkit-transform:rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: 7s linear infinite rotate;
    }

    .circle-middle{
        width: 95%;
        height: 95%;
        border-radius: 400px;
        border: 2px solid transparent;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
        -webkit-transform:rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: 15s alternate infinite rotate;

    }

    .circle-int{
        width: 95%;
        height: 95%;
        border-radius: 400px;
        border: 4px solid transparent;
        border-right: 4px solid white;
        -webkit-transform:rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: 6s alternate infinite rotate;
    }
</style>
