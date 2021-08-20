import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

const Item = (props) => {
    const { id, label, handleDelete } = props;
    return (
        <div className="d-flex justify-content-between align-items-center">
            <Link to={`/input?id=${id}`}>{label}</Link>
            <IconButton
                aria-label="delete"
                color="secondary"
                onClick={()=>handleDelete(id)}
            >
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

Item.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    handleDelete: PropTypes.func,
};

export default Item;
