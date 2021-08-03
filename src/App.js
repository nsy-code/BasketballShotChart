import React from "react";
import {
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import InputDataPage from "./components/InputDataPage";
import DataEditPage from "./components/DataEditPage";
import NavBar from "./components/NavBar";

function App(props) {
    return (
        <div>
            <Switch>
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
