import React, { useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { useLocalStorage } from "react-use";
import Dashboard from "./components/Dashboard";
import DataEditPage from "./components/DataEditPage";
import ShotMapListPage from "./components/ShotMapListPage";
import InputDataPage from "./components/InputDataPage/InputDataPage";
import NavBar from "./components/NavBar";

const currentVersion = "1.0";

function App(props) {
    const [data, setData] = useLocalStorage("shot-data");
    const [version, setVersion] = useLocalStorage("shot-data-version");
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!data) {
            setData([]);
        }
    }, [data, setData]);

    useEffect(() => {
        if (version) {
            if (version !== currentVersion) {
                setVersion(currentVersion);
                setData([]);
            }
        } else {
            setVersion(currentVersion);
            setData([]);
        }
        setIsReady(true)
    }, [version, setVersion, setData]);

    return (
        <div className="mt-4">
            {isReady ? (
                <Switch>
                    <Route
                        path="/list"
                        render={(props) => <ShotMapListPage {...props} />}
                    />
                    <Route
                        path="/input"
                        render={(props) => <InputDataPage {...props} />}
                    />
                    <Route
                        path="/data"
                        render={(props) => <DataEditPage {...props} />}
                    />
                    <Route
                        path="/"
                        render={(props) => <Dashboard {...props} />}
                    />
                </Switch>
            ) : null}
            <NavBar {...props} />
        </div>
    );
}

export default withRouter(App);
