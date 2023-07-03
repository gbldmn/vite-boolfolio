<script>
import axios from 'axios';


export default{
    name: 'SinglePost',
    data(){
        return{

            baseUrl: 'http://127.0.0.1:8000',
            post: null
        }
    },
    created(){
        // this.getProjects();
        this.getSinglePost();
    },
    methods: {

        goBack(){
            this.$router.back();
        },

        getSinglePost(){
            
            axios.get(`${this.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
               
                if (response.data) {
                    
                this.post = response.data.post;
                } else {
                // redirect alla pagina 404
                this.$router.push({ name: 'not-found' })
                }
            });
        } 
    },
}

</script>

<template>
<h1  class="mb-5 mt-1 container">singolo post</h1>

 <h2 class="container">{{ post.title }}</h2>
 <p class="container">{{ post.content }}</p>
   <div class="container">
    <h2>technologies</h2>
    <ul>
        <li v-for="(elem,index) in post.technologies" :key="index">
            {{ elem.name }}
        </li>
    </ul>
  </div>


  <div class="container">
    <a href="" @click.prevent="goBack" class="btn btn-primary">torna indietro</a>
  </div>
</template>

<style lang="scss">


</style>

<!-- v-if="post" -->