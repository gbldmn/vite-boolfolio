<!-- <script>

export default {
    name: "ProjectCard.vue",
}





</script>

<template>
    <h1 class="mb-5 mt-1">Projects in front</h1>
    
    
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="(elem, index) in projects" :key="index">
                <div class="card">
                    <img class="card-img-top" :src="`${baseUrl}/storage/${elem.cover_image}`" alt="title">
                    <div class="card-body">
                        <h4 class="card-title">{{ elem.title }}</h4>
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
      
</template> -->