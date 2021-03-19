import React,{useEffect, useRef} from 'react';
import lottie from 'lottie-web';
export default function Seolottie () {
    const Seolottie = useRef(null);
    
    useEffect(()=>{
        lottie.loadAnimation({
            container : Seolottie.current ,
            renderer : 'svg',
            loop:true ,
            autoplay:true,
            animationData: require('./lotties/seo.json')
          },
          )
         
    })
    return (
        <div className="image"  ref={Seolottie}>
            
        </div>
    )
}
