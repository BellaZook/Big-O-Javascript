import React from 'react';
import PropTypes from 'prop-types';
import BigO_n_Chart from '../../svg/bigOChart';
import './bigOChart.css';
import OCard from '../../card';
import ArrowRight from '../../icon/ArrowRight';
import Shuffle from '../../icon/Shuffle';
// To Do: switch chart side (right to left) on big screens

const TitleNSquare = () => <span>O(n<sup>2</sup>)</span>;
const TwoToTheN = () => <span>O(2<sup>n</sup>)</span>;

const BigONChart = props => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="sticky-OChart">
                            <h3 className="text-center">Big O(n) Chart</h3>
                            <BigO_n_Chart />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h3 className="text-center">Approximate Minimum # Of Operations</h3>
                        <OCard
                            title="O(1)"
                            operation1="1"
                            operation2="1"
                        >
                            Always one
                        </OCard>
                        <OCard
                            title="O(log n)"
                            operation1="3.3"
                            operation2="4.3"
                        >
                            log<sub>2</sub>(10) = x <Shuffle /> 2<sup>x</sup> = 10
                        <br />
                            log<sub>2</sub> 10 = 3.2
                        </OCard>
                        <OCard
                            title="O(n)"
                            operation1="10"
                            operation2="20"
                        >
                            One to One
                        </OCard>
                        <OCard
                            title="O(n log n)"
                            operation1="33.2"
                            operation2="86.4"
                        >
                            10 log<sub>2</sub> (10) = x <Shuffle /> 10 (2<sup>x</sup> = 10)
                            <br />
                            10(log<sub>2</sub> 10) = 10 * 3.2 = 33.2
                        </OCard>
                        <OCard
                            title={<TitleNSquare />}
                            operation1="100"
                            operation2="400"
                        >
                            10<sup>2</sup> = 100
                        </OCard>
                        <OCard
                            title={<TwoToTheN />}
                            operation1="1024"
                            operation2="1048576"
                        >
                            2<sup>10</sup> = 1024
                        </OCard>
                        <OCard
                            title="O(n!)"
                            operation1="362880020"
                            operation2="2.432902e+18"
                        >
                            n!=1*2*3*4*...*n
                        </OCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

// BigONChart.propTypes = {

// }

export default BigONChart;

