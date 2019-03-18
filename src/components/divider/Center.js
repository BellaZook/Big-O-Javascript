import React from 'react'
import PropTypes from 'prop-types'

const CenterDivider = props => {
    return (
        <div className="col-12">
            <hr className={`divider col-6 ${props.classNames}`} />
        </div>
    )
}

CenterDivider.propTypes = {
    className: PropTypes.string
}

export default CenterDivider
