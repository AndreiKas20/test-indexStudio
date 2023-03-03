import React, {useState} from 'react';
import styles from './card.module.css';
import {itemCard} from "../../../types/typeArrCard";
import {BottomCard} from "./BottomCard";
import {Icons} from "../../UI/Icons";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

interface ICard {
    cardData: itemCard
}

export function Card({cardData}: ICard) {
    const [isGraph, setIsGraph] = useState(false)
    const [isHart, setIsHart] = useState(false)

    return (
        <li className={styles.card}>
            {cardData.seen && <div className={styles.message}>Просмотрено</div>}
            <Swiper
                spaceBetween={1}
                slidesPerView={1}
                navigation
                pagination={{bulletActiveClass: 'bulletActive', bulletClass: 'bullet' }}
                modules={[Pagination]}
            >
                <SwiperSlide><img style={{borderRadius: '8px 8px 0 0'}} width={'224px'} height={'260px'} alt={'Фото апартаментов'}
                                  src={'https://source.unsplash.com/random'}/></SwiperSlide>
                <SwiperSlide><img style={{borderRadius: '8px 8px 0 0'}} width={'224px'} height={'260px'} alt={'Фото апартаментов'}
                                  src={'https://source.unsplash.com/random'}/></SwiperSlide>
                <SwiperSlide><img style={{borderRadius: '8px 8px 0 0'}} width={'224px'} height={'260px'} alt={'Фото апартаментов'}
                                  src={'https://source.unsplash.com/random'}/></SwiperSlide>
                <SwiperSlide><img style={{borderRadius: '8px 8px 0 0'}} width={'224px'} height={'260px'} alt={'Фото апартаментов'}
                    src={'https://source.unsplash.com/random'}/></SwiperSlide>
            </Swiper>
            <BottomCard card={cardData}/>
            <button onClick={() => {
                setIsGraph(v => !v)
            }} className={styles.positionIconGraph}><Icons noActive={isGraph} nameIcon={"IconGraph"} height={'24px'} width={'24px'}/>
            </button>
            <button onClick={() => {
                setIsHart(v => !v)
            }} className={styles.positionIconHart}><Icons noActive={isHart} nameIcon={"IconHart"} height={'24px'} width={'24px'}/>
            </button>
        </li>
    );
}
