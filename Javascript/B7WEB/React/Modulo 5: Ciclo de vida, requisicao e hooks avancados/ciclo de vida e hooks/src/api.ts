import axios from "axios";

const http = axios.create({
    baseURL :  "https://jsonplaceholder.typicode.com"
});

export const api = {
    getAllPosts: async ()=>{
        let res = await http.get('/posts');
        return res.data
    },

    addNewPost: async ( title: string, body: string, userId: number) =>{
       /*  let response = await fetch(`${BASE}/posts`, {
            method:"POST",
            body:JSON.stringify({title,body,userId: userId}),
            headers:{'Content-Type': 'application/json'}
          })
          let json = await response.json();
          return json; */

          let res= await http.post('/posts',{
            title, body, userId
          })
          return res.data;
    }
}