import React, {useEffect, useState} from 'react';
import parrot                       from '../../assets/parrot.svg'
import parrotFill                   from '../../assets/parrotFill.svg'


const Rating = ({id}) => {
    const [rating, setRating] = useState(0)

    useEffect(() => {
        getLocalStorage()
    })


    const setLocalStorage = () => {
        localStorage.setItem('PhotoRating', JSON.stringify([{id, rating}]))
    }


    // useEffect(() => {
    //     setLocalStorage(rating)
    // }, [setLocalStorage, rating])


    const getLocalStorage = () => {
        const ls = localStorage.getItem('PhotoRating')

        if (!ls) return initLocalStorage()
        parseLocalStorage(ls)
        // setRating(parseLocalStorage(ls))

    }

    const parseLocalStorage = (ls) => {
        const json = JSON.parse(ls)
        console.log(json)
        const json.find((i) => {
            return i.id === id;
        }))
    }

    const initLocalStorage = () => {
        localStorage.setItem('PhotoRating', JSON.stringify([]))
    }

    const changeHandler = (e) => {
        setRating(e.target.value)
    }


    return (
            <>
                <div>{rating}</div>
                <div><input onChange={changeHandler} type="number" value={rating}/></div>
            </>
    );
};

export default Rating;
