<template>
  <div>
      {{ user.name }}
  </div>
</template>

<script>
import User from '../classes/User'

export default {
  props: {
    user: User,
  },
}
</script>

<style>

</style>