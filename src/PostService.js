import axios from 'axios';

const url = "http://localhost:5000/api/posts/";

class PostService{
    // Get post
    static getPosts(){
      try {
       const res = axios.get(url)
       return res

      } catch (error) {
        console.log(error);
      }
    }

// Create Post
static createPost(text){
   axios.post(url,{
       text:text
   })
   .then( (response)=>{
    console.log(response);
  })
  .catch( (error)=> {
    console.log(error);
  });
}

static deletePost(id){
   axios.delete(`${url}${id}`)
   .then( (response)=> {
    console.log(response);
  })
  .catch( (error) =>{
    console.log(error);
  });

}
}

export default PostService