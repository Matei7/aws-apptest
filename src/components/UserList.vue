<template>
  <div class="users-list">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.username }}
      </li>
    </ul>

    <button @click="fetchUsers">Fetch Users</button>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      fetch('https://api.appstest.click/users')
        .then((response) => response.json())
        .then((json) => {
          this.users = json;
          json.forEach((user) => {
            console.log((JSON.parse(user.data)));
          });
        });
    },
  },
};
</script>
