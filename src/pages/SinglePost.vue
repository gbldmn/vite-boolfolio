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
        getSinglePost(){
            axios.get(`${this.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
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
<h1 class="mb-5 mt-1 container">singolo post</h1>
<!-- <h2 class="container">{{ project.title }}</h2>
<p class="container">{{ project.content }}</p> -->
  <!-- <div>
    <h2>technologies</h2>
    <ul>
        <li v-for="(elem,index) in project.technologies" :key="index">
            {{ elem.name }}
        </li>
    </ul>
  </div> -->
</template>

<style lang="scss">


</style>