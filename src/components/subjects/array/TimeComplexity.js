import React from 'react'
import TimeComplexityTable from '../../table/Complexity';
import SubjectCard from '../../card/Subject';
// import PropTypes from 'prop-types'

const TimeComplexity = props => {
    return (
        <SubjectCard title="Array Time Complexity">
            <TimeComplexityTable />
        </SubjectCard>
    )
}

// TimeComplexity.propTypes = {

// }

export default TimeComplexity

// {/* <div className="row margin-top-lg">
// <div className="col-12">
//     <h5>Array Time Complexity</h5>
// </div>
// <TimeComplexityTable />
// </div> */}
