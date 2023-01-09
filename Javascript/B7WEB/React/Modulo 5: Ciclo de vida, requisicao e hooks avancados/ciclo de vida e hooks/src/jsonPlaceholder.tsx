import {  useEffect, useState } from "react";
import { api } from "./api";
import { PostForm } from "./components/PostForm";
import PostItem from "./components/PostItem";
import { Post } from "./types/Post";

function App() {
  const [posts, setposts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    loadPosts()
  }, []);

  const loadPosts = async ()=>{
    setLoading(true)
    let json = await api.getAllPosts();
    setLoading(false)
    setposts(json);
  }

  const handleAddPost = async(title: string, body: string)=> {
    let json = await api.addNewPost(title, body, 1);
    console.log(json);
  }

  return (
    <div className="p-5">
      {loading && <div>Carregando...</div>}
   
   <PostForm onAdd= {handleAddPost}/>

      {!loading &&  posts.length > 0 && (
        <>
          <h1> Total de Posts : {posts.length}</h1>
          <div className="">
            {posts.map((item, index) => (
              <PostItem data={item}/>
            ))}
          </div>
        </>
      )}

      {!loading && posts.length === 0 && 
        <div>Não há posts para exibir</div>
      }
    </div>
  );
}

export default App;
