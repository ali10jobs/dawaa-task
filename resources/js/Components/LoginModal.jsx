import { useState } from "react"
import LoginForm from "./LoginForm"

const LoginModal = () => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
            <div>
                <button
                    className='text-zinc-800 dark:text-white font-medium'
                    onClick={() => setModalOpen(!modalOpen)}
                >
                    Sign In
                </button>
            </div>
            {modalOpen ? (
                <>
                    <div
                        onClick={() => setModalOpen(!modalOpen)}
                        className='fixed top-0 left-0 sm:-left-4 z-10 h-screen w-screen bg-gray-950/50 dark:bg-gray-950/80 backdrop-blur-sm'
                    />
                    <div className='absolute top-0 left-0 sm:-left-4  flex justify-center items-center w-screen h-screen'>
                        <div className='absolute z-20'>
                            <LoginForm />
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}
        </>
    )
}

export default LoginModal
