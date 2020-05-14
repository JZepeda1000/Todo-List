import React, { Component } from 'react';

export default class Item extends Component {
    render() {

        const {title, handleDelete, handleEdit} = this.props;

        return (
            <li>
                <h6>{title}</h6>
                <div>
                    <span onClick={handleEdit}>
                        <i className="fas fa-pen" />
                    </span>
                    <span onClick={handleDelete}>
                        <i className="fas fa-trash" />
                    </span>
                </div>
            </li>
        )
    }
};