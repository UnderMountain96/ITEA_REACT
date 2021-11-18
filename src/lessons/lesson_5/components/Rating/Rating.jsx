import React, {useEffect, useState} from 'react';
import parrot                       from '../../assets/parrot.svg'
import parrotFill                   from '../../assets/parrotFill.svg'


const Rating = ({id}) => {
    const [rating, setRating] = useState(0)

    useEffect(() => {
        try {
            const ls = localStorage.getItem('PhotoRating') || localStorage.setItem('PhotoRating', JSON.stringify([]));
            const json = JSON.parse(ls)
            const data = json.find((i) => (i.id === id))
            if (data) {
                setRating(data.rating);
            } else {
                localStorage.setItem('PhotoRating', JSON.stringify([...json, {id, rating}]));
            }
            // console.log(ls)
            // console.log(json)
            // console.log(json.find((i) => (i.id === id)))
            // if (!json.find((i) => (i.id === id))) json.push({id, rating})
            // const data = json.map((i) => (i.id === id ? {id, rating} : i))

            // if (!data) localStorage.setItem('PhotoRating', JSON.stringify([...json, {id, rating}]));
            // setRating(data.rating);
        } catch (e) {
            console.log(e)
        }

    }, [id, rating])


    // useEffect(() => {
    //     if (rating) {
    //         try {
    //             const data = JSON.parse(localStorage.getItem('PhotoRating'))
    //             localStorage.setItem('PhotoRating', JSON.stringify(data.map((i) => (i.id === id ? {id, rating} : i))))
    //         } catch (e) {
    //             console.error(e)
    //         }
    //     }
    // }, [rating])


    const changeHandler = (e) => {
        const data = e.target.value
        setRating(data)
        const json = JSON.parse(localStorage.getItem('PhotoRating'))
        localStorage.setItem('PhotoRating', JSON.stringify(json.map((i) => (i.id === id ? {id, raring: data} : i))))
    }


    return (
            <>
                <div>{rating}</div>
                <div><input onChange={changeHandler} type="number" value={rating}/></div>
            </>
    );
};

export default Rating;
