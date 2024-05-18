import { useState } from "react"
import ApplicationLogo from "@/Components/DefualtComponents/ApplicationLogo"
import Dropdown from "@/Components/DefualtComponents/Dropdown"
import NavLink from "@/Components/DefualtComponents/NavLink"
import ResponsiveNavLink from "@/Components/DefualtComponents/ResponsiveNavLink"
import { Link, usePage } from "@inertiajs/react"
import { HiMenu, HiOutlineDocumentReport } from "react-icons/hi"
import { HiOutlineUsers } from "react-icons/hi2"
import { IoIosArrowDown } from "react-icons/io"
import { CgClose } from "react-icons/cg"

const Authenticated = ({ children }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false)

    const [sidebarOpen, setSidbarOpen] = useState(false)
    const [dropdownMeunOpen, setDropdownMeunOpen] = useState(false)

    const { auth } = usePage().props
    document.querySelector("body").classList.add("bg-gray-100")
    return (
        <div className=''>
            <nav className='px-4 h-16 flex items-center justify-between dark:bg-gray-900/50 border-b-2 border-gray-200 dark:border-gray-900'>
                <div className='flex justify-center items-center'>
                    <button
                        onClick={() => setSidbarOpen(!sidebarOpen)}
                        className='p-2 text-gray-400 dark:text-gray-200 dark:hover:text-gray-400'
                    >
                        <HiMenu className='text-xl' />
                    </button>
                    <div className='ml-2 w-[1px] h-8 border-r-2 border-gray-200 dark:border-gray-900' />
                </div>

                <button
                    onClick={() => setDropdownMeunOpen(!dropdownMeunOpen)}
                    className='p-2 flex items-center text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400'
                >
                    {auth.user.name} <IoIosArrowDown className='ml-2' />
                </button>

                {/* Dropdown menu */}

                <div
                    className={
                        dropdownMeunOpen
                            ? "absolute top-12 right-2 w-56 rounded-lg bg-white dark:bg-gray-900/50 backdrop-blur-md border-[1px] border-gray-200 dark:border-gray-900"
                            : "hidden"
                    }
                >
                    <ul className='w-full'>
                        <li className='py-2 w-full'>
                            <Link
                                as='button'
                                method='get'
                                href={route("profile.edit")}
                                className='px-4 py-2 flex items-center w-full capitalize text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900'
                            >
                                Profile
                            </Link>
                        </li>
                        <li className='py-2 w-full'>
                            <Link
                                as='button'
                                method='post'
                                href={route("logout")}
                                className='px-4 py-2 flex items-center w-full capitalize text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900'
                            >
                                Sign out
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* SideBar */}

                <div
                    className={
                        sidebarOpen
                            ? "fixed z-50 top-0 left-0 w-72 h-screen bg-indigo-600 dark:bg-indigo-800/50 backdrop-blur-md transition-all duration-300"
                            : "fixed z-50 top-0 left-0 w-72 h-screen bg-indigo-600 dark:bg-indigo-800/50 backdrop-blur-md transition-all duration-300 -translate-x-full"
                    }
                >
                    <div className='px-4 absolute top-0 w-full h-16 flex justify-end'>
                        <button
                            onClick={() => setSidbarOpen(!sidebarOpen)}
                            className='p-2 text-white'
                        >
                            <CgClose className='text-xl' />
                        </button>
                    </div>
                    <div className='mt-32 px-4'>
                        <ul className=''>
                            <li>
                                <Link
                                    href={route("applications.index")}
                                    method='get'
                                    as='button'
                                    className='mt-4 p-2 w-full hover:bg-indigo-700 dark:hover:bg-indigo-900/50 rounded-xl flex items-center space-x-3 text-white'
                                >
                                    <HiOutlineUsers className='text-3xl' />
                                    <span>Candidates</span>
                                </Link>
                            </li>

                            {auth.can.view_reports && (
                                <li>
                                    <Link
                                        href='/reports'
                                        method='get'
                                        as='button'
                                        className='mt-4 p-2 w-full hover:bg-indigo-700 dark:hover:bg-indigo-900/50 rounded-xl flex items-center space-x-3 text-white'
                                    >
                                        <HiOutlineDocumentReport className='text-3xl' />
                                        <span>Reports</span>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='w-full'>
                <div className='max-w-7xl h-20 mx-auto'>{children}</div>
            </div>
        </div>
    )
}

export default Authenticated
