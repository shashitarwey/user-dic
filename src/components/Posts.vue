<template>
    <div>
       <h2>Posts</h2>
       <div>
           <ul>
               <li v-for="post in posts" :key="post.id">
                   {{post.title}}
               </li>
           </ul>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'Posts',
    props: ["id"],
    computed: {
      posts() {
        return this.$store.state.data.userPosts;
      }
    },
    mounted() {
        this.$store.dispatch("getPosts", this.id)
    },
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 20px;
}
</style>