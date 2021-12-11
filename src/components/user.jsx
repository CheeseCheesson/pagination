import React from "react";
import { Qualitie } from "./qualitie";
import PropTypes from "prop-types";

export const User = ({
    name,
    qualities,
    profession,
    completedMeetings,
    rate
}) => {
    return (
        <>
            <td>{name}</td>
            <td>
                {qualities.map((quality) => (
                    <Qualitie key={quality._id} {...quality} />
                ))}
            </td>
            <td>
                <span key={profession._id}>{profession.name}</span>
            </td>
            <td>{completedMeetings}</td>
            <td>{rate} / 5</td>
        </>
    );
};
User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired
};
