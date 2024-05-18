import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import JobApplicationTable from "@/Components/JobApplicationTable"
import { Head, usePage } from "@inertiajs/react"

export default function Application({ applications }) {
    const { auth } = usePage().props
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
                    Application
                </h2>
            }
        >
            <Head title='Application' />

            <div className='py-12'>
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                    <div className='overflow-hidden shadow-sm sm:rounded-lg'>
                        <div className='p-6 text-gray-900'>
                            {applications.length ? (
                                <JobApplicationTable
                                    applications={applications}
                                />
                            ) : (
                                <p>No pending applications yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
