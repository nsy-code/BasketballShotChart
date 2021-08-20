import React from "react";
import { useLocalStorage } from "react-use";
import { useHistory } from "react-router-dom";
import Item from "./Item";

const ShotMapListPage = () => {
    const history = useHistory();
    const [dataList, setDataList] = useLocalStorage("shot-data", []);

    const onClickNewBtnHandler = () => {
        history.push("/input");
    };

    const onClickDeleteHandler = (id) => {
        var r = window.confirm("Do you want to delete this item?");
        if (r === true) {
            let newDataList = dataList.filter((element) => element.id !== id);
            setDataList(newDataList);
        }
    };

    return (
        <div className="container">
            <div>
                <div className="mb-2">
                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                        onClick={onClickNewBtnHandler}
                    >
                        New
                    </button>
                </div>
                <div>
                    <ul className="list-group" style={{ paddingRight: "0px" }}>
                        {dataList.map((data, i) => {
                            return (
                                <li key={i} className="list-group-item">
                                    <Item
                                        id={data.id}
                                        label={data.name}
                                        handleDelete={onClickDeleteHandler}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ShotMapListPage;
