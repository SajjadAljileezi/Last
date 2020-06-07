<template>
<div v-if="loggedIn" class="container mt-5" >
<div >
   <div class="custom-file mt-5">
  <input @change="onFileSelected" type="file" class="custom-file-input" id="customFile">
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>
  <button  @click="onUpload"   type="button" class="btn m-3 btn-primary">Sign in</button>
</div>
</div>
</template>


<script>

export default {
data(){
    return{
        selectedFile:null,
    }
},
computed:{
  loggedIn(){
         return this.$store.getters.loggedIn

     }
},
methods:{
onFileSelected(e){
   this.selectedFile=e.target.files[0]
  },
  onUpload(){
      const token= localStorage.getItem('access_token')
    const fd = new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name)
      axios.defaults.baseURL = '/api';
        axios.defaults.headers.common['Authorization'] = "Bearer " +token


    axios.post('/uploadi',fd)
    .then(res=>{

    })
  }

}
}
</script>
