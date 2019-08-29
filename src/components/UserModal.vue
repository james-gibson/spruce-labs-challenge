<template>
  <div class="modal-container" v-if="isShown">
    <div class="dialog">
      <button class="close" @click="onClose">X</button>
      <h3>{{header}}</h3>
      <form>
        <img alt="User Avatar" :src="avatarUrl" v-if="avatarUrl" class="avatar" />

        <div>
          <label for="firstname">First Name</label>
          <input id="firstname" v-model="formObj.firstName" />

          <label for="lastname">Last Name</label>
          <input id="lastname" v-model="formObj.lastName" />

          <label for="emailaddress">Email Address</label>
          <input id="emailaddress" type="email" v-model="formObj.emailAddress" />

          <label for="phonenumber">Phone Number</label>
          <input id="phonenumber" type="tel" v-model="formObj.phoneNumber" />

          <label for="avatarurl">Avatar Url</label>
          <input id="avatarurl" type="url" v-model="formObj.avatarUrl" />
        </div>
      </form>
      <div class="flex-row">
        <button v-if="ctaCopy" class="primary" @click="onSave">{{ctaCopy}}</button>
        <button v-if="secondaryCopy" class="secondary" @click="onClose">{{secondaryCopy}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userModal",
  data() {
    return {
      formObj: {
        id: this.id || "",
        firstName: this.firstName || "",
        lastName: this.lastName || "",
        emailAddress: this.emailAddress || "",
        userId: this.userId || "",
        phoneNumber: this.phoneNumber || "",
        avatarUrl: this.avatarUrl || ""
      }
    };
  },
  methods: {
    onClose() {
      this.$emit("onclose");
    },
    onSave() {
      this.$emit("onsave", this.formObj);
    }
  },
  props: {
    isShown: Boolean,
    header: String,
    ctaCopy: String,
    secondaryCopy: String,
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

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: rgba(210, 180, 20, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  .dialog {
    padding: 2rem 3rem;
    position: relative;
    background-color: $pitch;
    width: 40%;

    .close {
      font-weight: 700;
      padding: 0.25rem;
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 2rem;
      text-align: center;
    }

    .avatar {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      margin-bottom: 2rem;
    }

    form {
      label {
        font-family: "Montserrat";
      }
      input {
        width: 288px;
        padding: 0.5rem;
        margin-bottom: 2rem;
        display: block;
      }
    }

    button {
      margin-right: 2rem;
    }
  }
}
</style>
