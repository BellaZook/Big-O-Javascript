import React from 'react'
// import PropTypes from 'prop-types'
import Title from '../../title';

const AppLinks = props => {
    return (
        <div className="container container-margin">
            <Title title="Links" />
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h3 className="">Chart</h3>
                    <a href="#big-o-chart">Big-O Complexity Chart</a>

                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h3 className="">Data Structure</h3>
                    <a href="#ds-array">Array</a>

                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h3 className="">Array Sorting Algorithms</h3>

                </div>
            </div>
        </div>
    )
}

// AppLinks.propTypes = {

// }

export default AppLinks
