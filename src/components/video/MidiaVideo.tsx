import React from 'react'
import ReactPlayer from 'react-player';
import './video.css'

function MidiaVideo() {
    return (
        <div className="_video_">
            <div className="title_video">
                <p className="par_title">Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP
                </p>
            </div>
            <div className="item_1">
                <ReactPlayer className ='video' 
                url= 'https://www.youtube.com/watch?v=C5quXkMfvJo&t=1s'
                width= '100%'
                height= '100%'
                controls
                onPlay={()=>alert('pressionou play')}
                onPause={()=>alert('pressionou pause')}
                onEnded={()=>alert('terminou video')}
            />
            </div>
        </div>
    )
}

export default MidiaVideo
