import React from "react"

const ReportsNavbar = ({ states, setStateId, activeStateId }) => {
    return (
        <div className=''>
            <ul className='p-[6px] flex items-center justify-between bg-gray-200 dark:bg-gray-900/50 rounded-full'>
                <li>
                    <button
                        onClick={() => setStateId(null)}
                        className={
                            activeStateId === null
                                ? "px-3 py-1 rounded-full bg-white dark:bg-indigo-800 text-gray-800 dark:text-white shadow-md"
                                : "px-3 py-1 rounded-full text-gray-500"
                        }
                    >
                        All Applications
                    </button>
                </li>
                {states.map((state) => (
                    <li key={state.value}>
                        <button
                            onClick={() => setStateId(state.value)}
                            className={
                                activeStateId === state.value
                                    ? "px-3 py-1 rounded-full bg-white dark:bg-indigo-800 text-gray-800 dark:text-white shadow-md"
                                    : "px-3 py-1 rounded-full text-gray-500"
                            }
                        >
                            {state.name === "Submitted"
                                ? "Pending"
                                : state.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReportsNavbar
