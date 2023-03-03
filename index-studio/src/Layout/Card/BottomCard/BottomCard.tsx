import React from 'react';
import {itemCard} from "../../../../types/typeArrCard";
import styles from './bottomcard.module.css'
import {Icons} from "../../../UI/Icons";

interface IBottom {
    card: itemCard
}

export function BottomCard({card}: IBottom) {
    const date = new Date(card.date * 1000)
    return (
        <div style={card.seen ? {backgroundColor: '#FFF6A5', borderRadius: '0 0 8px 8px'} : {}} className={styles.block}>
            <span className={styles.oldPrice}>{card.oldPrice} ₽</span>
            <span className={styles.newPrice}>{card.price} ₽</span>
            <h3 className={styles.title}>{card.title}</h3>
            <div className={styles.blockLocalDate}><span className={styles.locality}>{card.locality}</span>
                <span
                    className={styles.date}>{date.getDate()}.{date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}.{String(date.getFullYear()).slice(2)}
                     , {date.getHours()}.{date.getMinutes()}
                </span>
            </div>
            <div className={styles.positionIconCar}><Icons noActive={card.seen} nameIcon={'IconCar'} width={'24px'} height={'24px'}/></div>
            <div className={styles.positionIconShield}><Icons noActive={card.seen} nameIcon={'IconShield'} width={'24px'} height={'24px'}/>
            </div>
        </div>
    );
}
