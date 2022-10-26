import React from 'react';
import { useLoaderData } from 'react-router-dom';


const SingleCourse = () => {
    const singlecours = useLoaderData([])
    const { name, } = singlecours;
    console.log(singlecours, name);
    return (
        <div>
            <h1>courses Title {name}</h1>
        </div>
    );
};

export default SingleCourse;