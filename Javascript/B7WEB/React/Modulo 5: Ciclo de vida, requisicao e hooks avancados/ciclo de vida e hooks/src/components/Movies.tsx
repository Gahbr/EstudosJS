import { ChangeEvent, useEffect, useState } from "react";
import { Movie } from "../types/Movie";

function Movies() {
  const [movies, setmovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    LoadMovies();
  }, []);

  const LoadMovies = async () => {
    try {
      setLoading(true);
      let response = await fetch("https://api.b7web.com.br/cinema/");
      let json = await response.json();
      setLoading(false)
      setmovies(json);
    } catch (error) {
      setLoading(false);
      console.error("Erro!",error)
    }
  };

  return (
    <div>

      {loading && 
       <div>Carregando...</div>
      }
     
     {!loading && 
     <>
     <h1> Total de filmes : {movies.length}</h1>
        <div className="grid grid-cols-6 gap-3">
          {movies.map((item, index) => (
            <div key={index}>
              <img src={item.avatar} alt="poster filme" className="w-32 block" />
              {item.titulo}
            </div>
          ))}
        </div>
      </>
      }
    </div>
  );
}

export default Movies;
