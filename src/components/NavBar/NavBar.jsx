import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GestureIcon from "@material-ui/icons/Gesture";
import DescriptionIcon from "@material-ui/icons/Description";

const NavBar = (props) => {
    const { history } = props;
    const [value, setValue] = React.useState("");
    return (
        <BottomNavigation
            style={{ width: "100%", position: "fixed", bottom: 0 }}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                history.push(newValue);
            }}
            showLabels
        >
            <BottomNavigationAction
                value="/"
                label="Dashboard"
                icon={<DashboardIcon />}
            />
            <BottomNavigationAction
                value="/list"
                label="Input"
                icon={<GestureIcon />}
            />
            <BottomNavigationAction
                value="/data"
                label="Shot Data"
                icon={<DescriptionIcon />}
            />
        </BottomNavigation>
    );
};

export default NavBar;
