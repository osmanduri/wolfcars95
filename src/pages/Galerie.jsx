import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/swiper-bundle.css"
import galerieData from '../data/galerie.js'

import SwiperCore, {
    Pagination,Navigation
  } from 'swiper';
  
  SwiperCore.use([Pagination,Navigation]);
export default function Galerie() {

    return (
        <>
        <h1 className="titre_galerie">Galerie</h1>
        <div className="container galerie">
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
                        "clickable": true
                        }} navigation={true} className="mySwiper">
                        {
                            galerieData.map((element, index) => {
                                    return (
                                        <SwiperSlide key={index} ><img src={require(`../images/Galerie/${element.title}.${element.format}`).default} alt="galerie" key={index}/></SwiperSlide>
                                    )
                                })
                        }
                </Swiper>
        </div>
        </>
    )
}
