<template>
  <app-header></app-header>
  <div class="container">
    <div>
      <button type="button" class="btn btn-primary mr-1" @click="active = 'compUser'">Users</button>

      <button type="button" class="btn btn-secondary" @click="active = 'compAddUser'">Add users</button>
    </div>

    <br />

    <component :is="this.active"></component>
  </div>
  <app-footer></app-footer>
</template>

<script>
import compUser from './components/User/Get-Users.vue';
import compAddUser from './components/User/AddUser.vue';
export default {
  data() {
    return {
      active: 'compUser'
    }
  },
  components: {
    compUser,
    compAddUser
  }
}
</script>