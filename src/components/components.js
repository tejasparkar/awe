import React, { useEffect, useRef, Suspense } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Tilt from 'react-tilt'
const Seolottie = React.lazy(()=>import('./seolottie'));
const Techlottie = React.lazy(()=>import('./techlottie'));
const Smmlottie = React.lazy(()=>import('./smmlottie'));
const Production = React.lazy(()=>import('./production'));
const Benifits = React.lazy(()=>import('./benifits'));
const Footer = React.lazy(()=>import('./footer'));

const Components = () => {
    return (
        <React.Fragment>
        
        <ScrollAnimation animateIn='bounceInRight'
        animateOut='bounceOutLeft' delay="450">
        <section id="services" className="services  ">
        <div className="container">
    
    
    
          <div className="row" >
          
          <div className="col-lg-6 order-2 order-lg-1" style={{ 'background-color':'black','opacity':'0.7','border-radius':'3%' , 'padding': '2rem' }}>
            <Tilt>
            <ScrollAnimation animateIn='tada'
            animateOut='bounceOutLeft' delay="1000">
            <div className="section-title">
            <h2>Seo</h2>
            </div>
            
              </ScrollAnimation>
            </Tilt>
            <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft' delay="10">
            <div className="icon-box mt-5 mt-lg-0  " >
            <i class='bx bx-search-alt'></i>
            <h4  style={{'fontWeight':'900','color':'white' ,'text-shadow': '2px 2px 4px #080808'
}

 }}>Keyword Research</h4>
            <p  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808 ' }}>Keyword phrase research involves identifying a group of keyword phrases that will be used in optimization.</p>
          </div>
            </ScrollAnimation>
             
            <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft' delay="150">
              <div className="icon-box mt-5" >
              <i class='bx bxs-report' ></i>
                <h4  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Reporting & Goal Setting.
                </h4>
                <p  style={{'fontWeight':'900','color':'white' , 'text-shadow': '2px 2px 4px #080808' }}>After establishing your targeted keyword phrases and starting position relative to the site’s competitive set, it is important to understand what the subject site’s starting position is within the search engines</p>
              </div>
            </ScrollAnimation>
    
            <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft' delay="250">
            <div className="icon-box mt-5" >
            <i class='bx bxs-book-content' ></i>
            <h4  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Content Building</h4>
            <p  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Content is king in search engine optimization. The search engines love text; high volume, high-quality content related to your business will serve you in a couple of important ways.</p>
          </div>
            </ScrollAnimation>
             
            <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft' delay="350">
              <div className="icon-box mt-5" >
              <i class='bx bxs-network-chart' ></i>
                <h4  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Social & Link Building.</h4>
                <p  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>In marketing, you fish where the fish are.  And, the fish are using social media in increasing numbers.  The power of online sharing through social media provides tremendous opportunities for companies willing to commit the time to using it.</p>
              </div>
            </ScrollAnimation>
            </div>
            <Suspense fallback={<div>Loading....</div>}>
            <div  className="col-lg-6 order-2 order-lg-2" >
            <Tilt>
            <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft' delay="450">
           
                <Seolottie  />
           
            </ScrollAnimation>
            </Tilt>
            </div>
            </Suspense>
    
          </div>
         
        </div>
      </section>
      </ScrollAnimation>
        
            
    
            <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft'>
              <section id="services" className="services ">
                <div className="container ">
    
    
    
                  <div className="row ">
                    <div style={{ 'background-color':'black','opacity':'0.7','border-radius':'3%','padding': '2rem' }} className="col-lg-6 order-2 order-lg-1 ">
                    <Tilt>
                    <ScrollAnimation animateIn='tada'
                          animateOut='bounceOutLeft' delay="1000">
                          <div className="section-title">
                          <h2>SMM</h2>
                          </div>
                          
                        </ScrollAnimation>
                        </Tilt>
                    <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft' delay="10">
                      <div className="icon-box mt-5 mt-lg-0  " >
                      <i class='bx bxs-bullseye' ></i>
                        <h4  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Analyze & Develop a Social Media Strategy</h4>
                        <p  style={{'fontWeight':'900','color':'white' , 'text-shadow': '2px 2px 4px #080808' }}>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft' delay="150">
                      <div className="icon-box mt-5" >
                      <i class='bx bxs-face' ></i>
                        <h4  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}> Account Creation</h4>
                        <p  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft' delay="250">
                      <div className="icon-box mt-5" >
                      <i class='bx bx-calendar-star' ></i>
                        <h4  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Campaign Creation</h4>
                        <p  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                      </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft' delay="350">
                      <div className="icon-box mt-5" >
                      <i class='bx bxs-traffic' ></i>
                        <h4  style={{'fontWeight':'900','color':'white' , 'text-shadow': '2px 2px 4px #080808' }}>Drive Traffic To Your Website</h4>
                        <p  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                      </div>
                    </ScrollAnimation>
                    </div>
                    <Suspense fallback={<div>Loading....</div>}>
                    <div className="col-lg-6 order-2 order-lg-2" >
                    <Tilt>
                    <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft' delay="450">
                    
                       <Smmlottie/>
                    </ScrollAnimation>
                    </Tilt>
                    </div>
                    </Suspense>
    
                  </div>
    
                </div>
              </section>
              </ScrollAnimation>
              <ScrollAnimation animateIn='bounceInRight'
                animateOut='bounceOutLeft'>
             
    
                <section id="services" className="services  ">
                  <div className="container ">
    
    
    
                    <div className="row">
    
                      <div className="col-lg-6 order-2 order-lg-1 " style={{ 'background-color':'black','opacity':'0.7','border-radius':'3%','padding': '2rem' }} >
                      <Tilt>
                        <ScrollAnimation animateIn='tada'
                          animateOut='bounceOutLeft' delay="1000">
                          <div className="section-title">
                          <h2>Technologies</h2>
                          </div>
                          
                        </ScrollAnimation>
                        </Tilt>
                        <ScrollAnimation animateIn='bounceInRight'
                          animateOut='bounceOutLeft' delay="150">
                          <div className="icon-box mt-5 mt-lg-0  " >
                          <i class='bx bx-code' ></i>
                            <h4  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Web Development & Designing</h4>
                            <p  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                          </div>
                        </ScrollAnimation>
    
    
                        <ScrollAnimation animateIn='bounceInRight'
                        animateOut='bounceOutLeft' delay="250">
                        <div className="icon-box mt-5" >
                        <i class='bx bxl-figma' ></i>
                          <h4  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Wireframes Development</h4>
                          <p  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                        </ScrollAnimation>
    
                        <ScrollAnimation animateIn='bounceInRight'
                        animateOut='bounceOutLeft' delay="350">
                        <div className="icon-box mt-5"  >
                        <i class='bx bxl-android' ></i>
                          <h4  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Android App development</h4>
                          <p  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInRight'
                        animateOut='bounceOutLeft' delay="450">
                        <div className="icon-box mt-5"  >
                        <i class='bx bxl-apple' ></i>
                          <h4  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>iOS App development</h4>
                          <p  style={{'fontWeight':'900','color':'white', 'text-shadow': '2px 2px 4px #080808' }}>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                        </div>
                        </ScrollAnimation>
                        
    
                      </div>
                      <Suspense fallback={<div>Loading....</div>}>
                      <div className="col-lg-6 order-2 order-lg-2 " >
                      <Tilt>
                      <ScrollAnimation animateIn='bounceInRight'
                      animateOut='bounceOutLeft' delay="450">
                        <Techlottie/>
                       </ScrollAnimation>
                       </Tilt>
                      </div>
                      </Suspense>
    
                    </div>
    
                  </div>
                </section>
    
            
            </ScrollAnimation>
              <ScrollAnimation animateIn='bounceInRight'
              animateOut='bounceOutLeft' delay="450">
              <section id="services" className="services ">
                <div className="container">
    
    
    
                  <div className="row" >
                    <div className="col-lg-6 order-2 order-lg-1" style={{ 'background-color':'black','opacity':'0.7','border-radius':'3%','padding':'2rem' }}>
                    <Tilt>
                    <ScrollAnimation animateIn='tada'
                    animateOut='bounceOutLeft' delay="1000">
                    <div className="section-title">
                    <h2>Production</h2>
                    </div>
                    
                  </ScrollAnimation>
                  </Tilt>
                  <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft' delay="10">
                    <div className="icon-box mt-5 mt-lg-0  " >
                    <i class='bx bxs-film' ></i>
                    <h4  style={{'fontWeight':'900','color':'white','text-shadow': '2px 2px 4px #080808' }}>Film Production</h4>
                    <p  style={{'fontWeight':'900','color':'white','text-shadow': '2px 2px 4px #080808' }}>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                    </ScrollAnimation>
                     
                    <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft' delay="150">
                      <div className="icon-box mt-5" >
                      <i class='bx bxs-video-recording' ></i>
                        <h4  style={{'fontWeight':'900','color':'white','text-shadow': '2px 2px 4px #080808' }}>Video Production</h4>
                        <p  style={{'fontWeight':'900','color':'white','text-shadow': '2px 2px 4px #080808' }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                      </div>
                    </ScrollAnimation>
    
                    <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft' delay="250">
                    <div className="icon-box mt-5">
                    <i class='bx bxs-magic-wand' ></i>
                    <h4  style={{'fontWeight':'900','color':'white' ,'text-shadow': '2px 2px 4px #080808'}}>Visual Effects </h4>
                    <p  style={{'fontWeight':'900','color':'white','text-shadow': '2px 2px 4px #080808' }}>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                    </ScrollAnimation>
                     
                    <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft' delay="350">
                      <div className="icon-box mt-5" >
                      <i class='bx bxl-adobe' ></i>
                        <h4  style={{'fontWeight':'900','color':'white','text-shadow': '2px 2px 4px #080808' }}>After Effects Animation</h4>
                        <p  style={{'fontWeight':'900','color':'white','text-shadow': '2px 2px 4px #080808' }}>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                      </div>
                    </ScrollAnimation>
                    </div>
                    <Suspense fallback={<div>Loading....</div>}>
                    <div className="col-lg-6 order-2 order-lg-2" >
                    <Tilt>
                    <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft' delay="450">
                       <Production/>
                    </ScrollAnimation>
                    </Tilt>
                    </div>
    
                  </Suspense>
                  </div>
    
                </div>
               
              </section>
             
              </ScrollAnimation>
              <Suspense fallback={<div>Loading....</div>}>
              <Benifits/>
              </Suspense>
             
             <Suspense fallback={<div>Loading....</div>}>
             <Footer/>
             </Suspense>
             
    
          
       
        </React.Fragment>
    );
}

export default Components;
