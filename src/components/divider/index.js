import React from 'react'
import PropTypes from 'prop-types'

const Divider = props => {
    return (
        <hr className={`divider col-12 ${props.className}`} />
    )
}

Divider.propTypes = {
    className: PropTypes.string
}

export default Divider
