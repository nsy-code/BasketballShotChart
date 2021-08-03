import React, { useEffect } from "react";
import * as d3 from "d3";
import { hexbin } from "d3-hexbin";
import { court, shots } from "d3-shotchart";
import PropTypes from "prop-types";
import "./ShotChart.css";

window.d3_hexbin = { hexbin: hexbin };

const ShotChart = (props) => {
    const { data, minCount, isDisplayTips } = props;
    useEffect(() => {
        const final_shots = data.map((shot) => ({
            x: shot.x, 
            y: shot.y,
            shot_made_flag: shot.shot_made_flag,
        }));

        const courtSelection = d3.select("#shot-chart");
        const chart_court = court().width(500);
        const chart_shots = shots()
            .shotRenderThreshold(minCount)
            .displayToolTips(isDisplayTips)
            .displayType("hexbin");
        courtSelection.call(chart_court);
        courtSelection.datum(final_shots).call(chart_shots);
    }, [data, minCount, isDisplayTips]);

    return <div id="shot-chart" />;
};

ShotChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            locX: PropTypes.number,
            locY: PropTypes.number,
            shotMadeFlag: PropTypes.bool,
        })
    ),
    minCount: PropTypes.number,
    isDisplayTips: PropTypes.bool,
};

export default ShotChart;
