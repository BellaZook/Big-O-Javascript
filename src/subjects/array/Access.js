import React from 'react';
import SubjectCard from '../../components/card/Subject';
// import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const ArrayAccess = props => {
    return (
        <SubjectCard title="Array Access">
            <Alert color="success" >
                <p>If you know the index of an item in an array, you can access it directly using its index.</p>
                <p><strong>myArray[ itemIndex ];</strong></p>
            </Alert>
            <p> const <strong>myArray</strong> = [1, 2, 3, 4, 5]</p>
            <p> myArray[0] = 1</p>
            <p> myArray[2] = 3</p>
            <p> myArray[4] = 5</p>
        </SubjectCard>
    )
}

// ArrayAccess.propTypes = {

// }

export default ArrayAccess;
