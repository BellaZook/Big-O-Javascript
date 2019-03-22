import React from 'react';
import SubjectCard from '../../components/card/Subject';
// import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const ArrayDeletion = props => {
    return (
        <SubjectCard title="Array Deletion">
            <Alert color="success" >
                <p>To delete an item at the beginning of an array use  "myArray.<strong>shift</strong>()".</p>
                <p><strong>myArray.shift( )</strong></p>
            </Alert>
            <Alert color="warning">
                <p>"shift" refers to the movement of the elements in the array. <br />
                    The elements are moved towards the starting point of the array (first element in the array). <br />
                    By deleting an element at the beginning of an array, all the original elements are moved (shifted) to the left.
                </p>

            </Alert>
            <p>const <strong>myArray</strong> = ["a", "b", "c", "d", "e", "f", "g"];</p>
            <p>Delete an element at the beginning of myArray: <br />
                myArray.shift( ) = ["b", "c", "d", "e", "f", "g"]
            </p>

        </SubjectCard>
    )
}

// ArrayAccess.propTypes = {

// }

export default ArrayDeletion;
