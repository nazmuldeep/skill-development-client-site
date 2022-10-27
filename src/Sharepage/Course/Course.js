import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ cours }) => {
    const { id, image_url, name, details, price, rating, author, enroll } = cours
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl grid-rows-3">
                <figure><img className='w-full' src={image_url} alt="Shoes" style={{ height: '300px' }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <div className="card-actions justify-between ">
                        <div>
                            <img className='w-16' src={author.img} alt="" />
                        </div>
                        <div>
                            <div className="justify-start"><small>Modaretor Name {author.name}</small></div>
                            <div className="justify-end"><small>Publish Date {author.published_date}</small></div>
                        </div>
                    </div>
                    <div>
                        {
                            details.length > 200 ?
                                <p>{details.slice(0, 150) + '...'} <Link to={`/singlecourse/${id}`}>Read More</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline bg-cyan-400 py-5 px-2">Price $ {price}</div>
                        <div className="badge badge-outline bg-fuchsia-500 py-5 px-2">Student Enroll {enroll}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/singlecourse/${id}`}>
                            <button className="btn btn-primary">Apply now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;