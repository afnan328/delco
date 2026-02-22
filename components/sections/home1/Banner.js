
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true
    },
    navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev"
    },
    autoplay: {
        delay: 5000
    }
}

export default function Banner() {
    return (
       
        <>
        {/* banner-one */}
        <section className="main-slider">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  // style={{ backgroundImage: "url(.\assets\images\allimgs\banner\Banner 1.webp)" }}
                  style={{
  backgroundImage: 'url("/assets/images/allimgs/banner/Banner 1 (2).webp")'
}}
                />
              
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                           
                          </div>
                        </div>
                      
                        <div className="main-slider__btn-and-call-box">
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>


{/* 2 */}
<SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  // style={{ backgroundImage:"url(./assets/images/allimgs/banner/Banner-1.webpz)" }}
                  style={{
  backgroundImage: 'url("/assets/images/allimgs/banner/Banner 2.webp")'
}}
                />
              
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                           
                          </div>
                        </div>
                      
                        <div className="main-slider__btn-and-call-box">
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

{/* 2 */}


{/* 3 */}
<SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  // style={{ backgroundImage: "url(./assets/images/allimgs/new/bg2.webp)" }}
                  // style={{ backgroundImage: "url(./assets/images/allimgs/banner/3.webp)" }}
                  style={{
  backgroundImage: 'url("/assets/images/allimgs/banner/Banner 3.webp")'
}}
                />
              
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                           
                          </div>
                        </div>
                      
                        <div className="main-slider__btn-and-call-box">
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

{/* 3 */}
             
{/* 4 */}
{/* <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: "url(./assets/images/allimgs/banner/4.webp)" }}
                />
              
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                           
                          </div>
                        </div>
                      
                        <div className="main-slider__btn-and-call-box">
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
{/* 4 */}


{/* 5 */}
{/* <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: "url(./assets/images/allimgs/banner/5.webp)" }}
                />
              
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                           
                          </div>
                        </div>
                      
                        <div className="main-slider__btn-and-call-box">
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
{/* 5 */}


{/* 6 */}
{/* <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: "url(./assets/images/allimgs/banner/6.webp)" }}
                />
              
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                           
                          </div>
                        </div>
                      
                        <div className="main-slider__btn-and-call-box">
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
{/* 6 */}


{/* 7 */}
{/* <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: "url(./assets/images/allimgs/new/bg1.webp)" }}
                  // style={{ backgroundImage: "url(./assets/images/allimgs/banner/7.webp)" }}
                />
              
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                           
                          </div>
                        </div>
                      
                        <div className="main-slider__btn-and-call-box">
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
{/* 7 */}


{/* 8 */}
{/* <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: "url(./assets/images/allimgs/banner/8.webp)" }}
                />
              
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <div className="main-slider__sub-title-icon">
                           
                          </div>
                        </div>
                      
                        <div className="main-slider__btn-and-call-box">
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
{/* 8 */}






{/* second */}
              {/* <SwiperSlide className="swiper-slide">
                <div
                  className="main-slider__bg"
                  style={{ backgroundImage: "url(./assets/images/allimgs/banner/2.webp)" }}
                />
                <div className="main-slider__shape-1" />
                <div className="main-slider__shape-2" />
                <div className="main-slider__shape-3" />
                <div className="main-slider__shape-4" />
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                         
                        </div>
                        <h2 className="main-slider__title">
                        Our commitment <span>to excellence,</span> <br />  <span>reliability, </span> and customer <br/>satisfaction sets us apart <br/>in the <span>competitive market</span>  
                        </h2>
                     
                        <div className="main-slider__btn-and-call-box">
                          <div className="main-slider__btn-box">
                            <Link href="/about" className="thm-btn main-slider__btn">
                              Read more
                              <span />
                            </Link>
                          </div>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
{/* second */}


            
            
            </div>
          </Swiper>
          <div className="swiper-pagination" id="main-slider-pagination" />

        </section>
        {/* banner-one */}
      </>
    )
}
