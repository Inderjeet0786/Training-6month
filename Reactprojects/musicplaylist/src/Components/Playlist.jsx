// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use, useEffect, useRef, useState } from "react"
import {faBackward,  faForward,  faPause, faPlay} from '@fortawesome/free-solid-svg-icons'



export default function Playlist(){

   const songs = [
    {
      id: 1,
      artist: "Arijit Singh",
      name: "Tum Hi Ho",
      duration: "6:10",
      pathofaudio: "/Songs/Main Jo Tujhse Door Hoon (Arijit Singh Version)-(Mr-Jat.in).mp3", // local file /songs folder me rakho)
      image: "https://wallpapercave.com/wp/wp8207062.jpg"
    },
    {
      id: 2,
      artist: "Atif Aslam",
      name: "Agr tum sath ho",
      duration: "5:41",
      pathofaudio: "/Songs/Agar Tum Saath Ho-(Mr-Jat.in).mp3",
      image: "https://wallpaperaccess.com/full/1280813.jpg"
    },
    {
      id:3,
      name: 'Ae Dil Hai Mushkil',
      duration:'4:29',
      image: 'https://www.bing.com/th/id/OIP.DbIafqBj7zUQEg3q71AdsQHaFj?w=231&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3',
      pathofaudio: '/Songs/Ae Dil Hai Mushkil-(Mr-Jat.in).mp3',
      artist: 'Arijit Singh',
    //  d escription: 'Apna Bana Le — a soulful romantic track where the depth of love and the longing for togetherness flow straight to the heart through Arijit Singh’s voice.'
    },
    {
      id:4,
      name: 'batten yeh kabhi naa',
      duration:'4.49',
      image: 'https://mixjio.com/siteuploads/thumb/sft39/19490_6.jpg',
      pathofaudio: '/Songs/Channa Mereya-(Mr-Jat.in).mp3',
      artist: 'Arijit Singh',
      // description: ' "Battein Ye Kabhi Na" — a heart-touching romantic song sung by Arijit Singh, featured in the movie Khamoshiyan (2015).'

    },

    {
      id:5,
      name:'Soch Na Ske',
      duration:'4:40',
      image:'https://thfvnext.bing.com/th/id/OIP.1M_2_mLd3GcOJ84t4tP4VQHaHa?w=176&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3',
      pathofaudio:'/Songs/Soch Na Sake-(Mr-Jat.in).mp3',
      artist:'Arijit Singh'
    },

  ];
  
  const[isplaying,setIsPlaying] = useState(true)
  const[currindex,setcurrindex] = useState(0)
  const audioRef = useRef(null)

  useEffect(()=>{
  const audio = audioRef.current
  if(!audio){
    console.log('hlo');
    
    return;}
  audio.load();
 
 },[currindex,isplaying])
  const currentsong = songs[currindex]


  const nextSong = ()=>{
    setcurrindex((i)=> (i+1)%songs.length)
    setIsPlaying(true)
  }
  







  return(
    <>
    {/* <h1>Heading {String(audioRef.current)}</h1> */}

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-4 text-center bg-dark text-white">
          <h3>{currentsong.name}</h3>
          <p>{currentsong.artist}</p>
          <img src={currentsong.image} alt="" width={200} className="mb-3 rounded" />

          <div className="mt-3">
            <FontAwesomeIcon icon={faBackward} size="2x" className="mx-3"/>
            <FontAwesomeIcon icon={isplaying ?faPlay:faPause}
            onClick={()=>{
              if(isplaying){
                audioRef.current.pause();
                setIsPlaying(false)

              }
              else{
                audioRef.current.play()
                setIsPlaying(true)
              }
      
            }} 
            
            size="2x" className="mx-3"/>

            <FontAwesomeIcon icon={faForward} size="2x" className="mx-3" onClick={nextSong}/>
          </div>

          <audio ref={audioRef} controls autoPlay onEnded={nextSong}
          
          onPlay={()=> setIsPlaying(false)}
          onPause={()=> setIsPlaying(true)}
          className="my-4" >
            <source src={currentsong.pathofaudio} type="audio/mp3" />
          </audio>
        </div>
         <div className="col-md-6 text-center">
          <table className=" table table-dark table-bordered">
           <thead>
            <tr>
              <th>Sno</th>
                <th>Image</th>
                <th>Singer</th>
                <th>Song</th>
                <th>Duration</th>
            </tr>
           </thead>
           <tbody>
              {songs.map((el, idx) => (
                <tr
                  key={el.id}
                  onClick={() => {
                    setcurrindex(idx);
                    setIsPlaying(true);
                  }}
                  className={currindex === idx ? "table-active" : ""}
                  style={{ cursor: "pointer" }}
                >
                  <td>{el.id}</td>
                  <td><img src={el.image} style={{height:'50px', width:'50px'}} alt={el.name} /></td>
                  <td>{el.artist}</td>
                  <td>{el.name}</td>
                  <td>{el.duration}</td>
                </tr>
              ))}
            </tbody>

          </table>
         </div>    
      </div>
    </div>
    </>
  )
}



