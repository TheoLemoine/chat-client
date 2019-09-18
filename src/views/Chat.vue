<template>
    <div>
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

<style>

</style>