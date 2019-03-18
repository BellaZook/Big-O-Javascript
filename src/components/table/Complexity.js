import React from 'react';
import { Table } from 'reactstrap';

const TimeComplexityTable = () => {
    return (
        <Table dark>
            <thead>
                <tr>
                    <th>Access</th>
                    <th>Search</th>
                    <th>Insertion</th>
                    <th>Deletion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>O(1)</td>
                    <td>O(n)</td>
                    <td>O(n)</td>
                    <td>O(n)</td>

                </tr>
            </tbody>
        </Table>
    );
}

export default TimeComplexityTable;


// <div className="col-3">
// <h6>Access</h6>
// <p>o(1)</p>
// </div>
// <div className="col-3">
// <h6>Search</h6>
// <p>o(n)</p>
// </div >
// <div className="col-3">
// <h6>Insertion</h6>
// <p>o(n)</p>
// </div>
// <div className="col-3">
// <h6>Deletion</h6>
// <p>o(n)</p>
// </div> 
