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
        background-color: rgb(56, 55, 66);

        display: flex;
        flex-direction: column;
    }
</style>