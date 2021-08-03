import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import { court, shots } from "d3-shotchart";
import PropTypes from "prop-types";

const convertNumber = (x, y, left, right, top, bottom) => {
    let newX = (x - left) / ((right - left) / 50);
    let newY = 47 - (y - top) / ((bottom - top) / 47);
    return { newX, newY };
};

const Court = (props) => {
    const { spots, setSpots } = props;
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isMake, setIsMake] = useState(1);
    const divRef = useRef();

    useEffect(() => {
        const courtSelection = d3.select("#court-chart");
        const chart_court = court().width(500);
        const chart_shots = shots()
            .shotRenderThreshold(1)
            .displayToolTips(false)
            .displayType("scatter");
        courtSelection.call(chart_court);
        courtSelection.datum(spots).call(chart_shots);
    }, [spots]);

    const _onMouseMove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };

    const _onClick = (e) => {
        const { top, bottom, left, right } =
            divRef.current.getBoundingClientRect();
        const { newX, newY } = convertNumber(x, y, left, right, top, bottom);

        setSpots([
            ...spots,
            { x: parseInt(newX), y: parseInt(newY), shot_made_flag: isMake },
        ]);
    };

    return (
        <div>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onClick={() => {
                        setIsMake(isMake ? 0 : 1);
                    }}
                />
                <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                >
                    {isMake ? "Made" : "Miss"}
                </label>
            </div>
            <div
                ref={divRef}
                style={{ minHeight: "200px", minWidth: "200px" }}
                id="court-chart"
                onClick={(e) => _onClick(e)}
                onMouseMove={_onMouseMove}
            ></div>
        </div>
    );
};

Court.propTypes = {};

export default Court;
