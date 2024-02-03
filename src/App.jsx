import './App.css';
import {Search} from "./assets/search.svg";
import { useEffect } from "react";
//b87f0dfd
const API_URL= 'http://www.omdbapi.com/apikey.aspx?VERIFYKEY=3df7a2b3-118b-4ddd-83df-521985adbaca'
const App=()=>{
  const  searchMovies = async(title)=>{
    const response = await(`${API_URL}&s=${title}`);
    const data= await response.json();
    console.log(data.Search);
  }
  
  useEffect(()=>{
    searchMovies('title')
  }, []);
  return(
  
  <h1>App</h1>
)
}

export default App;