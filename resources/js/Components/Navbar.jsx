import { Fragment, useState, useEffect } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import { Link } from "@inertiajs/react"
import LoginModal from "./LoginModal"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

const Navbar = () => {
    const [darkModeOn, setDarkModeOn] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    useEffect(() => {
        if (darkModeOn) {
            document.querySelector("body").classList.add("dark")
            document.querySelector("body").classList.add("bg-gray-950")
        } else {
            document.querySelector("body").classList.remove("dark")
        }
    }, [darkModeOn])
    return (
        <Disclosure as='nav' className='bg-zinc-100 dark:bg-slate-950'>
            {({ open }) => (
                <>
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                        <div className='flex h-16 items-center justify-between'>
                            <div className='flex items-center'>
                                <Link
                                    href='/'
                                    className='h-full flex items-center space-x-2'
                                >
                                    <img
                                        className='h-12 w-auto'
                                        src='./img/logo.svg'
                                        alt='Your Company'
                                    />
                                    <div className='w-[1.2px] h-10 bg-zinc-200 dark:bg-slate-800 rounded-full' />
                                    <span className='text-lg text-zinc-400 dark:text-zinc-600 font-light italic'>
                                        Careers
                                    </span>
                                </Link>
                            </div>
                            <div className='hidden sm:block'>
                                <div className='flex justify-center items-center space-x-4'>
                                    <button
                                        onClick={() =>
                                            setDarkModeOn(!darkModeOn)
                                        }
                                        className='relative w-12 h-7 rounded-full bg-zinc-200 dark:bg-slate-800'
                                    >
                                        <div className='px-1 w-full h-full flex items-center justify-between'>
                                            <HiOutlineSun
                                                className='text-lg text-zinc-500 dark:text-zinc-300'
                                                aria-hidden='true'
                                            />
                                            <HiOutlineMoon
                                                className='text-lg text-zinc-500 dark:text-zinc-300'
                                                aria-hidden='true'
                                            />
                                        </div>
                                        <div
                                            className={
                                                darkModeOn
                                                    ? "w-5 h-5 bg-white rounded-full transition-all duration-300 ease-in-out absolute top-1 translate-x-6"
                                                    : "w-5 h-5 bg-white rounded-full transition-all duration-300 ease-in-out absolute top-1 translate-x-1"
                                            }
                                        ></div>
                                    </button>
                                    <LoginModal />
                                </div>
                            </div>
                            <div className='-mr-2 flex sm:hidden'>
                                {/* Mobile menu button */}
                                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white'>
                                    <span className='sr-only'>
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className='sm:hidden'>
                        <div className='border-t border-zinc-200 dark:border-slate-800 pt-4 pb-3'>
                            <div className='flex justify-between items-center px-5'>
                                <LoginModal />

                                <button
                                    onClick={() => setDarkModeOn(!darkModeOn)}
                                    className='relative w-12 h-7 rounded-full bg-zinc-200 dark:bg-slate-800'
                                >
                                    <div className='px-1 w-full h-full flex items-center justify-between'>
                                        <HiOutlineSun
                                            className='text-lg text-zinc-500 dark:text-zinc-300'
                                            aria-hidden='true'
                                        />
                                        <HiOutlineMoon
                                            className='text-lg text-zinc-500 dark:text-zinc-300'
                                            aria-hidden='true'
                                        />
                                    </div>
                                    <div
                                        className={
                                            darkModeOn
                                                ? "w-5 h-5 bg-white rounded-full transition-all duration-300 ease-in-out absolute top-1 translate-x-6"
                                                : "w-5 h-5 bg-white rounded-full transition-all duration-300 ease-in-out absolute top-1 translate-x-1"
                                        }
                                    ></div>
                                </button>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar
