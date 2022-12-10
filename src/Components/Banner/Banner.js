import {useEffect,useState} from 'react'
import React from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import "./Banner.css"

function Banner() {
    const [state, setstate] = useState()
    useEffect(() => {
        axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
            console.log(response.data.results[0]);
            setstate(response.data.results[0])
        })
      
    }, [])
    return (    
        
        <div 
        style={{backgroundImage:`url(${state ? imageUrl+state.backdrop_path : ""})`}}
        className="banner">
            <div className="content">
                <h1 className="title"> {state ? state.title :""} </h1>
                <div className="banner_button">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div> 
                <h1 className="description">{state ? state.overview :""} </h1>
            </div>
            <div className="fade"></div>           
        </div>
        
    )
}

export default Banner
