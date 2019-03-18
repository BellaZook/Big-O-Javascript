import React from 'react'
// import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const SubjectCard = props => {
    return (
        <Card className="margin-bottom-sm">
            <CardBody>
                <CardTitle tag="h5">{props.title}</CardTitle>
                {props.children}
                <CardText>
                </CardText>
            </CardBody>
        </Card>
    )
}

// SubjectCard.propTypes = {

// }

export default SubjectCard
