import React from "react";
import {
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DataEditPage from "./components/DataEditPage";
import ShotMapListPage from "./components/ShotMapListPage";
import InputDataPage from "./components/InputDataPage/InputDataPage";
import NavBar from "./components/NavBar";

function App(props) {
    return (
        <div className="mt-4">
            <Switch>
                <Route
                    path="/list"
                    render={(props) => <ShotMapListPage {...props} />}
                />
                                <Route
                    path="/input"
                    render={(props) => <InputDataPage {...props} />}
                />
                <Route path="/data" render={(props) => <DataEditPage {...props} />} />
                <Route path="/" render={(props) => <Dashboard {...props} />} />
            </Switch>
            <NavBar {...props} />
        </div>
    );
}

export default withRouter(App);
