import React from 'react'
// import PropTypes from 'prop-types'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';


function Charts() {
    return (
        <UncontrolledButtonDropdown>
            <DropdownToggle caret size="sm">
                Charts
          </DropdownToggle>
            <DropdownMenu>
                <DropdownItem href="#big-o-chart">Big-O Chart</DropdownItem>
            </DropdownMenu>
        </UncontrolledButtonDropdown>
    );
}

// Sorting.propTypes = {

// }

export default Charts