import React from 'react'
// import PropTypes from 'prop-types'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';


function DataStructures() {
    return (
        <UncontrolledButtonDropdown>
            <DropdownToggle caret size="sm">
                Data
          </DropdownToggle>
            <DropdownMenu>
                <DropdownItem href="#ds-array">Array</DropdownItem>
            </DropdownMenu>
        </UncontrolledButtonDropdown>
    );
}

// Sorting.propTypes = {

// }

export default DataStructures