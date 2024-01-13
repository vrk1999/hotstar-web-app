
import { useEffect } from 'react'
import Header from './Components/Header'
import Slider from './Components/Slider'
import GlobalApi from './Services/GlobalApi'

function App() {

useEffect(()=>{

},[])

const getTrendingMovies = ()=>{

    GlobalApi.getTrendingVideos.then(resp=>{
      console.log(resp);
    }) 
}
  return (
    <>
      <Header/>
      <Slider/>
    </>
  )
}

export default App
