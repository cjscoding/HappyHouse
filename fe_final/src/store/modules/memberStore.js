import jwt_decode from "jwt-decode";
import { login,register,update,deleteMember } from "@/api/member.js";
import { findById } from "../../api/member";


const memberStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    userInfo: null,
    isRegister: false,
    isUpdate: false,
    isDeleted: false,
  },
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_REGISTER: (state, isRegister) => {
      state.isRegister = isRegister;
    },
    SET_IS_DELETED: (state, isDeleted) => {
      state.isDeleted = isDeleted;
    },
    SET_IS_UPDATE: (state, isUpdate) => {
      state.isUpdate = isUpdate;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      await login(
        user,
        (response) => {
          if (response.data.message === "success") {
            let token = response.data["access-token"];
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            sessionStorage.setItem("access-token", token);
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
          }
        },
        () => {}
      );
    },
    async userRegister({ commit }, user) {
      await register(
        user,
        (response) => {
          if (response.data.message === "success") {
            commit("SET_IS_REGISTER", true);
          } else {
            commit("SET_IS_REGISTER", false);
          }
        },
        () => {}
      );
    },
    async userDelete({ commit }, userid) {
      await deleteMember(
        userid,
        (response) => {
          if (response.data.message === "success") {

            commit("SET_IS_DELETED", true);
          } else {
            commit("SET_IS_DELETED", false);
          }
        },
        () => {}
      );
    },
    async userUpdate({ commit }, user) {
      await update(
        user,
        (response) => {
          if (response.data.message === "success") {
            
            commit("SET_IS_UPDATE", true);
          } else {
            commit("SET_IS_UPDATE", true);
          }
        },
        () => {}
      );
    },
    getUserInfo({ commit }, token) {
      let decode_token = jwt_decode(token);
      findById(
        decode_token.userid,
        (response) => {
          if (response.data.message === "success") {
            commit("SET_USER_INFO", response.data.userInfo);
          } else {
            console.log("유저 정보 없음!!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default memberStore;
