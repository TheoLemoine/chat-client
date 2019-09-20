<template>
    <div class="chat-container">
        <users-list :users="$store.state.connectedUsers"></users-list>
        <messages-list :messages="$store.state.messages"></messages-list>
        <message-box></message-box>
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
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, #091a2c44 0%, #091a2c 100%), 
            url('../assets/BG.svg') repeat;
        background-size: 100%, 15%;
        
        background-color: #064766;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;        
    }
</style>