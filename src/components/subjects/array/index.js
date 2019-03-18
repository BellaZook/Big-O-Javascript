import React from 'react'
// import PropTypes from 'prop-types'
import TimeComplexity from './TimeComplexity';
import ArrayAccess from './Access';
import ArraySearch from './Search';
import Title from '../../title';
import Intro from './Intro';

const ArrayStructure = props => {
    return (
        <div id="ds-array" className="container container-margin">
            <Title title="Array" />
            <div className="row">
                <div className="col">
                    <Intro />
                    <TimeComplexity />
                    <ArrayAccess />
                    <ArraySearch />
                </div>
            </div>
        </div>
    )
}

// ArrayStructure.propTypes = {

// }

export default ArrayStructure
