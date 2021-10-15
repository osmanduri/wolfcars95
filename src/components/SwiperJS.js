import { React } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, { Navigation, EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,EffectCoverflow, Autoplay]);

export default function SwiperJS() {
    return (
        <div>
            <Swiper
            autoplay={{
                delay:5000
            }}
             navigation={true}
             effect={"coverflow"}
             centeredSlides={true}
             slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
             loop={false}
             coverflowEffect={{
                 rotate: 0,
                 stretch: 0,
                 depth: 0,
                 modifier: 0,
                 slideShadows: false
             }}
             pagination={false}
             className="mySwiper"
             >
            <SwiperSlide>
                <div className="swiper_slide_p">
                    <div className="b_slider_1">

                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper_slide_p">
                    <div className="b_slider_2">

                    </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper_slide_p">
                    <div className="b_slider_3">

                    </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper_slide_p">
                    <div className="b_slider_4">

                    </div>
            </div>
            </SwiperSlide>

            </Swiper>
        </div>
    )
}


