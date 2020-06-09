


<template>
  <div class="container">
    

    <!-- create Post -->
    <div class="creatpost">
      <h3 class="posttitle"> Write your post</h3>
      <form  action="">
        <textarea name="" id="" cols="60" rows="10" v-model="text"></textarea>
        <div class="but">
          <button v-on:click="createPost" type="submit">Post </button>
        </div>
        
      </form>
    </div>
    <h1>Lastest Post</h1>
    <p class="error" v-if="error">{{error}}</p>
    <p class="success" v-if="success">{{success}}</p>
    <div class="post-container" 
    v-for="(post, index) in posts"
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post._id"
    >
      <div class="individual-post">
      <p class="text"> {{post.text}} </p>
      <p class="text">{{`${post.createdAt}`}} </p>
      <button class="btn-post1">Update</button>
      <button class="btn-post2" v-on:click="deletePost" type="submit">Delete</button>
      </div>
    
    </div>
  </div>
</template>

<script>
import PostService from '../PostService'
// import PostFunctions from '../PostFunctions'

export default {
  name: 'PostComponent',
  data() {
    return {
      posts:[],
      error: '',
      success:'',
      text: ''
    }
  },
// create a post request

  async created(){
    try {
      const res = await PostService.getPosts();
      this.posts = res.data.posts.map(data =>{
        return data
      })
  
      console.log(this.posts)
     
    } catch (error) {
      this.error = error.message;
    }

  },


//send a post request

  methods: {
    async createPost(e, success){
      try {
         if(e){
        e.preventDefault();
      }
       await PostService.createPost(this.text)
       this.posts = await PostService.getPosts();
       this.text= ''
       this.success = success
      } catch (error) {
        this.error = error.message
      }
    
      
    },
     async deletePost(){
     try {
       await PostService.deletePost(this.posts._id)
       console.log(this.posts._id)
     } catch (error) {
       this.error = error.message
     }
  }

  },

 
  
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
   max-width: 800px;
    margin: 0 auto;
     }

.createpost{
  display: flex;
  flex-direction: row;
}

textarea {
  width: 50%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}

button{
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  width: 30%;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}

.individual-post{
  background-color: #4CAF50;
  color: white;
  padding: 20px 0;
  margin: 10px 0;
}
.btn-post1{
  background-color: white;
  color: black;
  border: 2px solid #4CAF50; 
  padding: 10px 24px;
  font-size: 10px;
  border-radius: 6px;
  font-weight:  bold;
  cursor: pointer;
  text-align: center;
  width: 10%;
  
}
.btn-post1:hover{
  background-color: black; /* Green */
  color: white;
}
.btn-post2{
 background-color: white;
  color: red;
  border: 2px solid #4CAF50; /* Green */
  padding: 10px 24px;
  font-size: 10px;
  border-radius: 6px;
  text-align: center;
  font-weight:  bold;
  cursor: pointer;
  text-align: center;
  width: 10%;

}
.btn-post2:hover{
  background-color: red; /* Green */
  color: white;
}

</style>
