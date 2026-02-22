import React from 'react';
import Notice from './Notice';

function About() {
    return (
        <div className="bg-radial from-zinc-200 to-blue-50 dark:from-zinc-700 dark:to-blue-800/10 flex-grow">

            <div className="container mx-auto p-4  
            grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[5rem]">

                {/* Left Sidebar (visible on md screens and up) */}
                <aside className="bg-white p-6 rounded-[1rem] shadow-md h-fit md:col-span-1 lg:col-span-1 order-2 md:order-1 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-xl">
                    <h2 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100">Derrick Lor</h2>

                    <img className="w-full block mb-2 rounded-[1rem]" src="/profilepic_derricklor.png" alt="profile image"></img>
                    <span class="bg-zinc-300 text-zinc-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-zinc-700 dark:text-zinc-300">
                        Software Developer
                    </span>
                    <Notice color="zinc" message={
                        <div>
                            <p className="text-zinc-700 leading-relaxed mb-4 text-xs dark:text-zinc-300">
                                Social Media Links:
                            </p>

                            <div className="flex justify-around flex-wrap mt-4">
                                {/* Github */}
                                <a href="https://github.com/derricklor" target='_blank'>
                                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#333]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                            <path
                                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                        </svg>
                                    </span>
                                </a>
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/derrick-lor-629175234/" target='_blank'>
                                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path
                                                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                        </svg>
                                    </span>
                                </a>
                                {/* X */}
                                <a href="https://x.com/derrick_lor" target='_blank'>
                                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    } />

                </aside>

                {/* Main Content */}
                <main className="bg-white p-6 rounded-[1rem] shadow-md md:col-span-2 lg:col-span-2 order-1 md:order-2 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-xl">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">
                        About
                    </h2>
                    <section className="border-1 border-zinc-200 p-2 rounded-lg dark:border-zinc-700">
                        <p className="text-zinc-700 leading-relaxed dark:text-zinc-300">
                            I am a software developer with a passion for creating efficient and user-friendly applications. My expertise lies in full-stack development, and I enjoy working with modern technologies to build scalable solutions.
                        </p>
                    </section>

                    <br></br>

                    <section className="border-1 border-zinc-200 p-2 rounded-lg dark:border-zinc-700">
                        <p className="text-zinc-700 leading-relaxed mb-4 dark:text-zinc-300">
                            I started my journey in programming during my high school years, where I discovered my love for coding.
                            Since then, I have honed my skills through college by building various projects either solo or with collaborations.
                            I graduated with a Bachelor's degree in Computer Science in 2022, and I am always eager to learn new technologies and improve my skills.
                        </p>
                    </section>

                    <br></br>

                    <section className="border-1 border-zinc-200 p-2 rounded-lg dark:border-zinc-700">
                        <p className="text-zinc-700 leading-relaxed mb-4 dark:text-zinc-300">
                            In 2025, I completed my Master's degree program in General Computer Science, which further deepened my understanding of computer science disciplines
                            like algorithms, operating systems, machine learning, reinforcement learning, artificial intelligence, web design, and computer vision.
                        </p>
                    </section>
                </main>

                {/* Right Sidebar (visible on lg screens and up) */}
                <aside className="bg-white p-6 rounded-[1rem] shadow-md h-fit lg:col-span-1 order-3 md:col-span-3 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-xl">

                    <ol className="relative border-s border-zinc-200 dark:border-zinc-700">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black dark:bg-zinc-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">
                                May 2022</time>
                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                Graduated Bachelor's in CS</h3>
                            <p className="mb-4 text-base font-normal text-zinc-500 dark:text-zinc-400">
                                University of Massachusetts, Lowell, MA.
                                Overall GPA: 3.514, GPA in Major: 3.703
                            </p>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black dark:bg-zinc-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">
                                May 2025</time>
                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                Graduated Master's in CS</h3>
                            <p className="mb-4 text-base font-normal text-zinc-500 dark:text-zinc-400">
                                University of Massachusetts, Lowell, MA.
                                Cumulative GPA 3.81
                            </p>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black dark:bg-zinc-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">
                                Onwards</time>
                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                Working on it!</h3>
                            <p className="mb-4 text-base font-normal text-zinc-500 dark:text-zinc-400">
                                ...
                            </p>
                        </li>
                    </ol>


                </aside>

            </div>
        </div>
    );
}

export default About;