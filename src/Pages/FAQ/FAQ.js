import React, { useState } from 'react';
const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-black transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-black">{children}</p>
                </div>
            )}
        </div>
    );
};
const FAQ = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center">
                    <a href="/" className="mb-6 sm:mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                        width="60"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative"> Thank you for visiting Our Skill development website</span>
                            </span>{' '}
                        </h2>
                        <p className="text-base text-black md:text-lg">
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <Item title="Is there a specific time my Skill development course must begin? And how much time do I have to finish it?">
                        There are no time limits for starting or finishing a course. Examine our Lifetime Access policy in more detail.
                    </Item>
                    <Item title="Is Skill development a recognized academic institution? After finishing a course, do I get anything?">
                        Although Skill development is not a recognized college, we do provide skill-based courses taught by professionals with extensive real-world experience. Every approved, paid course comes with a certificate of completion that serves as proof of your success.
                    </Item>
                    <Item title="Is it possible to view a course preview?">
                        Yes! Review crucial details about a course and learn how to preview it. This article describes how to explore Skill development's constantly expanding course catalog to find courses you're interested in taking
                    </Item>
                    <Item title="How can I make a course payment?">
                        Learn easy supports several different payment methods, depending on your account country and location.
                    </Item>
                    <Item title="What if I don’t like a course I purchased?">
                        Depending on the country and location of your account, Skill development accepts a number of different payment methods.
                        • Get more information on our payment options

                    </Item>
                    <Item title="What happens if I don't enjoy a course I bought?">
                        All qualified courses purchased on Skill development may be returned for a refund within 30 days if you're not completely pleased. If you are dissatisfied with a course, you may ask for a refund as long as your request complies with the requirements of our refund policy
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default FAQ;