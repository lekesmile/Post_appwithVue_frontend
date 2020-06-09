
import axios from 'axios';

const url = "http://localhost:5000/api/posts/";

const PostFunctions ={
    getPost: async ()=>{
            try {
             const res = await axios.get(url)
             return res;
      
            } catch (error) {
              console.log(error);
            }
        },
    
    createPost: async (text) =>{
        await axios.post(url,{
            text:text
        })
        .then( (response)=>{
         console.log(response);
       })
       .catch( (error)=> {
         console.log(error);
       });
     },

     deletePost: async (id) =>{
        await axios.delete(`${url}${id}`)
        .then( (response)=> {
         console.log(response);
       })
       .catch( (error) =>{
         console.log(error);
       });
     
     },

     updatPost: async (id, text) => {
         try {
             axios.get(`${url} ${id}`)
            .then((response)=>{
                console.log(response)
            })
            await axios.post(url,{
                text:text
            })
            .then( (response)=>{
             console.log(response);
           })
         } catch (error) {
            console.log(error);
         }
         
     },

}



export default PostFunctions