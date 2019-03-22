import React from 'react';
import SubjectCard from '../../components/card/Subject';
// import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const ArraySearch = props => {
    return (
        <SubjectCard title="Array Search">
            <Alert color="success" >
                <p>To search, find the index of the item with "myArray.indexOf" or "myArray.lastIndexOf"</p>
                <p><strong>myArray.indexOf( searchElement, StartSearchFromIndex )</strong></p>
            </Alert>
            <p>const <strong>stringArray</strong> = ["a", "b", "c", "d", "e", "f", "g"];</p>
            <p>Starting on the left side of the array, search for the letter "c" in stringArray: <br />
                stringArray.indexOf("c") = 2
            </p>
            <hr />
            <p>Starting on the right side of the array, search for the letter "c" in stringArray:</p>
            <Alert color="warning">
                <p>Index values are the same when searching with "indexOf" or "lastIndexOf".<br />
                    The index value goes form left to right and start with zero:</p>
            </Alert>
            <p>stringArray.lastIndexOf("c") = 2</p>
            <hr />
            <p>const <strong>numberArray</strong> = [3, 6, 9, 12];</p>
            <p>
                Starting on the left side of the array, search for the number 12 in numberArray: <br />
                numberArray.indexOf(12) = 3
            </p>

        </SubjectCard>
    )
}

// ArrayAccess.propTypes = {

// }

export default ArraySearch;
