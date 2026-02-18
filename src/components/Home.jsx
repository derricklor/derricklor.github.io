import {useEffect} from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

function Home({isDark}) {
    // cards transition effect
    useEffect(() => {
        const cards = document.querySelectorAll(".project-card");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("opacity-0", "translate-y-10");
                    entry.target.classList.add("opacity-100", "translate-y-0");
                }
            })
        }, {threshold: 0.1})
        cards.forEach(card=> observer.observe(card));
    }, []);
    
    return (
        <div className="container mx-auto flex-grow p-4 grid gap-6">

            {/* Main Content */}
            <main className="bg-zinc-100 p-6 rounded-lg shadow-md col-span-2 dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-xl ">
                
                <section className="grid grid-cols-1 gap-6">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6
                    bg-zinc-50 p-6 rounded-lg border-1 border-zinc-300 dark:border-zinc-600 shadow-md dark:bg-zinc-700 dark:text-zinc-200 dark:shadow-xl">
                        <img className="w-full rounded-xl" src="IMG_7231.jpg" alt="dashboard image"></img>
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">
                                Derrick Lor
                            </h2>
                            <p className="mb-6 font-light text-zinc-500 md:text-lg dark:text-zinc-400">
                                M.S. Graduate of University of Massachusetts Lowell. Interested in C++, HTML, CSS, Javascript, Python, Machine Learning, AI, MySQL, etc.
                            </p>
                            <Link to="/about">
                                <button className="flex py-3 px-5 text-sm font-medium text-center text-black dark:text-zinc-300 
                                border border-zinc-500 dark:border-zinc-50 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-800 transition duration-300">
                                    About
                                    <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="mt-6">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24 
                    bg-zinc-50 p-6 rounded-lg border-1 border-zinc-300 dark:border-zinc-600 shadow-md dark:bg-zinc-700 dark:text-zinc-200 dark:shadow-xl">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl dark:text-white">
                                Projects
                            </h2>
                            <p className="mt-4 text-base font-normal text-zinc-500 sm:text-xl dark:text-zinc-400">
                                Explore my coding projects!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2">
                            <ProjectCard engine="MERN Stack" title="Spyfall Web App" desc="Lie and deceit. The goal of the spy is to correctly guess the location, meanwhile the others players must deduce and vote out the spy. A recreation of the classic party game in your browser." link="https://github.com/derricklor/Spyfall" img="sf_light.png" />
                            <ProjectCard engine="React, SQL, Javascript" title="Movie Database Website" desc="A single page application to distribute informational pages about movies." link="https://github.com/derricklor/comp5130" img="moveidb.png"/>
                            <ProjectCard engine="YOLO, Python, Roboflow" title="Simple Face Detection & Recognition" desc="Trained face detector and simple face recognizer that distinguishes between whitelist and unrecognized faces." link="https://github.com/derricklor/comp5230project" img="simplefacedetector.png"/>
                            <ProjectCard engine="Tensorflow, Python" title="Guitar Chord Predicton Model" desc="Used machine learning to train a model to predict the guitar chord being played." link="https://github.com/gauravmodak2001/Guitar_Chord_Pred" img="2dcnn_visual.png"/>
                            <ProjectCard engine="Pygame, Python" title="AI Omok" desc="Play a game against a computer AI or a second player." link="https://github.com/derricklor/Omok" img="omok.png"/>
                            <ProjectCard engine="Figma" title="Nature Pass" desc="An app interface that allows mobile users to explore and find hidden gems in nature." link="https://github.com/derricklor/hci-naturepass" img="naturepass.png"/>
                            <ProjectCard engine="SQL, PHP, Group" title="Sunday Daycare Website" desc="A student & teacher platform for distributing reading assignments and materials." link="https://github.com/derricklor/database2project" img="daycarediagram.png"/>
                            <ProjectCard engine="Unity, C#, Group" title="Dungeon Quest" desc="Educational quiz game for 6th graders and above." link="https://derricklor.github.io/SWEProject/Website" img="dungeonquest.png"/>
                        </div>

                        <div className="mt-16 max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl dark:text-white">
                                My other webapps
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            <ProjectCard engine="React, Javascript" title="Lights Out Mini Game" desc="A fun game where you must turn off all the lights." link="https://derricklor.github.io/LightsOutMiniGame" />
                            <ProjectCard engine="React, Javascript" title="Unix Timestamp Generator" desc="Enter a data and time to generate a Unix Timestamp." link="https://derricklor.github.io/UnixTimeStampGenerator" />
                            <ProjectCard engine="React, Javascript" title="OllamaChat" desc="A web interface for interacting with Ollama local models." link="https://github.com/derricklor/ollamachat" />
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Home;
