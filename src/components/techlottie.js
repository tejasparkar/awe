import React,{useEffect, useRef} from 'react';
import lottie from 'lottie-web';
export default function Techlottie () {
    const Techlottie = useRef(null);
    
    useEffect(()=>{
        lottie.loadAnimation({
            container : Techlottie.current ,
            renderer : 'svg',
            loop:true ,
            autoplay:true,
            animationData: require('./lotties/tech.json')
          },
          )
         
    })
    return (
        <div className="image"  ref={Techlottie}>
            
        </div>
    )
}
