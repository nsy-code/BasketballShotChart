import React, { useState } from "react";
import { useLocalStorage } from "react-use";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Court from "../charts/Court";

const InputDataPage = () => {
    const [value, setValue] = useLocalStorage("shot-data");
    const [spots, setSpots] = useState([]);

    const onClickHandler = () => {
        if (value) {
            setValue(spots.concat(value));
        }else{
            setValue(spots);
        }
    };

    const onClickBackHandler = () => {
        const newSpots = [...spots];
        newSpots.pop();
        if (newSpots) {
            setSpots(newSpots);
        }
    };

    const onClickLoadHandler = () => {
        setSpots(value);
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-2">
                <Card style={{ width: "550px" }}>
                    <CardContent>
                        <div className="d-flex justify-content-end">
                            <Button
                                className="me-2"
                                onClick={() => onClickBackHandler()}
                            >
                                Back
                            </Button>
                            <Button
                                color="secondary"
                                onClick={() => setSpots([])}
                            >
                                Clear Input
                            </Button>
                        </div>
                        <Court spots={spots} setSpots={setSpots} />
                    </CardContent>
                    <CardActions className="d-flex justify-content-end">
                        <Button
                            className="me-2"
                            onClick={() => onClickLoadHandler()}
                        >
                            Load
                        </Button>
                        <Button
                            className="me-2"
                            color="primary"
                            onClick={onClickHandler}
                        >
                            Save
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default InputDataPage;
