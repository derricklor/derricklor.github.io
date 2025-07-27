import React from 'react';
import ProjectCard from './ProjectCard';

function Home() {
    return (
        <div className="container mx-auto flex-grow p-4 grid gap-6">

            {/* Main Content */}
            <main className="bg-white p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-2 order-1 md:order-2 dark:bg-gray-800 dark:text-gray-200 dark:shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Home</h2>
                <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                    This is the primary content section of the page. On small screens, this content will appear directly below the header.
                    As the screen size increases (medium and large breakpoints), the sidebars will appear alongside this main content,
                    creating a multi-column layout. The design prioritizes readability and accessibility across various devices.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                    We're using Tailwind CSS for a utility-first approach to styling, which makes it easy to build responsive designs
                    without writing custom CSS for every breakpoint. The `grid` and `flex` utilities are key to achieving this flexible layout.
                </p>
                <div className="bg-gray-100 p-4 rounded-md border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Key Features:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 dark:text-gray-400">
                        <li>Mobile-first approach: Optimized for small screens first.</li>
                        <li>Responsive grid layout using Tailwind CSS.</li>
                        <li>Header, main content, two sidebars, and footer sections.</li>
                        <li>Clean and modern aesthetic with rounded corners and shadows.</li>
                    </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4 dark:text-gray-300">
                    Feel free to resize your browser window to see how the layout adapts!
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 dark:text-gray-300"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis delectus inventore exercitationem quod dolorum? Iusto, voluptas reiciendis a totam, hic dicta, ullam tempora facilis expedita ipsam optio quos? Minus, facilis.</p>
                <p className="text-gray-700 leading-relaxed mt-4 dark:text-gray-300"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis delectus inventore exercitationem quod dolorum? Iusto, voluptas reiciendis a totam, hic dicta, ullam tempora facilis expedita ipsam optio quos? Minus, facilis.</p>
            
                <section className="bg-gray-100 dark:bg-gray-900 antialiased">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                                Projects
                            </h2>
                            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                                Explore my coding projects!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            <ProjectCard engine="React, SQL, Javascript" title="Movie Database Website" desc="A single page application to distribute informational pages about movies." link="#" />
                            <ProjectCard engine="YOLO, Python, Roboflow" title="Simple Face Detection & Recognition" desc="Trained face detector and simple face recognizer that distinguishes between whitelist and unrecognized faces." link="#" />
                            <ProjectCard engine="Tensorflow, Python" title="Guitar Chord Predicton Model" desc="Used machine learning to train a model to predict the guitar chord being played." link="#" />
                            <ProjectCard engine="SQL, PHP, Group" title="Sunday Daycare Website" desc="A student & teacher platform for distributing reading assignments and materials." link="#" />
                            <ProjectCard engine="Unity, C#, Group" title="Dungeon Quest" desc="Educational quiz game for 6th graders and above." link="#" />
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Home;
