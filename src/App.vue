<script>
import axios from 'axios';

export default{
    data(){
        return{
            projects: [],
            baseUrl: 'localhost:8000/api'
        }
    },
    mounted(){
        this.getProjects();
    },
    methods: {
        getProjects(){
            axios.get( `${this.baseUrl}/projects` )
                .then( res => {
                    this.projects = res.data.projects
                } )
        }
    },
}

</script>

<template>
<h1>ciao</h1>
  
</template>

<style lang="scss">
@use './style/main.scss';

</style>
