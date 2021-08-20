import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import HistoryIcon from "@material-ui/icons/History";
import TextField from "@material-ui/core/TextField";
import Court from "../charts/Court";
import { useLocalStorage } from "react-use";

const InputDataPage = (props) => {
    const [dataList, setDataList] = useLocalStorage("shot-data");
    const [spots, setSpots] = useState([]);
    const [title, setTitle] = useState(new Date().toLocaleDateString());
    const [id, setId] = useState(Date.now().toString()
    );

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        if (query.get("id")) {
            let tempSpot = dataList.filter(
                (element) => element.id === query.get("id")
            );
            setSpots(tempSpot[0].data);
            setTitle(tempSpot[0].name);
            setId(tempSpot[0].id);
        }
    }, [props.location.search, dataList]);

    const onClickHandler = () => {
        if (dataList) {
            let temp = dataList.filter((el) => el.id !== id);
            setDataList(temp.concat([{ name: title, id: id, data: spots }]));
        } else {
            setDataList({ name: title, id: id, data: spots });
        }
    };

    const onClickBackHandler = () => {
        const newSpots = [...spots];
        newSpots.pop();
        if (newSpots) {
            setSpots(newSpots);
        }
    };

    return (
        <div className="container" >
            <div
                className="row"
                style={{ marginLeft: "20px", marginRight: "20px" }}
            >
                <TextField
                    label="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    style={{ width: "100%" }}
                />
            </div>

            <div className="row justify-content-center mt-2">
                <div style={{ width: "550px" }}>
                    <Court spots={spots} setSpots={setSpots} />
                    <div className="mt-4 d-flex justify-content-between">
                        <Button
                            className="me-2"
                            color="secondary"
                            onClick={() => setSpots([])}
                        >
                            Clear Input
                        </Button>
                        <Button onClick={() => onClickBackHandler()}>
                            <HistoryIcon />
                            Back
                        </Button>
                        <Button color="primary" onClick={onClickHandler}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputDataPage;
