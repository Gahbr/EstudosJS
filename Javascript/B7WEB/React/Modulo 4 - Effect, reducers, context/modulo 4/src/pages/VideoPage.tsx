import { useState } from 'react'
import '../App.css'
import { VideoPlayer } from '../components/VideoPlayer'

const Video = ()=> {
  const [playing, setplaying] = useState(false)

  return (
    <>
    <p>{playing ? 'Rodando' : 'Pausado'}</p>

     <VideoPlayer isPlaying ={playing} src='https://static.videezy.com/system/resources/previews/000/004/299/original/23.mp4'/>
     <button onClick={()=>setplaying(!playing) }>Play/Pause</button>
    </>
  )
}

export default Video;
