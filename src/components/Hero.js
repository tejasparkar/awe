import React from 'react';
import { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
function Hero() {
    const [count, setCount] = useState(getWindowDimensions());
    useEffect(() => {
        console.log(count)
    })
    return (
        <React.Fragment>
        
        
        <section id="hero">
        <Particles
        height="100vh"
        params={{
            "particles": {
                "number": {
                    "value": count.height/6,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    }
                }
            }
        }}  />
        
        <div className="hero-container">
        
            <ScrollAnimation animatePreScroll="false"  animateIn="flipInX" delay="1000" animateOut='fadeOut'>
                <a href="index.html" className="hero-logo" ><img style={{ 'height':'13rem','padding-bottom':'20px' }} src="assets/img/Logobig.png" alt="" /></a>
            </ScrollAnimation>
            <ScrollAnimation animatePreScroll="false" animateIn='bounceInRight'
            animateOut='bounceOutLeft'>  
            <h1 >Welcome To Andeverywhere</h1>
            <h2 >Group of like-minded millenniel's comming together to help you get <strong>The Recognition you Deserve</strong></h2>
            
                 
                 
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </ScrollAnimation>
        </div>
       
        </section>
       
          
        </React.Fragment>
    );
}

export default Hero;
