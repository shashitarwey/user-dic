<template>
    <div>
        <div class="container">
        <h2>User Comments</h2>
        <div class="cards">
            <ul>
                <li v-for="comment in comments" :key="comment.id">
                    <div class="app-comments">
                    <strong>Name: </strong> <p>{{comment.name}}</p>
                    <strong>Email: </strong> <p>{{comment.email}}</p>
                    <strong>Body: </strong> <p>{{comment.body}}</p>
                    </div>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Comment",
    props: ["id"],
    computed: {
      comments() {
        return this.$store.state.data.postComments;
      }
    },
    mounted() {
        this.$store.dispatch("getComments", this.id)
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
    margin: 0;
    padding: 0;
}
ul{
    list-style-type: none ;
    margin: 0;
    padding: 0;
}


.app-comments{
  display: flex;
  border: 2px solid lightgray;
  border-radius: 5px;
  margin: 10px 0;
  padding: 5px 15px;
  flex-direction: column;
  justify-content: center;
  min-height: 120px;

  /* align-items: center; */
 text-align: justify;
 color: rgb(46, 46, 46);
 
}

.app-comments:hover{
    border: 2px solid gray;
    background: rgba(250, 235, 215, 0.603);
}
</style>