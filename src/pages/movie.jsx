import { useState, useEffect } from 'react';
import { Card } from '../component/UI/Cards';
import '../App.css'
import { getMovie } from '../services/GetService';
export const Movie = () => {
    const [data, setData] = useState([]);
  

    const getMovieData = async () => {
        try {
            const res = await getMovie();
            setData(res.data?.Search || []); // Optional chaining in case Search is undefined
        } catch (error) {
            console.error("Error message:",error.message);
            console.error("Error status:",error.response.status);
            console.error(error.response.data);
        }
    };

    useEffect(() => {
        getMovieData();
    }, []);

    return (
        <>
            <ul className='container grid grid-four--cols'>
                {data.map((curEle) => {
                    return (
                        <Card key={curEle.imdbID} movieData={curEle} />
                    );
                })}
            </ul>
        </>
    );
};
