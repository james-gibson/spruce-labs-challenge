<template>
  <section :id="id" class="user-card">
    <div class="flex-row">
      <img class="avatar" :src="computedAvatar" :alt="computedName + '\'s avatar'" />
      <div class="data-column">
        <h4>{{computedName}}</h4>
        <p v-if="emailAddress">Email address: {{emailAddress}}</p>
        <p v-if="phoneNumber">Phone number: {{phoneNumber}}</p>
        <p>User ID: {{userId}}</p>
      </div>
      <div class="buttons">
        <button class="primary" @click="toggleModal">Edit</button>
        <button class="secondary" @click="destroyUser">Delete</button>
      </div>
    </div>
    <user-modal
      :first-name="firstName"
      :last-name="lastName"
      :email-address="emailAddress"
      :user-id="userId"
      :id="id"
      :phone-number="phoneNumber"
      :avatar-url="avatarUrl"
      :is-shown="showModal"
      cta-copy="Save"
      secondary-copy="Cancel"
      @onclose="toggleModal"
      @onsave="(obj) => onSave(obj)"
    ></user-modal>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import UserModal from "./UserModal.vue";
export default {
  name: "User",
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    computedName() {
      return `${this.firstName} ${this.lastName}`;
    },
    computedAvatar() {
      return this.avatarUrl
        ? this.avatarUrl
        : "https://66.media.tumblr.com/tumblr_nhgr5fWO3L1tjxym6o1_1420057203_cover.jpg";
    }
  },
  methods: {
    ...mapActions(["saveUser", "deleteUser", "getUsers"]),
    toggleModal() {
      this.showModal = !this.showModal;
    },
    onSave(formObj) {
      this.saveUser(formObj);
      this.toggleModal();
      this.getUsers();
    },
    destroyUser() {
      const userIdToDelete = this.id;

      this.deleteUser(userIdToDelete);
    }
  },
  components: {
    UserModal
  },
  props: {
    id: String,
    firstName: String,
    lastName: String,
    emailAddress: String,
    userId: String,
    phoneNumber: String,
    avatarUrl: String
  }
};
</script>

<style lang="scss" scoped>
// neutrals
$arctic: #f4f4f4;
$haze: #d3d3d1;
$onyx: #333745;
$pitch: #21232c;
// primaries
$lemon: #ffee11;
$sunny: #fff266;

.user-card {
  padding: 1.5rem;
  margin: 1rem;
  width: 50%;
  max-width: 860px;
  min-width: 600px;
  box-sizing: border-box;
  background-color: $pitch;
  border: 1px solid $sunny;

  .flex-row {
    .avatar {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
    }

    .data-column {
      flex-grow: 1;
      padding: 0 1.5rem;
    }

    .buttons {
      button {
        display: block;
      }
    }
  }
}
</style>
