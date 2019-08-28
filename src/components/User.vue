<template>
  <div :id="id" class="card flex-row">
    <div class="toolbar flex-row" v-if="!this.isEditing">
      <div class="avatar">
        <img v-if="this.user.avatarurl" alt="User Avatar" :src="this.user.avatarurl" />
        <a @click="enableEdit">Edit</a>
      </div>
      <div>
        <p class="montserrat">{{emailAddress}} : {{lastName}}, {{firstName}}</p>
      </div>
    </div>
    <div v-if="this.isEditing">
      <div class="avatar">
        <img alt="User Avatar" :src="this.localUserCopy.avatarUrl" />
        <button @click="destroyUser()">Delete User</button>
      </div>
      <div>
        <label for="firstname">First Name:</label>
        <input id="firstname" v-model="localUserCopy.firstname" />

        <label for="lastname">Last Name:</label>
        <input id="lastname" v-model="localUserCopy.lastname" />

        <label for="emailaddress">Email Address:</label>
        <input id="emailaddress" type="email" v-model="localUserCopy.emailaddress" />

        <label for="phonenumber">Cell Phone:</label>
        <input id="phonenumber" type="tel" v-model="localUserCopy.phonenumber" />

        <label for="avatarurl">Avatar Url:</label>
        <input id="avatarurl" type="url" v-model="localUserCopy.avatarurl" />
      </div>
      <div class="flex-row">
        <button @click="disableEditMode">Cancel</button>
        <button @click="save">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "User",
  created() {
    this.localUserCopy = this.$store.state.userCopy;
  },
  updated() {
    this.localUserCopy = this.$store.state.userCopy;
  },
  data() {
    return {
      localUserCopy: {}
    };
  },
  computed: {
    isEditing() {
      if (!this.user.id || !this.$store.state.editEnabledId) {
        return false;
      }
      return this.user.id == this.$store.state.editEnabledId;
    },
    userCopy() {
      return this.$store.state.userCopy;
    }
  },
  methods: {
    ...mapActions([
      "saveUser",
      "deleteUser",
      "getUsers",
      "enableEditMode",
      "disableEditMode"
    ]),
    enableEdit() {
      this.enableEditMode(this);
      this.localUserCopy = Object.assign({}, this.userCopy);
    },
    disableEdit() {
      this.localUserCopy = {};
      this.disableEditMode();
      this.getUsers();
    },
    save() {
      const user = this.localUserCopy || {};
      this.saveUser(user);
      this.getUsers();
      this.disableEditMode();
    },
    destroyUser() {
      const userIdToDelete = this.localUserCopy.id;

      this.deleteUser(userIdToDelete);
    }
  },
  props: {
    id: String,
    user: Object,
    firstName: String,
    lastName: String,
    emailAddress: String,
    userId: String
  }
};
</script>
