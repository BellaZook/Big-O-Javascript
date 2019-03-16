import React from 'react'
import PropTypes from "prop-types"

const Header = (props) => {
    return (
        <header className="App-header">
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

