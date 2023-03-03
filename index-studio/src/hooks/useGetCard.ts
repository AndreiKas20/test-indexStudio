import {useEffect, useState} from "react";
import {typeArrCard} from "../../types/typeArrCard";
import axios from "axios";


export const useGetCard = (countGet: number) => {
    const [arr, setArr] = useState<typeArrCard>([])

    useEffect(() => {
       if (countGet === 1) {
           axios.get(`https://6075786f0baf7c0017fa64ce.mockapi.io/products`)
               .then((resp) => {
                   const data = resp.data
                   setArr(data)
               }).catch(console.log)
       }
    }, [])

    return arr.slice(0,16 * countGet)
}
