import Vue from 'vue'

import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: localStorage.getItem('access_token') || null ,
    },
    getters:{

        loggedIn(state){
            return state.token !==null
        }
    },
    mutations:{
        destroyToken(state){
            state.token=null

        },
        retrieveToken(state,token){
            state.token = token
        }
    },
    actions:{
        retrieveToken(context, credentials){
            return new Promise((resolve, reject)=>{
                axios.post('/login',{
                    email:credentials.email,
                    password:credentials.password,
                }).then(response=>{
                    const token= response.data.access_token
                    localStorage.setItem('access_token', token)
                    context.commit('retrieveToken',token)

      if (response.status == 200) {
        window.location = "/"
      }
                }).catch(error=>{
                    console.log(error)
                })
            })
       },

     destroyToken(context){
        axios.defaults.baseURL = '/api';
        axios.defaults.headers.common['Authorization'] = "Bearer " +
        context.state.token
         if(context.getters.loggedIn){
             return new Promise((resolve,reject)=>{
                 axios.post('logout')
                 .then(response=>{
                     localStorage.removeItem('access_token')
                     context.commit('destroyToken')
                     resolve(response)
                     if (response.status == 200) {
                        window.location = "/"
                      }
                 })
                 .catch(error=>{
                     localStorage.removeItem('access_token')
                     context.commit('destroyToken')
                     reject(error)
                 })
             })
         }
     }
    }
   })
