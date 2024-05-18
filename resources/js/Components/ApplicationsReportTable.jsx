import { Link } from "@inertiajs/react"
import { HiArrowLongRight } from "react-icons/hi2"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

const JobApplicationTable = ({ applications, states, selectedStateId }) => {
    console.log(states)
    return (
        <div className='px-4 sm:px-6 lg:px-8 mb-20'>
            <div className='-mx-4 mt-10 ring-1 ring-gray-300s dark: ring-slate-900 dark:bg-slate-900/50 sm:-mx-6 md:mx-0 md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300 dark:divide-slate-900'>
                    <thead>
                        <tr>
                            <th
                                scope='col'
                                className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200 sm:pl-6'
                            >
                                Name
                            </th>
                            <th
                                scope='col'
                                className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200 lg:table-cell'
                            >
                                Birthdate
                            </th>
                            <th
                                scope='col'
                                className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200 lg:table-cell'
                            >
                                Gender
                            </th>
                            <th
                                scope='col'
                                className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200 lg:table-cell'
                            >
                                Nationality
                            </th>
                            <th
                                scope='col'
                                className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200 lg:table-cell'
                            >
                                Resume
                            </th>
                            <th
                                scope='col'
                                className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200 lg:table-cell'
                            >
                                Applied at
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application, index) => (
                            <tr key={application.id}>
                                <td
                                    className={classNames(
                                        index === 0
                                            ? ""
                                            : "border-t dark:border-slate-900 dark:border-slate-900ransparent",
                                        "relative py-4 pl-4 sm:pl-6 pr-3 text-sm"
                                    )}
                                >
                                    <div className='font-medium text-gray-900 dark:text-gray-200'>
                                        {application.name}
                                    </div>
                                </td>
                                <td
                                    className={classNames(
                                        index === 0
                                            ? ""
                                            : "border-t dark:border-slate-900 border-gray-200",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 dark:text-gray-400 lg:table-cell"
                                    )}
                                >
                                    {application.dob}
                                </td>
                                <td
                                    className={classNames(
                                        index === 0
                                            ? ""
                                            : "border-t dark:border-slate-900 border-gray-200",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 dark:text-gray-400 lg:table-cell"
                                    )}
                                >
                                    {application.gender}
                                </td>
                                <td
                                    className={classNames(
                                        index === 0
                                            ? ""
                                            : "border-t dark:border-slate-900 border-gray-200",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 dark:text-gray-400 lg:table-cell"
                                    )}
                                >
                                    {application.nationality}
                                </td>
                                <td
                                    className={classNames(
                                        index === 0
                                            ? ""
                                            : "border-t dark:border-slate-900 border-gray-200",
                                        "px-3 py-3.5 text-sm text-gray-500 dark:text-gray-400"
                                    )}
                                >
                                    <div>
                                        <a
                                            className='px-2 py-1 bg-white dark:bg-slate-900 hover:bg-gray-200 dark:hover:dark:bg-slate-800/80 text-xs text-indigo-700 hover:text-indigo-800 rounded-md border-[1px] border-gray-200 dark:border-slate-900'
                                            target='_blank'
                                            href={application.cv}
                                        >
                                            View Resume{" "}
                                            <HiArrowLongRight className='ml-1 inline' />
                                        </a>
                                    </div>
                                </td>
                                <td
                                    className={classNames(
                                        index === 0
                                            ? ""
                                            : "border-t dark:border-slate-900 border-gray-200",
                                        "px-3 py-3.5 text-sm text-gray-500 dark:text-gray-400"
                                    )}
                                >
                                    <div className=''>
                                        {application.applied_at}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default JobApplicationTable
