import { useEffect, useState } from "react"
import { Head, Link, useForm } from "@inertiajs/react"
import InputLabel from "./DefualtComponents/InputLabel"
import TextInput from "./DefualtComponents/TextInput"
import InputError from "./DefualtComponents/InputError"
import Checkbox from "./DefualtComponents/Checkbox"
import PrimaryButton from "./DefualtComponents/PrimaryButton"

const LoginForm = ({ status }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    })

    useEffect(() => {
        return () => {
            reset("password")
        }
    }, [])

    const submit = (e) => {
        e.preventDefault()

        post(route("login"))
    }
    return (
        <>
            <Head title='Log in' />

            {status && (
                <div className='mb-4 font-medium text-sm text-green-600'>
                    {status}
                </div>
            )}

            <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                    <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-white'>
                        Sign in to your account
                    </h2>
                </div>

                <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                    <div className='bg-white dark:bg-slate-800/40 backdrop-blur-sm border-gray-800/80 border-[0.5px] py-8 px-4 shadow rounded-lg sm:px-10'>
                        <form
                            className='w-80'
                            action='#'
                            method='POST'
                            onSubmit={submit}
                        >
                            <div>
                                <div className=''>
                                    <TextInput
                                        id='email'
                                        type='email'
                                        name='email'
                                        value={data.email}
                                        placeholder='Email'
                                        className='block w-full appearance-none dark:bg-gray-950/20 dark:text-gray-700 dark:placeholder:text-gray-700 rounded-md rounded-br-none rounded-bl-none border border-gray-300 dark:border-gray-800/50 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 dark:focus:border-indigo-800 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                                        autoComplete='username'
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className='mt-2'
                                    />
                                </div>
                            </div>

                            <div>
                                <div className='mt-[-1px]'>
                                    <TextInput
                                        id='password'
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        value={data.password}
                                        className='block w-full appearance-none dark:bg-gray-950/20 dark:text-gray-700 dark:placeholder:text-gray-700 rounded-md rounded-tr-none rounded-tl-none border border-gray-300 dark:border-gray-800/50 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 dark:focus:border-indigo-800 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                                        autoComplete='current-password'
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.password}
                                        className='mt-2'
                                    />
                                </div>
                            </div>

                            <div className='mt-3 flex items-center justify-between'>
                                <label className='flex items-center'>
                                    <Checkbox
                                        name='remember'
                                        className='dark:bg-gray-800 dark:border-gray-900'
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className='ms-2 text-sm text-gray-600'>
                                        Remember me
                                    </span>
                                </label>
                            </div>

                            <div className='mt-6'>
                                <PrimaryButton
                                    className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 dark:bg-indigo-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                    disabled={processing}
                                >
                                    Sign in
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm
