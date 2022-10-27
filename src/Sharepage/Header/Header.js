import React from 'react';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const HandleLogout = () => {
        logOut()
            .then()
            .cath(error => console.log(error))

    }
    return (

        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={'/home'} className="btn btn-ghost normal-case text-xl">Skill Development</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/courses'}>Courses</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/faq'}>FAQ</Link></li>
                    <li><Link to={'/aboutUs'}>About Us</Link></li>
                    {
                        user?.uid ?
                            <>

                                <li><Link>{user?.displayName}</Link></li>
                                <button onClick={HandleLogout}>Logout</button>
                            </> :
                            <>
                                <li><Link to={'/contact'}>Register</Link></li>
                                <li><Link to={'/apply'}>Login</Link></li>
                            </>

                    }
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {!user?.photoURL ?
                                <FaUser></FaUser> :
                                <>
                                    <img src={user?.photoURL} />
                                </>

                            }
                        </div>
                    </label>
                </ul>
            </div>
        </div>
    );
};

export default Header;