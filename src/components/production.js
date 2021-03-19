import React,{useEffect, useRef} from 'react';
import lottie from 'lottie-web';
export default function Production () {
    const production = useRef(null);
    
    useEffect(()=>{
        lottie.loadAnimation({
            container : production.current ,
            renderer : 'svg',
            loop:true ,
            autoplay:true,
            animationData: require('./lotties/production.json')
          },
          )
         
    })
    return (
        <div className="image"  ref={production}>
            
        </div>
    )
}
