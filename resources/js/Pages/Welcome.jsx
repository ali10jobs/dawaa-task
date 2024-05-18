import { useForm } from "@inertiajs/react"
import Layout from "@/Layouts/GuestLayout"
import { FaRegFilePdf } from "react-icons/fa6"
import InputError from "@/Components/DefualtComponents/InputError"
import { useEffect } from "react"

const Welcome = ({ countries }) => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        dob: "",
        gender: "",
        country_id: 1,
        cv: null,
    })

    const submit = (e) => {
        e.preventDefault()

        post(route("applications.store"), {
            forceFormData: true,
            onSuccess: () => reset("name", "dob", "gender", "country_id", "cv"),
        })
    }

    useEffect(() => {
        return () => reset("name", "dob", "gender", "country_id", "cv")
    }, [])

    return (
        <Layout>
            <div className='flex items-center justify-center w-screen bg-gray-100 dark:bg-slate-950'>
                <form
                    className='my-10 rounded-lg p-8 bg-white dark:bg-slate-900/50'
                    encType='multipart/form-data'
                    onSubmit={submit}
                >
                    <div className='space-y-12 mt-6'>
                        <div className='border-b border-gray-900/10 pb-12'>
                            <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-gray-100'>
                                Job Application
                            </h2>
                            <p className='mt-1 text-sm leading-6 text-gray-600 dark:text-gray-500'>
                                This information will not be displayed publicly
                                so be careful what you share.
                            </p>

                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                                <div className='sm:col-span-3'>
                                    <label
                                        htmlFor='name'
                                        className='block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100'
                                    >
                                        Name
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            value={data.name}
                                            type='text'
                                            name='name'
                                            id='name'
                                            autoComplete='name'
                                            className='block w-full rounded-md border-0 py-1.5 dark:bg-gray-900/50 text-gray-900 dark:text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        />

                                        <InputError
                                            message={errors.name}
                                            className='mt-2'
                                        />
                                    </div>
                                </div>
                                <div className='sm:col-span-3'>
                                    <label
                                        htmlFor='dob'
                                        className='block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100'
                                    >
                                        DOB
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            onChange={(e) =>
                                                setData("dob", e.target.value)
                                            }
                                            value={data.dob}
                                            type='date'
                                            name='dob'
                                            id='dob'
                                            autoComplete='dob'
                                            className='block w-full rounded-md border-0 py-1.5 dark:bg-gray-900/50 text-gray-900 dark:text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        />

                                        <InputError
                                            message={errors.dob}
                                            className='mt-2'
                                        />
                                    </div>
                                </div>
                                <div className='sm:col-span-3'>
                                    <label
                                        htmlFor='country_id'
                                        className='block text-sm font-medium text-gray-900 dark:text-gray-100'
                                    >
                                        Country
                                    </label>
                                    <div className='mt-2'>
                                        <select
                                            onChange={(e) => {
                                                setData(
                                                    "country_id",
                                                    e.target.value
                                                )
                                            }}
                                            value={data.country_id}
                                            id='country_id'
                                            name='country_id'
                                            autoComplete='country_id'
                                            className='block w-full rounded-md border-0 py-1.5 dark:bg-gray-900/50 text-gray-900 dark:text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                                        >
                                            {countries.map((country) => (
                                                <option
                                                    key={country.id}
                                                    value={country.id}
                                                >
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>

                                        <InputError
                                            message={errors.country_id}
                                            className='mt-2'
                                        />
                                    </div>
                                </div>
                                <div className='sm:col-span-3'>
                                    <fieldset className=''>
                                        <legend className='text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100'>
                                            Gender
                                        </legend>
                                        <div className='mt-3 flex space-x-6'>
                                            <div className='flex items-center gap-x-3'>
                                                <input
                                                    onChange={(e) =>
                                                        setData(
                                                            "gender",
                                                            e.target.value
                                                        )
                                                    }
                                                    id='male'
                                                    name='gender'
                                                    type='radio'
                                                    value='male'
                                                    className='h-4 w-4 border-gray-300 text-indigo-600  focus:ring-indigo-600'
                                                />
                                                <label
                                                    htmlFor='male'
                                                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100'
                                                >
                                                    Male
                                                </label>
                                            </div>
                                            <div className='flex items-center gap-x-3'>
                                                <input
                                                    onChange={(e) =>
                                                        setData(
                                                            "gender",
                                                            e.target.value
                                                        )
                                                    }
                                                    id='female'
                                                    name='gender'
                                                    type='radio'
                                                    value='female'
                                                    className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                                />
                                                <label
                                                    htmlFor='female'
                                                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100'
                                                >
                                                    Female
                                                </label>
                                            </div>

                                            <InputError
                                                message={errors.gender}
                                                className='mt-2'
                                            />
                                        </div>
                                    </fieldset>
                                </div>
                            </div>

                            <div className='col-span-full mt-8'>
                                <div className='col-span-full mt-8'>
                                    <label
                                        htmlFor='cover-photo'
                                        className='block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100'
                                    >
                                        Upload your CV
                                    </label>
                                    <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-gray-800 px-6 py-10'>
                                        <div className='text-center'>
                                            <FaRegFilePdf
                                                className='mx-auto h-12 w-12 text-gray-300 dark:text-gray-800'
                                                aria-hidden='true'
                                            />
                                            <div className='mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-100'>
                                                <label
                                                    htmlFor='cv-upload'
                                                    className='px-4 py-2 relative cursor-pointer rounded-md bg-white dark:bg-gray-950/50 font-semibold text-indigo-600 dark:text-indigo-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 dark:hover:text-indigo-700'
                                                >
                                                    <span>
                                                        Click here to upload
                                                        your CV
                                                    </span>
                                                    <input
                                                        onChange={(e) =>
                                                            setData(
                                                                "cv",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                        id='cv-upload'
                                                        name='cv'
                                                        type='file'
                                                        className='sr-only'
                                                    />
                                                </label>
                                            </div>
                                            <p className='text-xs leading-5 text-gray-600 dark:text-gray-700'>
                                                *File must be of type PDF
                                            </p>
                                        </div>
                                    </div>

                                    <InputError
                                        message={errors.cv}
                                        className='mt-2'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-6 flex items-center justify-end gap-x-6'>
                        <button
                            type='submit'
                            className='rounded-md bg-indigo-600 dark:bg-indigo-900 w-full py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Welcome
