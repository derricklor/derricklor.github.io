export default function ProjectCard({ engine, title, desc, link, img}) {

    return (
        <div className="project-card space-y-4 opacity-0 translate-y-10 rounded-lg
            transition-all duration-700 hover:scale-103 
            bg-white border-2 border-zinc-300 dark:border-zinc-600 dark:bg-zinc-600 
            dark:text-zinc-200 
            shadow-md hover:shadow-xl antialiased ">
            {img &&
                <a href={link} title={'View ' + title} target="_blank">
                    <img src={img} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
                </a>
            }
                <div className="flex flex-col items-center p-6">
                    <span className="bg-zinc-300 text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-zinc-700 dark:text-zinc-300">
                        {engine}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight mt-2 text-black dark:text-white">
                        {title}
                    </h3>
                    <p className="text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-4 mb-16">
                        {desc}
                    </p>
                    <a href={link} title={'View ' + title} target="_blank"
                    className="text-black dark:text-zinc-300 text-sm justify-center inline-flex items-center font-medium 
                        rounded-[1rem] px-5 py-2.5 absolute bottom-6
                        border border-zinc-500 dark:border-zinc-50 hover:bg-zinc-300 dark:hover:bg-zinc-800 
                        transition duration-300"
                        role="button">
                        View
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
        </div>
    )
};