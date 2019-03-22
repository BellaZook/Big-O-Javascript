import React from 'react'
// import PropTypes from 'prop-types'
import TimeComplexity from './TimeComplexity';
import ArrayAccess from './Access';
import ArraySearch from './Search';
import Title from '../../components/title';
import Intro from './Intro';
import ArrayInsertion from './Insertion';
import ArrayDeletion from './Deletion';

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
                    <ArrayDeletion />
                    <ArrayInsertion />
                </div>
            </div>
        </div>
    )
}

// ArrayStructure.propTypes = {

// }

export default ArrayStructure
