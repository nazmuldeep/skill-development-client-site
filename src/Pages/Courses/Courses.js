import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../Sharepage/Carousel/Carousel';
import Course from '../../Sharepage/Course/Course';


const Courses = () => {
    const [allcourses, setallcourses] = useState([]);

    useEffect(() => {
        fetch('https://skill-development-courses-server-site.vercel.app/courses')
            .then(res => res.json())
            .then(data => setallcourses(data));
    }, [])
    console.log(allcourses);
    return (
        <div className="">
            <div className="">
                <Carousel></Carousel>
            </div>
            <div className='md:w-100 lg:flex lg:flex-col-2 py-28 m-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 py-28'>
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

            </div >
        </div >
    );
};

export default Courses;