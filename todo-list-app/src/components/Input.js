import React, { Component } from 'react';

export default class Input extends Component {
    render() {

        const { item, handleChange, handleSubmit, editItem } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <i className="fas fa-book" />
                    </div>
                    <input 
                        type="text"
                        value={item}
                        onChange={handleChange}
                    />
                    <button 
                        type="submit"
                        disabled={
                            item ? false : true
                        }
                    >
                        {editItem ? "Edit Item" : "Add Item"}
                    </button>
                </form>
            </div>
        )
    }
};