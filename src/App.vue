<template>
  <div class="aws-app">
    <img alt="Vue logo" src="./assets/logo.png" class="app-logo">
    <h1>AWS Example App</h1>
    <div class="app-functionality">
      <add-user></add-user>
      <UserList></UserList>
    </div>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
import AddUser from '@/components/AddUser.vue';

export default {
  name: 'App',
  components: {
    AddUser,
    UserList,
  },
};
</script>

<style lang="scss">
body {
  --bs-body-bg: #2c3e50;
}

.app-logo {
  width: 50px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}

.app-functionality {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  >* {
    min-width: 35%;
  }
}

</style>
