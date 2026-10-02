import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Layout = ({children, cart}) => {
    return (
        <div>
            <Navbar cart={cart}/>
            <div className="content">
                {children}
            </div>    
            <Footer />
        </div>
    )
}

export default Layout