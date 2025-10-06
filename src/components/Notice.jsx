

export default function Notice({color, message}) {
    return (
        <div className={`bg-${color}-50 mt-4 p-4 border border-${color}-200 rounded-md text-${color}-700 text-sm dark:bg-${color}-700 dark:text-${color}-200 dark:border-${color}-600`} >
            <p>{message}</p>
        </div>
    );
}