<template>
    <div class="container">
       <h2>User Posts</h2>
       <div>
           <ul>
             
               <li v-for="post in posts" :key="post.id">
                 <div class="app-post">
                   <p><strong>Post Title: </strong>{{post.title}}</p>
                   <p><strong>Body: </strong>{{post.body}}</p>
                   </div>
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
  margin-bottom: 40px;
}
li{
  list-style-type: none;
}

p{
  margin: 10px 0;
  padding: 0;
}
.app-post{
  display: flex;
  border: 2px solid lightgray;
  border-radius: 5px;
  margin: 10px 0;
  padding: 5px 15px;
  flex-direction: column;
  justify-content: center;
  min-height: 120px;
  text-align: justify;
  color: rgb(46, 46, 46);
  /* background: rgba(250, 235, 215, 0.329); */
  /* align-items: center; */

}

.app-post:hover{
  border: 2px solid gray;
  background: rgba(250, 235, 215, 0.651);
}
</style>