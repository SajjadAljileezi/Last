<template>
<div v-if="loggedIn" class="container mt-5" >
    <div class="row">
    <div v-for="(img, index) in imgs" :key="index" class="col">
<div  class="card" style="width: 18rem;">
  <img class="card-img-top" :src="img.image" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
 <div class="btn-group" role="group" aria-label="Basic example">
  <button @click="grey(img.image)"  type="button" class="btn btn-secondary">Grey</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
</div>
</div>
</div>
</div>
</template>


<script>

export default {
data(){
    return{
        imgs: [],
    }
},
computed:{
  loggedIn(){
         return this.$store.getters.loggedIn

     },

},
  created() {
      const token= localStorage.getItem('access_token')
       axios.defaults.baseURL = '/api';
        axios.defaults.headers.common['Authorization'] = "Bearer " +token
    axios
      .get("/gimage")
      .then(response => {
        this.imgs = response.data;
      })
      .catch(e => {
        console.error(e);
      });
  },
methods:{
grey(image){
     const token= localStorage.getItem('access_token')
       axios.defaults.baseURL = '/api';
        axios.defaults.headers.common['Authorization'] = "Bearer " +token
        // const src = _image
    axios
      .post("/grey",{
          src: image
      })
      .then(response => {

      })
      .catch(e => {
        console.error(e);
      });
  },

}

}


</script>
