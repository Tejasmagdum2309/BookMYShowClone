import React from 'react'

import MovieNavbar from '../components/Navbar/movieNavbar.component'


const MovielayoutHOC = (Components) =>
    ({ ...props }) => {
        return (
            <div>
                <MovieNavbar />
                <Components {...props} />
                <div>Footer</div>

            </div>
        )
    }

export default MovielayoutHOC
