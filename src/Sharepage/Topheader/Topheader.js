import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGoogle, FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Topheader = () => {
    const { providerLogin, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

    const handleGithubSignIn = () => {
        providerLogin(gitProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);

            })
            .catch(error => console.error(error))

    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                verifyEmail();
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='navbar justify-between'>
            <div className='mx-5 mt-2'>
                <button className='btn btn-circle btn-outline btn-accent mx-2'><FaFacebook></FaFacebook></button>
                <button className='btn btn-circle btn-outline btn-warning mx-2'><FaInstagram></FaInstagram></button>
                <button className=' btn btn-circle btn-outline btn-info mx-2'><FaTwitter></FaTwitter></button>
            </div>
            <div>
                <button onClick={handleGoogleSignIn} className='text-1xl btn btn-outline btn-warning my-2 mx-2'><FaGoogle className='mr-2'></FaGoogle>  Login With Google</button>
                <button onClick={handleGithubSignIn} className='btn btn-outline btn-drak mx-2 py-0'><FaGithub className='mr-2'></FaGithub>  Login With Github</button>

                <>
                    <label htmlFor="AcceptConditions" className="relative h-8 w-14 cursor-pointer">
                        <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

                        <span
                            className="absolute inset-0 rounded-full bg-gray-400 transition peer-checked:bg-green-400"
                        ></span>

                        <span
                            className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-6"
                        ></span>
                    </label>
                </>
            </div>
        </div>
    );
};

export default Topheader;