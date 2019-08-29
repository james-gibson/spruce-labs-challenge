import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import Axios from 'axios';

Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const SERVER_URL = "https://us-central1-gibsunas-playground.cloudfunctions.net/spruce-labs-challenge-server";

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
      updateUser(Axios)(JSON.parse(JSON.stringify(user)));
    },
    createUser(context, payload) {
      createUser(Axios)(payload)
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
        })
    },
    deleteUser(context, userId) {
      deleteUser(Axios)(userId)
        .then(() => {
          store.dispatch('getUsers');
        })
    }
  },
  mutations: {
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
