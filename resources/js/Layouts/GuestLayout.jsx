import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='max-w-2xl'>{children}</div>
            <Footer />
        </div>
    )
}

export default GuestLayout
