import { useState, useEffect } from "react"
import { Head, Link, useForm } from "@inertiajs/react"
import LoginForm from "./LoginForm"

import InputLabel from "./DefualtComponents/InputLabel"
import TextInput from "./DefualtComponents/TextInput"
import InputError from "./DefualtComponents/InputError"
import Checkbox from "./DefualtComponents/Checkbox"
import PrimaryButton from "./DefualtComponents/PrimaryButton"

const AuthForms = ({ status }) => {
    const [loginFormActive, setLoginFormActive] = useState(false)

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
            {loginFormActive ? (
                <Head title='Log in' />
            ) : (
                <Head title='Create Account' />
            )}

            {status && (
                <div className='mb-4 font-medium text-sm text-emerald-600'>
                    {status}
                </div>
            )}

            <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                    {loginFormActive ? (
                        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-white'>
                            Sign in to your account
                        </h2>
                    ) : (
                        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-white'>
                            Create new account
                        </h2>
                    )}
                    <p className='mt-2 text-center text-sm text-white'>
                        Or{" "}
                        {loginFormActive ? (
                            <button
                                onClick={() =>
                                    setLoginFormActive(!loginFormActive)
                                }
                                className='font-medium text-zinc-300 hover:text-zinc-100 underline'
                            >
                                click here if you don't have an account
                            </button>
                        ) : (
                            <button
                                onClick={() =>
                                    setLoginFormActive(!loginFormActive)
                                }
                                className='font-medium text-zinc-300 hover:text-zinc-100 underline'
                            >
                                click here if you already have an account
                            </button>
                        )}
                    </p>
                </div>
                <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                    <div className='bg-white py-8 px-4 shadow rounded-lg sm:px-10'>
                        <form onSubmit={submit}>
                            <div className='min-w-80'>
                                {/* <InputLabel htmlFor='email' value='Email' /> */}
                                <div className=''>
                                    <InputError
                                        message={errors.email}
                                        className='mt-2'
                                    />

                                    <TextInput
                                        id='email'
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        value={data.email}
                                        className='block w-full appearance-none rounded-xl rounded-br-none rounded-bl-none border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
                                        autoComplete='username'
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                {/* <InputLabel
                                    htmlFor='password'
                                    value='Password'
                                /> */}
                                <div className='mt-[-1px]'>
                                    <TextInput
                                        id='password'
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        value={data.password}
                                        className='block w-full appearance-none rounded-xl rounded-tr-none rounded-tl-none border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
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

                            <div className='mt-4 flex items-center justify-between'>
                                <label className='flex items-center'>
                                    <Checkbox
                                        name='remember'
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className='ms-2 text-sm text-zinc-600'>
                                        Remember me
                                    </span>
                                </label>
                            </div>

                            <div className='mt-8'>
                                <PrimaryButton
                                    className='flex w-full justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700/95 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2'
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

export default AuthForms
