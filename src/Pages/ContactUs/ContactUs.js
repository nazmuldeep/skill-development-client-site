import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const ContactUs = () => {
    const { createUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.e.value
        const photoUrl = form.p.value
        const password = form.password.value
        console.log(name, email, photoUrl, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => { console.error(error) })

    }

    return (
        <div>
            <h1>This Is Contact Us</h1>
            <form onSubmit={handleSubmit} className='w-3/6 mx-auto my-28 border-2 border-indigo-600  p-6 py-12 rounded-md bg-orange-100 shadow-2xl'>
                <div className="form-control w-full">
                    <label for="name" className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input id="name" name="name" type="text" placeholder="Name" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label for="e" className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input id="e" name="e" type="email" placeholder="Email" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label for="p" className="label">
                        <span className="label-text">Your Photo URL</span>
                    </label>
                    <input id="p" name="p" type="text" placeholder="Photo URL" className="input input-bordered w-full" />
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
                <button type='submit' className="btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
            </form>

        </div>
    );
};

export default ContactUs;