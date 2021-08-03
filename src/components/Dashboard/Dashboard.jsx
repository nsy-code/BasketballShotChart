import React from "react";
import { useLocalStorage } from "react-use";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ShotChart from "../charts/ShotChart";
import Dialog from "../Dialog";
import "./Dashboard.css";

// TODO: adjust minCount value
// TODO: upload json file

const Dashboard = () => {
    const [value, setValue] = useLocalStorage("shot-data");
    const [open, setOpen] = React.useState(false);

    const onConfirmHandler = () => {
        setOpen(false);
        setValue([]);
    };

    return (
        <div className="dashboard-container mt-2">
            <Card style={{ width: "550px" }}>
                <CardContent>
                    <div className="data-view">
                        <ShotChart
                            data={value}
                            minCount={2}
                            isDisplayTips={true}
                        />
                    </div>
                </CardContent>
                <CardActions className="d-flex justify-content-end">
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
                </CardActions>
            </Card>
            <Dialog
                isOpen={open}
                handleClose={() => setOpen(false)}
                handleConfirm={onConfirmHandler}
            />
        </div>
    );
};

export default Dashboard;
