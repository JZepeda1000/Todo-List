import React, { Component } from 'react';
import uuid from 'uuid';
import Input from './components/Input';
import List from './components/List';

export default class App extends Component {

  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
    console.log("Handle change");
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    }, () => console.log(this.state) );
    console.log("Handle submit");
  }

  clearList = () => {
    this.setState({
      items: []
    });
    console.log("Clear list");
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(
      item => item.id !== id
    );
    this.setState({
      items: filteredItems
    });
    console.log(`Handle delete ${id}`);
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(
      item => item.id !== id
    );
    const selectedItem = this.state.items.find(
      item => item.id === id
    );
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
    console.log(`Handle edit ${id}`);
    //console.log(selectedItem);
  }

  render() {
    //console.log(this.state);
    return (
      <div>
        <div>
          <h3>Input</h3>
          <Input
            item = {this.state.item}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            editItem = {this.state.editItem} 
          />
          <List 
            items = {this.state.items}
            clearList = {this.clearList}
            handleDelete = {this.handleDelete}
            handleEdit = {this.handleEdit}
          />
        </div>
      </div>
    )
  }
};
