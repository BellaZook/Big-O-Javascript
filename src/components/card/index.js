import React from 'react';
import {
    Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import ArrowRight from '../icon/ArrowRight';

const MainCard = (props) => {
    return (
        <div>
            <Card className="margin-sm">
                <CardBody>
                    <CardTitle tag="h4">{props.title}</CardTitle>
                    <CardText>
                        {props.children}
                    </CardText>
                    <Card>
                        <CardBody className="bg-oCard">
                            <CardText>
                                10 items <ArrowRight /> # of Operations = {props.operation1}
                                <br />
                                20 items <ArrowRight /> # of Operations = {props.operation2}
                            </CardText>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
        </div>
    );
};

export default MainCard;