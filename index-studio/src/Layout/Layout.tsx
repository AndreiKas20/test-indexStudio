import React, {useEffect, useState} from 'react';
import {Card} from "./Card";
import {useGetCard} from "../hooks/useGetCard";
import styles from './layout.module.css'

export function Layout() {
    const [count, setCount] = useState(1)
    const [isLoader, setIsLoader] = useState(true)
    const [isAll, setIsAll] = useState(false)
    const arr = useGetCard(count)
    useEffect(() => {
        if(arr.length < 1) {
            setIsLoader(true)
        } else {
            setIsLoader(false)
        }
        if (arr.length === 100) {
            setIsAll(true)
        } else {
            setIsAll(false)
        }

    }, [arr]);
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Похожие объявления</h2>
            { isLoader && <div className={styles.load}><hr/> <hr/><hr/><hr/></div>}
            { !isLoader && <ul className={styles.list}>
                {arr.map(value => <Card key={value.id} cardData={value}/>)}
            </ul>}
            <button disabled={isAll} className={styles.btn} onClick={() => {
                setCount(v => v + 1)
            }}>Показать еще
            </button>
            {isAll && <span className={styles.allCard}>Карточек больше нет</span>}
        </section>
    );
}
