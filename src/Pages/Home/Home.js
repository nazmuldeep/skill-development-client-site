
import { useLoaderData } from 'react-router-dom';
import Carousel from '../../Sharepage/Carousel/Carousel';
import Course from '../../Sharepage/Course/Course';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    const courses = useLoaderData()
    const allcourses = courses
    return (
        <div>
            <h1></h1>
            <Carousel></Carousel>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 py-28'>

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