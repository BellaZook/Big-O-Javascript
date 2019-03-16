
import React from 'react';
import './index.css';
import PropTypes from 'prop-types'

const BigO_n_Chart = (props) => {
    return (
        <svg viewBox="0 0 170 160" className="" xmlns="http://www.w3.org/2000/svg">
            <g strokeWidth=".718">
                <rect strokeLinejoin="round" strokeLinecap="round" strokeWidth=".182" stroke="#000" fill="#e6e6e6" width="137.583" height="137.583" x="27.099" y="4.935" rx=".095" ry=".095" />
                <path strokeWidth=".19" stroke="#000" fill="none" d="M27.1 137.227h137.582" />
                <text strokeWidth=".19" fontSize="5" fontWeight="400" x="127.097" y="134.723">
                    <tspan x="127.097" y="134.723">O(1)</tspan>
                </text>
                <text strokeWidth=".19" fontSize="5" fontWeight="400" x="-7.487" y="66.534" transform="rotate(-90 9.224 65.227)">
                    <tspan x="-7.487" y="66.534"># of Operations</tspan>
                </text>
                <text strokeWidth=".19" fontSize="5" fontWeight="400" x="66.06" y="154.706">
                    <tspan x="66.06" y="154.706"># of Items in Collection</tspan>
                </text>
                <text strokeWidth=".19" fontSize="5" fontWeight="400" x="127.619" y="119.68">
                    <tspan x="127.619" y="119.68">O(log n)</tspan>
                </text>
                <path strokeWidth=".19" stroke="#000" fill="none" d="M27.1 137.227c44.38-12.233 137.582-15.875 137.582-15.875" />
                <text strokeWidth=".19" fontSize="5" fontWeight="400" x="20.85" y="148.535">
                    <tspan x="20.85" y="148.535">0</tspan>
                </text>
                <text strokeWidth=".19" fontSize="5" fontWeight="400" x="158.207" y="148.535">
                    <tspan x="158.207" y="148.535">n</tspan>
                </text>
                <text strokeWidth=".19" fontSize="5" fontWeight="400" x="20.094" y="10.952">
                    <tspan x="20.094" y="10.952">n</tspan>
                </text>
                <path strokeWidth=".19" stroke="#000" fill="none" d="M27.1 137.227l137.582-37.042" />
                <text strokeWidth=".19" fontSize="5" fontWeight="400" x="127.101" y="105.815">
                    <tspan x="127.101" y="105.815">O(n)</tspan>
                </text>
                <path strokeWidth=".19" stroke="#000" fill="none" d="M27.1 137.227C90.6 121.352 164.681 52.56 164.681 52.56" />
                <text strokeWidth=".19" fontSize="5" fontWeight="400" x="127.564" y="56.558">
                    <tspan x="127.564" y="56.558">O(n log n)</tspan>
                </text>
                <path strokeWidth=".19" stroke="#000" fill="none" d="M27.1 137.227c55.124-30.72 89.957-132.292 89.957-132.292" />
                <g strokeWidth=".19" fontSize="5" fontWeight="400">
                    <text y="18.477" x="96.491">
                        <tspan x="96.491" y="18.477">O(n )</tspan>
                    </text>
                    <text y="15.264" x="104.806">
                        <tspan y="15.264" x="103.224">2</tspan>
                    </text>
                </g>
                <path strokeWidth=".19" stroke="#000" fill="none" d="M27.1 137.227C50.125 91.22 72.94 50.653 74.723 4.935" />
                <g strokeWidth=".19" fontSize="5" fontWeight="400">
                    <text y="13.143" x="57.297">
                        <tspan x="57.297" y="13.143">O(2 )</tspan>
                    </text>
                    <text y="9.323" x="66.119">
                        <tspan x="64.224" y="9.323">n</tspan>
                    </text>
                </g>
                <path strokeWidth=".19" stroke="#000" fill="none" d="M27.1 137.227c13.465-45.99 21.315-90.32 21.166-132.292" />
                <text strokeWidth=".19" fontSize="5" fontWeight="400" x="31.435" y="12.654">
                    <tspan x="31.435" y="12.654">O(n! )</tspan>
                </text>
            </g>
        </svg>
    )
}

BigO_n_Chart.propTypes = {

}

export default BigO_n_Chart
