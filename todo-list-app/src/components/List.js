import React, { Component } from 'react';
import Item from './Item';

export default class List extends Component {
    render() {

        const {items, clearList, handleDelete, handleEdit} = this.props;

        return (
            <ul>
                <h3>List</h3>
                {items.map(item =>
                    {return (
                        <Item 
                            key={item.id}
                            title={item.title}
                            handleDelete={ ()=>handleDelete(item.id) }
                            handleEdit={ ()=>handleEdit(item.id) }
                        />
                    )}
                )}
                <button type="button" onClick={clearList}>
                     Clear List
                </button>
            </ul>
        )
    }
};