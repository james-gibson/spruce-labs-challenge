<template>
  <div id="app">
    <header>
      <h1>User Management App</h1>
    </header>
    <main class="container">
      <button class="add-btn" @click="toggleModal">Add User</button>
      <section class="user-container">
        <User
          v-for="user in users"
          :key="user.id"
          :first-name="user.firstName"
          :last-name="user.lastName"
          :email-address="user.emailAddress"
          :user-id="user.userId"
          :id="user.id"
          :phone-number="user.phoneNumber"
          :avatar-url="user.avatarUrl"
        />
      </section>
    </main>
    <user-modal
      :is-shown="showModal"
      cta-copy="Add User"
      secondary-copy="Cancel"
      @onclose="toggleModal"
      @onsave="onModalSave"
    ></user-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import User from "./components/User.vue";
import UserModal from "./components/UserModal.vue";

export default {
  name: "app",
  data() {
    return {
      showModal: false
    };
  },
  components: {
    User,
    UserModal
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    ...mapActions(["createUser", "getUsers"]),
    toggleModal() {
      this.showModal = !this.showModal;
    },
    onModalSave(user) {
      this.createUser(user);
      this.toggleModal();
      this.getUsers();
    }
  }
};
</script>

<style lang="scss">
// fonts
@import url("https://fonts.googleapis.com/css?family=Montserrat|Zilla+Slab&display=swap");

// neutrals
$arctic: #f4f4f4;
$haze: #d3d3d1;
$onyx: #333745;
$pitch: #21232c;
// primaries
$lemon: #ffee11;
$sunny: #fff266;

html,
body {
  background-color: $onyx;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
}
body {
  background-color: $onyx;
  color: $haze;
  padding: 0 4rem;
  text-rendering: optimizeLegibility;

  p {
    font-size: 16px;
    line-height: 1.35;
  }

  h1,
  h2,
  h3 {
    font-family: "Montserrat", Helvetica, sans-serif;
    color: $arctic;
  }
  h4,
  h5,
  h6,
  p {
    font-family: "Zilla Slab", Courier, serif;
  }
  h1 {
    font-size: 5rem;
    text-shadow: 1px 0 $sunny;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.5rem;
    text-transform: lowercase;
    font-variant: small-caps;
    letter-spacing: 0.25rem;
  }
  h5 {
    font-size: 1.25rem;
    text-transform: lowercase;
    font-variant: small-caps;
    letter-spacing: 0.125rem;
  }
  h6 {
    font-size: 1.125rem;
    letter-spacing: 0.5rem;
    text-shadow: 1px 2px $pitch;
  }
  a {
    color: $lemon;
  }

  ul {
    padding: 0;
    li {
      list-style: none;
      border-bottom: 2px solid $pitch;
      padding-bottom: 2rem;
    }
  }

  header {
    nav {
      ul li {
        border: none;
        display: inline-block;
      }
    }
  }

  .user-container {
    display: flex;
    flex-wrap: wrap;
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    width: 100%;
    font-size: 16px;
    margin-right: 2rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem 2rem;
    font-family: "Montserrat";
    position: relative;
    text-align: left;
    padding-left: 2rem;
    font-variant: small-caps;
    color: $arctic;
    border: 3px solid $arctic;
    background-color: $onyx;
  }

  .add-btn {
    width: 10%;
    min-width: 288px;
  }
}
</style>
