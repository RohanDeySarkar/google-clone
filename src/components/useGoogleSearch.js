import React, { useEffect, useState } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "a0dcca0b282d1cede";

const useGoogleSearch = (term) => {
    
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then((res) => 
                res.json()
            )
            .then((result) => {
                setData(result)
            })
        };

        fetchData();

    }, [term])

    // must return data as an object or else can't destructure
    return {data}
};

export default useGoogleSearch
