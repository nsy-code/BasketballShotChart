import React, { useState } from "react";
import { useLocalStorage } from "react-use";
import Button from "@material-ui/core/Button";

const DataEditPage = () => {
    const [value, setValue] = useLocalStorage("shot-data");
    const [data, setData] = useState(JSON.stringify(value));

    const onClickHandler = () => {
        setValue(JSON.parse(data))
    };

    const onChangeHandler = (e) => {
        setData(e.target.value);
    };

    return (
        <div >
            <div className="d-flex justify-content-center mt-2">
                <div style={{ width: "550px", height: "590px" }}>
                    <div>
                        <textarea
                            id="w3review"
                            name="w3review"
                            value={data}
                            onChange={onChangeHandler}
                            style={{ width: "100%", height: "500px", resize: "none" }}
                        />
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button
                            className="me-2"
                            color="primary"
                            onClick={onClickHandler}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataEditPage;
