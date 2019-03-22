import React from 'react'
// import PropTypes from 'prop-types'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';


function Sorting() {
    return (
        <UncontrolledButtonDropdown>
            <DropdownToggle caret size="sm">
                Sorting
          </DropdownToggle>
            <DropdownMenu>
                <DropdownItem href="#ds-array">Another Action</DropdownItem>
            </DropdownMenu>
        </UncontrolledButtonDropdown>
    );
}

// Sorting.propTypes = {

// }

export default Sorting
