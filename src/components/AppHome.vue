<template>
  <div>
    <h2>List of Users</h2>
    <div class="box back-ground container mt-5">
      <div class="card m-3 card-width" v-for="user in users" :key="user.id">
        <div class="card-body">
          <h5 class="card-title">Name: {{user.name}}</h5>
            <p class="card-text">Username: {{user.username}}</p>
            <p class="card-text">Email: {{user.email}}</p>
            <!-- <router-link :to = "{ path: '/posts/' + user.id }" class="btn btn-primary">View Posts</router-link> -->
            <button class="btn btn-primary mr-3" @click= viewPost(user.id) >View Posts</button>
            <button class="btn btn-primary ml-3" @click= viewComments(user.id) >View Comments</button>
        </div>
      </div>
    </div> 
  </div>
  
</template>

<script>
//import { NitrozenButton } from "@gofynd/nitrozen-vue";

export default {
  name: 'AppHome',
  // components: {
  //   "ntz-button": NitrozenButton
  // },
  data() {
    return {
      msg: ""
    }
  },
  computed: {
      users() {
        return this.$store.state.data.users;
      }
  },
  mounted() {
        this.$store.dispatch("getUsers")
  },
  methods: {
    viewPost(id){ 
      this.$router.push("/posts/" + id)
    },
    viewComments(id) {
      this.$router.push("/comments/" + id);
    }
  }  
}

</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.card-width {
  display: inline-flex;
  width: 18rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 215px;
  
}
button{
  margin: 0 3px;
}
.back-ground {
  background-color: antiquewhite;
}
h2 {
  text-align: center;
  margin-top: 20px;
}
</style>
