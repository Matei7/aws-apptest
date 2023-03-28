<template>
  <div class="add-user">
    <h3>Add a new user</h3>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.userName">
      </div>

      <button type="submit" class="btn btn-primary" @click="fakeSubmit">Submit</button>
    </form>
    <transition name="fade" mode="out-in">
      <div aria-live="polite" aria-atomic="true"
           class="bg-body-secondary position-fixed top-0 start-50 translate-middle-x bd-example-toasts rounded-3 notification-toast">
        <div class="toast-container p-3 " id="toastPlacement">
          <div class="toast" :class="{show:showSubmitFeedback}">
            <div class="toast-header">
              <strong class="me-auto">Message:</strong>
            </div>
            <div class="toast-body">
              Success!
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AddUser',
  data() {
    return {
      form: {
        userName: '',
      },
      showSubmitFeedback: false,
    };
  },
  methods: {
    fakeSubmit(event) {
      event.preventDefault();
      fetch('https://api.appstest.click/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.form.userName,
        }),
      })
        .then((response) => {
          if ( response.status === 200 ) {
            this.showSubmitFeedback = true;
            // setTimeout(() => {
            //   this.showSubmitFeedback = false;
            // }, 2000);
          }
        });
    },
  },
};
</script>

<style lang="scss">

.toast-body{
  background-color: rgb(49, 129, 18);
}

.add-user {
  max-width: 35%;
}

.notification-toast {
  width: 200px;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>
