import React from 'react'
import PropTypes from "prop-types"
// import Sorting from './dropdowns/Sorting';
import { ButtonGroup } from 'reactstrap';
import DataStructures from './dropdowns/DataStructures';
import Charts from './dropdowns/Charts';

const Header = (props) => {
    return (
        <div>
            <header className="App-header position-fixed col-12">
                <h1>{props.title}</h1>
                <ButtonGroup size="sm">
                    <Charts />
                    <DataStructures />
                </ButtonGroup>
            </header>
            <div className="placeholder col-12"></div>
        </div>
    )
}

export default Header

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

