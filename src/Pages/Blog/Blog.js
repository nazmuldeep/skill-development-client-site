import React from 'react';
import Carousel from '../../Sharepage/Carousel/Carousel';

const Blog = () => {
    return (
        <div>
            <Carousel></Carousel>
            <div className=" grid max-w-sm gap-5 m-auto w-100 mb-8 lg:grid-cols-4 mt-14 sm:mx-auto lg:max-w-full">
                <div className="px-10 py-20  border rounded lg:px-5 lg:py-10 xl:py-20">

                    <a
                        href="/"
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"

                    >
                        What is Cors ?
                    </a>
                    <p className="max-w-xs  mb-2 text-black">
                        Ans: A server can specify any origins (domain, scheme, or port) other than its own from which a browser should authorize loading resources using the Cross-Origin Resource Sharing (CORS) HTTP header-based technique.In order to ensure that the server hosting the cross-origin resource will allow the real request, CORS also uses a technique wherein browsers send a "preflight" request to the server.
                    </p>

                </div>
                <div className="px-10 py-20  border rounded lg:px-5 lg:py-10 xl:py-20">

                    <a
                        href="/"
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"

                    >
                        Why are you using firebase.What other options do you have to improve authentication?
                    </a>
                    <p className="max-w-xs mx-auto mb-2 text-black">
                        Ans: By enabling secure access to the database directly from client-side code, the Firebase Realtime Database enables you to create robust, collaborative apps. Data is locally stored, and real-time events continue to happen even when the user is offline, providing a responsive experience.
                        Most apps require a user's identification in order to function. An app may safely save user data in the cloud and deliver the same individualized experience across all of the user's devices by ascertaining the identity of the user.To authenticate users for your project, Firebase Authentication offers ready-made UI libraries, simple SDKs, and backend services. It supports federated identity providers like Google, Facebook, and Twitter, as well as passwords, phone numbers, and other methods.

                    </p>

                </div>
                <div className="px-10 py-20  border rounded lg:px-5 lg:py-10 xl:py-20">

                    <a
                        href="/"
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"

                    >
                        How does private route works?
                    </a>
                    <p className="max-w-xs mx-auto mb-2 text-black">
                        Ans: If the user is logged in, the react private route component renders child components (children).
                        The return url is passed in the location state propertye experience and the user is sent to the /login page if they are not logged in.

                    </p>

                </div>
                <div className="px-10 py-20  border rounded lg:px-5 lg:py-10 xl:py-20">

                    <a
                        href="/"
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        aria-label="Read article"

                    >
                        What is Node and  how dose it use for ?
                    </a>
                    <p className="max-w-xs mx-auto mb-2 text-black">
                        Ans : A node is a point of intersection/connection within a data communication network. In an environment where all devices are accessible through the network, these devices are all considered nodes. The individual definition of each node depends on the type of network it refers to.
                        Instead of using a browser, Node enables developers to create JavaScript code that runs directly in a computer process. As a result, Node may be used to create server-side apps that have access to the operating system, file system, and other components needed to create fully-functional applications

                    </p>

                </div>
            </div>


        </div >
    );
};

export default Blog;