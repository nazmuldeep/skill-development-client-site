import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Apply = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { LoginUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.e.value;
        const password = form.password.value;
        LoginUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);
                form.reset()
            })
    }
    return (
        <form onSubmit={handleSubmit} className='w-3/6 mx-auto my-28 border-2 border-indigo-400 p-6 py-12 rounded-md bg-orange-100 shadow-2xl'>
            <div className="form-control w-full">
                <label for="eamil" className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <input id="eamil" name="e" type="text" placeholder="Email" className="input input-bordered w-full" />
            </div>
            <div className="form-control my-5 w-full">
                <label for="password" className="label">
                    <span className="label-text">Your Password</span>
                </label>
                <input id="password" name="password" type="text" placeholder="password" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                </label>
            </div>
            <button className="btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
        </form>
    );
};

export default Apply;