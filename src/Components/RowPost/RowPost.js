import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import "./RowPost.css"
import {API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
     const [state, setstate] = useState([])
    useEffect(() => {
       axios.get(props.url).then(response=>{
           console.log(response.data);
           setstate(response.data.results)
       }).catch(err=>{
           alert(err)
       })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const [url, setUrl] = useState("")

      const handleMovie = (id)=>{
          console.log(id);
          axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
              if(response.data.results.lenght!=0){
                  setUrl(response.data.results[0])
              }
          })
      }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {state.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                )}
                
                
            </div>
            {url && <YouTube videoId={url.key} opts={opts} />}
        </div>
    )
}

export default RowPost 
