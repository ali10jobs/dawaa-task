import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import ReportsNavbar from "@/Components/ReportsNavbar"
import ApplicationsReportTable from "@/Components/ApplicationsReportTable"
import { useState, useRef, useEffect } from "react"

export default function Reports({ auth, applications, states }) {
    const [selectedStateId, setSelectedStateId] = useState(null)
    const [filteredApplications, setFilteredApplications] =
        useState(applications)

    useEffect(
        function () {
            setFilteredApplications(
                selectedStateId !== null
                    ? applications.filter(
                          (application) => application.state === selectedStateId
                      )
                    : applications
            )
        },
        [selectedStateId]
    )

    return (
        <AuthenticatedLayout>
            <div className='mt-16'>
                <h1 className='text-2xl text-gray-900 dark:text-white font-bold'>
                    Reports
                </h1>
            </div>
            <div className='mt-10'>
                <ReportsNavbar
                    setStateId={setSelectedStateId}
                    states={states}
                    activeStateId={selectedStateId}
                />
            </div>
            <div className='mt-16'>
                {filteredApplications.length ? (
                    <ApplicationsReportTable
                        applications={filteredApplications}
                        states={states}
                        selectedStateId={selectedStateId}
                    />
                ) : (
                    <p className='text-gray-700 dark:text-gray-400'>
                        No applications found...
                    </p>
                )}
            </div>
        </AuthenticatedLayout>
    )
}
