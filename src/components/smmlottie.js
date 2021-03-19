import React,{useEffect, useRef} from 'react';
import lottie from 'lottie-web';
export default function Smmlottie () {
    const Smmlottie = useRef(null);
    
    useEffect(()=>{
        lottie.loadAnimation({
            container : Smmlottie.current ,
            renderer : 'svg',
            loop:true ,
            autoplay:true,
            animationData: require('./lotties/smm.json')
          },
          )
         
    })
    return (
        <div className="image"  ref={Smmlottie}>
            
        </div>
    )
}
