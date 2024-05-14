import React from 'react'
import Navbar from '../components/Navbar/navbar.component'

const DefaultlayoutHOC = (Components) =>
    ({ ...props }) => {
        return (
            <div>
                <Navbar />
                <Components {...props} />
                <div>Footer</div>
            </div>
        )
    }

export default DefaultlayoutHOC