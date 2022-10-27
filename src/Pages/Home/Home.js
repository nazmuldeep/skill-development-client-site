
import { useLoaderData } from 'react-router-dom';
import Carousel from '../../Sharepage/Carousel/Carousel';
import Course from '../../Sharepage/Course/Course';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    const courses = useLoaderData()
    const allcourses = courses
    return (
        <div>
            <h1>courses</h1>
            <Carousel></Carousel>
            <div className='grid grid-cols-3 gap-5 py-28'>

                {
                    allcourses.map(cours => <Course
                        key={cours.id}
                        cours={cours}
                    ></Course>)
                }
            </div>
            {/* <AboutUs></AboutUs> */}

        </div>
    );
};

export default Home;