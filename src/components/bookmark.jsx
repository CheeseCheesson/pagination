import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onToggle, _id }) => {
    if (status) {
        return (
            <td onClick={() => onToggle(_id)}>
                <i
                    className="bi bi-circle-fill"
                    style={{ color: "#0d6efd" }}
                ></i>
            </td>
        );
    }
    return (
        <td onClick={() => onToggle(_id)}>
            <i className="bi bi-circle"></i>
        </td>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
    _id: PropTypes.string
};
export default BookMark;
