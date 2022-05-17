import React from 'react'
import "./vidtitle.css"
const VidTitle = () => {
    return (
        <>
                <div className="TrinityHeader_container" style={{maxWidth:47+"rem"}}>
                <h1 className="Trinity_title" style={{fontSize:7+"rem"}}>The Trinity</h1>
                <div className="TrinityHeader_dash"></div>
                <div className="TrinityHeader_dash"></div>
                <span className="TrinityHeader_GGI" style={{fontSize:1.6+"rem"}}>Global governance Initiative</span>
            </div>
            <div style={{marginBottom:"6rem"}}></div>
        </>
    )
}

export default VidTitle