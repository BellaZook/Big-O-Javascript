import React from 'react';
import SubjectCard from '../../components/card/Subject';
// import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const ArrayInsertion = props => {
    return (
        <SubjectCard title="Array Insertion">
            <Alert color="success" >
                <p>To insert an item at the beginning of an array use  "myArray.<strong>unshift</strong>()".</p>
                <p><strong>myArray.unshift( element-1, ...element-n )</strong></p>
            </Alert>
            <Alert color="warning">
                <p>"unshift" refers to the movement of the elements in the array. <br />
                    The elements are moved away from the starting point of the array (first element in the array).
                    By inserting an element at the beginning of an array, all the original elements are moved (shifted) to the right. <br />
                </p>

            </Alert>
            <p>const <strong>myArray</strong> = ["a", "b", "c", "d", "e", "f", "g"];</p>
            <p>Insert an element at the beginning of myArray: <br />
                myArray.unshift("z") = ["z", "a", "b", "c", "d", "e", "f", "g"]
            </p>

        </SubjectCard>
    )
}

// ArrayAccess.propTypes = {

// }

export default ArrayInsertion;
