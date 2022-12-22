import React, { useContext } from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Apply = () => {
    const { error, setError } = useState('');
    const { LoginUser, setLoading } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // const { email, setEmail } = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const gmail = form.email.value;
        // setEmail(gmail);
        const password = form.password.value;

        LoginUser(gmail, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
        // console.log(email)





    }

    return (
        <form onSubmit={handleSubmit} className='w-3/6 mx-auto my-28 border-2 border-indigo-400 p-6 py-12 rounded-md bg-orange-100 shadow-2xl'>
            <div className="form-control w-full">
                <label htmlFor="eamil" className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <input id="eamil" name="email" type="email" placeholder="Email" className="input input-bordered w-full" />
            </div>
            <div className="form-control my-5 w-full">
                <label htmlFor="password" className="label">
                    <span className="label-text">Your Password</span>
                </label>
                <input id="password" name="password" type="password" placeholder="password" className="input input-bordered w-full" />
            </div>
            <div className="form-control">

                {/* <label>Tearms and condition</label> */}

            </div>
            <div>
                {error}
            </div>
            <button className="btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
            {/* <button className="btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg">Forgot password</button> */}

        </form>
    );
};

export default Apply;