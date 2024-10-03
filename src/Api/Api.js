import axios from "axios";


export const GetListFilm = () =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=187bce2cb335ae655ef89d8381ac308f`)
    .then((response)=>{
        console.log(response.data);
    }).catch((error)=>{
        console.log(error)
    })
}