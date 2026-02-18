export default function ProjectCard({ engine, title, desc, link, img}) {

    return (
        <div className="project-card space-y-4 opacity-0 translate-y-10 transition-all duration-700 
        border-2 border-gray-300 bg-white rounded-lg shadow-md hover:shadow-xl dark:border-gray-600 dark:bg-gray-600 
        dark:text-gray-200 dark:shadow-md dark:hover:shadow-xl antialiased ">
            {img &&
                <a href={link} title={'View ' + title} target="_blank">
                    <img src={img} alt={title} className="w-full h-64 object-cover rounded-t-lg" />
                </a>
            }
                <div className="text-center p-6">
                    <span className="bg-gray-300 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        {engine}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                        {desc}
                    </p>
                    <a href={link} title={'View ' + title} target="_blank"
                        className="text-black dark:text-gray-300 justify-center bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900  inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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