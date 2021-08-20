import React, { useState, useEffect } from "react";
import { useLocalStorage } from "react-use";
import ShotChart from "../charts/ShotChart";

const Dashboard = () => {
    const [value] = useLocalStorage("shot-data");
    const [shotThreshold, setShotThreshold] = useState(1);
    const [totalData, setTotalData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const [titleList, setTitleList] = useState([]);

    /**
     * useEffect Functions
     */

    useEffect(() => {
        let tempTotalData = [];

        value.forEach((element) => {
            tempTotalData = tempTotalData.concat(element.data);
        });
        setTotalData(tempTotalData);
        setDisplayData(tempTotalData);
    }, [value]);

    useEffect(() => {
        let tempTitleList = [];

        value.forEach((element) => {
            tempTitleList.push({ name: element.name });
        });
        setTitleList(tempTitleList);
    }, [value]);

    /**
     * Handler Functions
     */

    const onSelectChangeHandler = (e) => {
        if (e.target.value === "all") {
            setDisplayData(totalData);
            return;
        }
        const currentData = value.filter(
            (element) => element.name === e.target.value
        );
        setDisplayData(currentData[0].data);
    };

    const onSliderChangeHandler = (e) => {
        setShotThreshold(parseInt(e.target.value));
    };

    return (
        <div className="container">
            <div>
                <select
                    className="form-select"
                    aria-label="Select ShoMap"
                    defaultValue="all"
                    onChange={onSelectChangeHandler}
                >
                    <option value="all">Total</option>
                    {titleList.map((item, i) => (
                        <option key={i} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className=" d-flex justify-content-center mt-2 ">
                <div style={{ width: "550px" }}>
                    <div className="data-view">
                        <ShotChart
                            data={displayData}
                            minCount={shotThreshold}
                            isDisplayTips={true}
                        />
                        <div className="d-flex">
                            <span>Shot Threshold: {shotThreshold} </span>
                            <input
                                className="ms-2"
                                type="range"
                                onChange={onSliderChangeHandler}
                                value={shotThreshold}
                                min="1"
                                max="10"
                            />
                        </div>
                    </div>

                    {/* <div className="d-flex justify-content-end">
                        <Button color="secondary" onClick={() => setOpen(true)}>
                            Clear All Data
                        </Button>
                        <a
                            href={`data:text/json;charset=utf-8,${encodeURIComponent(
                                JSON.stringify(value)
                            )}`}
                            download="shotData.json"
                        >
                            {`Download Json`}
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
