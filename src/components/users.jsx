import React, { useState } from "react";
import { User } from "./user";
import { SearchStatus } from "./searchStatus";
import BookMark from "./bookmark";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

export const Users = ({ users, onDelete, onToggle }) => {
    const count = users.length;
    const pageSize = 4;

    const [currentPage, setCurrentPage] = useState(1);

    const handelPageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);
    if (count > 0) {
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((item) => (
                            <tr key={item._id}>
                                <User {...item} />
                                <BookMark onToggle={onToggle} {...item} />
                                <td>
                                    <span
                                        className="btn btn-lg btn-danger"
                                        onClick={() => onDelete(item._id)}
                                    >
                                        delete
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    currentPage={currentPage}
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={handelPageChange}
                />
            </>
        );
    } else {
        return <SearchStatus />;
    }
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};
