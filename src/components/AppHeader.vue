<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <router-link class="navbar-brand" :to="{name: 'home'}">boolpress</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">Home</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'posts'}">blog</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'contact'}">contatti</router-link>
            </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>


<script>
export default {
    name: 'AppHeader',
    data() {
        
        return {

        }
    }
}


</script>

<style lang="scss" scoped>

.nav-link:hover {
  background-color: lightblue;
  border-radius: 20px;
}

</style>