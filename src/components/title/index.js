import React from 'react'
import PropTypes from 'prop-types'
import Divider from '../divider';

const Title = props => {
    return (
        <div className="row container">
            <Divider className="margin-top-xlg" />
            <div className="col-12 "><h3 className="text-center italic">{props.title}</h3></div>
            <Divider />
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title


