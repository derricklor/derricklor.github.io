import React from 'react';

export default function Contact() {
    return (
        <div className="bg-radial from-zinc-200 to-blue-50 dark:from-zinc-700 dark:to-blue-800/10 flex-grow ">

            <div className="container mx-auto p-4 gap-6 mt-[5rem] ">

                <section className="bg-white rounded-[1rem] shadow-md w-fit mx-auto 
                dark:bg-zinc-800 dark:text-zinc-200 
                border-1 border-zinc-300 dark:border-zinc-600">
                    <div className="p-8 mx-auto max-w-screen-md">
                        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-black dark:text-white">
                            Contact Me</h2>

                        <p className="mb-8 lg:mb-16 font-light text-center text-zinc-500 dark:text-zinc-400 sm:text-xl">
                            Have something for me? Fill out the form and I will respond as soon as I can.</p>
                        <form action="https://formsubmit.co/bd5638daf3d1c38579a025227accbeed" method="POST" className="space-y-8">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-black dark:text-zinc-300">Your email</label>
                                <input type="email" id="email" name="email" className="shadow-sm bg-zinc-50 border border-zinc-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="address@email.com" required>
                                </input>
                            </div>
                            <div>
                                <label for="subject" className="block mb-2 text-sm font-medium text-black dark:text-zinc-300">Subject</label>
                                <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-black bg-zinc-50 rounded-lg border border-zinc-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Include the subject matter." required>
                                </input>
                            </div>
                            <div className="sm:col-span-2">
                                <label for="message" className="block mb-2 text-sm font-medium text-black dark:text-zinc-400">Your message</label>
                                <textarea id="message" rows="6" name="message" className="block p-2.5 w-full text-sm text-black bg-zinc-50 rounded-lg shadow-sm border border-zinc-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave your message here."></textarea>
                            </div>
                            <button type="submit" className="flex py-3 px-5 text-sm font-medium text-center text-black dark:text-zinc-300 
                                border border-zinc-500 dark:border-zinc-50 rounded-[1rem] hover:bg-zinc-300 dark:hover:bg-zinc-900 transition duration-300">
                                Send message</button>

                        </form>
                    </div>
                </section>
            </div></div>
    );
}