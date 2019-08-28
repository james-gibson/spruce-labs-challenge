import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import Axios from 'axios';

Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const SERVER_URL = "https://us-central1-gibsunas-playground.cloudfunctions.net/spruce-labs-challenge-server";
const randomNumber = Math.floor(Math.random() * (10 + 1));
const AVATAR_URL = `https://picsum.photos/id/${randomNumber}/200/300`;

const getUsers = (axios) => {
  return axios.get(SERVER_URL);
}

const deleteUser = (axios) => (userId) => {
  if (!userId) {
    return Promise.resolve();
  }
  return axios.delete(`${SERVER_URL}?id=${userId}`);
}

const createUser = (axios) => (payload) => {
  return axios.post(SERVER_URL, payload);
}

const updateUser = (axios) => (payload) => {
  return axios.put(SERVER_URL, payload);
}

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [],
    editEnabledId: '',
  },
  actions: {
    saveUser(context, user) {
      console.log('vuex action:', user)
      updateUser(Axios)(JSON.parse(JSON.stringify(user))).then(data => {
        context.commit("disableEditMode");
      })

    },
    enableEditMode(context, payload) {
      context.commit("disableEditMode");
      context.commit("enableEditMode", payload.user);
    },
    disableEditMode(context) {
      context.commit("disableEditMode");
    },
    createUser(context, payload) {
      // User id is hardcoded (support for multiple identified users is not implemented yet)
      const messageBody = {
        id: Date.now(),
        userId: '1',
        avatarUrl: AVATAR_URL,
        msg: payload
      };
      createUser(Axios)(messageBody)
        .then((data) => {
          context.commit("recieveUsers", data)
        });
    },
    getUsers(context) {
      getUsers(Axios)
        .then(({
          data
        }) => {
          context.commit("recieveUsers", data);

          // setTimeout(() => context.dispatch("getUsers"), 2000);
        })
    },
    deleteUser(context, userId) {
      context.commit("disableEditMode");
      deleteUser(Axios)(userId)
        .then((data) => {

          store.dispatch('getUsers');
          // context.commit("recieveUsers", data);

          // setTimeout(() => context.dispatch("getUsers"), 2000);
        })
    }
  },
  mutations: {
    clearUserCopy(state) {
      state.userCopy = {};
    },
    setUserCopy(state, payload) {
      state.userCopy = payload;
    },
    enableEditMode(state, user) {
      state.editEnabledId = user.id;
      state.userCopy = user;
    },
    disableEditMode(state) {
      state.editEnabledId = '';
      state.userCopy = {};
    },
    recieveUsers(state, payload) {
      state.users = payload.data.users;
    },
  }
})

store.dispatch('getUsers');
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
