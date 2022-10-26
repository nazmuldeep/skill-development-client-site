import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../Sharepage/Carousel/Carousel';
import Course from '../../Sharepage/Course/Course';

const Courses = () => {
    const [allcourses, setallcourses] = useState([]);

    useEffect(() => {
        fetch('https://learn-easy-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setallcourses(data));
    }, [])
    console.log(allcourses);
    return (
        <div className="">
            <div className="">
                <Carousel></Carousel>
            </div>
            <div className='flex flex-col-2 py-28'>
                <div className='grid grid-cols-3 basis-5/6 gap-5'>
                    {
                        allcourses.map(cours => <Course
                            key={cours.id}
                            cours={cours}
                        ></Course>)
                    }
                </div>


                <div className="">
                    <h1 className='text-5xl mb-6'>More Courses</h1>
                    {
                        allcourses.map(co => <Link to={`/singlecourse/${co.id}`}>
                            <p
                                className='text-1xl my-3'
                                key={co.id}
                            >{co.name}</p>
                        </Link>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Courses;