import { Link } from "@inertiajs/react"
import { HiArrowLongRight } from "react-icons/hi2"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

const JobApplicationTable = ({ applications }) => {
    return (
        <div className='px-4 sm:px-6 lg:px-8'>
            <div className='sm:flex sm:items-center'>
                <div className='sm:flex-auto'>
                    <h1 className='text-xl font-semibold text-gray-900 dark:text-gray-200'>
                        Job Applications
                    </h1>
                    <p className='mt-2 text-gray-600'>
                        This is all pending job applications that needs your
                        action.
                    </p>
                </div>
            </div>

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
                                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200'
                            >
                                Resume
                            </th>
                            <th
                                scope='col'
                                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200'
                            >
                                Applied at
                            </th>
                            <th
                                scope='col'
                                className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-200'
                            >
                                Actions
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
                                            : "border-t dark:border-slate-900 border-transparent",
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
                                            : "border-t border-gray-200 dark:border-slate-900",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 dark:text-gray-400 lg:table-cell"
                                    )}
                                >
                                    {application.dob}
                                </td>
                                <td
                                    className={classNames(
                                        index === 0
                                            ? ""
                                            : "border-t border-gray-200 dark:border-slate-900",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 dark:text-gray-400 lg:table-cell"
                                    )}
                                >
                                    {application.gender}
                                </td>
                                <td
                                    className={classNames(
                                        index === 0
                                            ? ""
                                            : "border-t border-gray-200 dark:border-slate-900",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 dark:text-gray-400 lg:table-cell"
                                    )}
                                >
                                    {application.nationality}
                                </td>
                                <td
                                    className={classNames(
                                        index === 0
                                            ? ""
                                            : "border-t border-gray-200 dark:border-slate-900",
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
                                            : "border-t border-gray-200 dark:border-slate-900",
                                        "px-3 py-3.5 text-sm text-gray-500 dark:text-gray-400"
                                    )}
                                >
                                    <div className=''>
                                        {application.applied_at}
                                    </div>
                                </td>
                                <td
                                    className={classNames(
                                        index === 0
                                            ? ""
                                            : "border-t border-gray-200 dark:border-slate-900",
                                        "px-3 py-3.5 text-sm text-gray-500 dark:text-gray-400"
                                    )}
                                >
                                    <div className='flex items-center'>
                                        <div>
                                            <Link
                                                className='px-2 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-xs text-emerald-700 dark:text-white rounded-md mr-1 border-[1px] border-emerald-200 dark:border-emerald-800'
                                                data={{
                                                    action: "approve",
                                                }}
                                                method='put'
                                                href={route(
                                                    "applications.update",
                                                    {
                                                        id: application.id,
                                                    }
                                                )}
                                                as='button'
                                            >
                                                Approve
                                            </Link>
                                        </div>
                                        <div>
                                            <Link
                                                className='px-2 py-1 bg-red-100 dark:bg-red-500/20 text-xs text-red-700 dark:text-white rounded-md ml-1 border-[1px] border-red-200 dark:border-red-900/50'
                                                data={{
                                                    action: "reject",
                                                }}
                                                method='put'
                                                href={route(
                                                    "applications.update",
                                                    {
                                                        id: application.id,
                                                    }
                                                )}
                                                as='button'
                                            >
                                                Reject
                                            </Link>
                                        </div>
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
