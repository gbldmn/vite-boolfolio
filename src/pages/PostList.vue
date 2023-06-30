<script>
import axios from 'axios';


export default{
    name: 'PostList',
    data(){
        return{
            projects: [],
            baseUrl: 'http://127.0.0.1:8000',
            types: null,
            selectedType: "all"
        }
    },
    mounted(){
        this.getProjects();
        this.getTypes();
    },
    methods: {
        getProjects(){

            const params = {

            };

            if( this.selectedType !== 'all'){
                params.type_id = this.selectedType
            }

            axios.get( `${this.baseUrl}/api/projects`, { params } )
                .then( res => {
                    this.projects = res.data.projects
                } )
        },
        getTypes(){
            axios.get(`${this.baseUrl}/api/types`).then( res => {
                this.types = res.data.types
            })
        }
    },
}

</script>

<template>
<h1 class="mb-5 mt-1 container">Projects in front</h1>


<div class="container">


    <div class="mb-3">
        <label for="" class="form-label">filtro di tipologie </label>

        <select @change=" getProjects() " v-model="selectedType" class="form-select form-select-lg" name="" id="">
            <option value="all"> -- all --</option>
            <option :value="elem.id" v-for="(elem,index) in types " :key="index">{{ elem.name }}</option>

        </select>
    </div>


    <div class="row">
        <div class="col-4" v-for="(elem, index) in projects" :key="index">
            <div class="card">
                <img class="card-img-top" :src="`${baseUrl}/storage/${elem.cover_image}`" alt="title">
                <div class="card-body">
                    <router-link :to="{ name: 'post', params: { slug: elem.slug} }" class="btn btn-primary">
                        <h4 class="card-title">{{ elem.title }}</h4></router-link>
                    <p class="card-text">{{ elem.content }}</p>
                    <div>
                        <h5>types</h5>
                        <ul>
                         <li v-if="elem.type">{{ elem.type.name }}</li>
                        </ul>
                    </div>
                    <div>
                        <h5>technologies</h5>
                        <ul v-if="elem.technologies" >
                            <li class="" v-for="(elem, index) in elem.technologies" :key="index">{{ elem.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  
</template>

<style lang="scss">


</style>