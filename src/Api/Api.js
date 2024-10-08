import axios from "axios";
import { ApiKey } from "./apiKey";


export const GetListFilm = (setState) =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`)
    .then((response)=>{
        setState(response.data.results);
        console.log(response.data.results);
    }).catch((error)=>{
        console.log(error)
    })
}