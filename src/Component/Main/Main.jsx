import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Main = () => {
const { onSent, recentPrompt, showResult, loading , resultData, setInput, input } = useContext(Context)
const [ theme, setTheme]=useState("dark");

function toggleTheme(){
    setTheme( (theme) => (theme === "light" ? "dark":"light"));
}

  return (
    <div className={`main ${theme}-theme`}>
        <div className="nav">
           <i><b> <p> YaPra </p> </b></i> 
            <img onClick={toggleTheme}  src={assets.yash} alt="" />
        </div>

                            
        <div className="main-container">

{ !showResult?  

<>
  <div className="greet">
                <p><span>Hello Prapti, </span></p>
                <p>How Can I Help You Today ?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to visit on upcoming road trip </p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarise this concept : urban planning </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstrom team bonding activities for owr work retreat  </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readiability of following code  </p>
                    <img src={assets.code_icon} alt="" />
                </div>        
            </div>
</>
: 
<div className="result">
    <div className="result-title">
        <img src={assets.yash} alt="" />
        <p>{recentPrompt} .)) </p>
    </div>

    <div className="result-data">
        <img src={assets.gemini_icon} alt="" />
        {loading
        ? <div className="loader">
            <hr />
            <hr />
            <hr />
        </div>
        : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
        } 
    
    </div>
</div>

}
          
       
    



            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)}  value={input} type="text" placeholder='Enter a Promp here >>> ' />
                    <div >
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                      {input ?<img onClick={()=>onSent()}  src={assets.send_icon} alt="" />: null}                            </div>
                   </div>
                <p className='bottom-info'> <span id='ya'>YaPra</span> may display inaccurate info , inlcuding about people , so re-check its responses. Your Priacy & YaPra App </p>
            </div>
        </div>
    </div>
  )
}

export default Main
