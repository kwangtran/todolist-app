import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import tasks from './mocks/task'
import { filter, includes, orderBy as funcOrderBy, remove, reject } from 'lodash';
const uuidv4 = require('uuid/v4');
export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         items: [],
         isShowForm: false,
         strSearch: '',
         orderBy: 'level',
         orderDir: 'asc',
         itemSelected: null
      }

      this.handleToggle = this.handleToggle.bind(this);
      this.closeForm = this.closeForm.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleSort = this.handleSort.bind(this);
   }
   handleToggle() {
      this.setState({
         isShowForm: !this.state.isShowForm,
         itemSelected: null
      });
   }
   closeForm() {
      this.setState({
         isShowForm: false
      });
   }
   handleSearch(value) {
      this.setState({
         strSearch: value
      });
   }
   handleSort(orderBy, orderDir) {
      this.setState({
         orderBy: orderBy,
         orderDir: orderDir
      });
      console.log(orderBy, orderDir, 'ahihihihi')
   }
   handleAdd = (item) => {
      let { items } = this.state;
      let id = null;
      if (item.id !== '') { //Edit
         items = reject(items, { id: item.id })
         id = item.id;
      } else { //add
         id = uuidv4()
      }
      items.push({
         id: id,
         name: item.name,
         level: +item.level
      });
      this.setState({
         items: items
      });
      localStorage.setItem("tasks", JSON.stringify(items));
   }
   handleDelete(id) {
      // console.log('App idItemDelete = ', id);
      let items = this.state.items;
      remove(items, (item) => {
         return item.id === id
      });

      this.setState({
         items: items
      });
      localStorage.setItem("tasks", JSON.stringify(items));
      // console.log('items = ' + items);
   }
   componentWillMount() {
      let items = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
         items: items
      })
   }
   handleEdit = (item) => {

      console.log('item = ' + item)
      this.setState({
         isShowForm: true,
         itemSelected: item
      })
   }
   render() {
      // console.log('str = ' + this.state.strSearch);
      let elmForm = null;
      let itemOrigins = (this.state.items !== null) ? [...this.state.items] : [];
      let items = [];
      let { orderBy, orderDir, isShowForm, strSearch, itemSelected } = this.state;
      // console.log(orderBy + " - " + orderDir);
      items = filter(itemOrigins, (item) => {
         return includes(item.name.toLowerCase(), strSearch.toLowerCase());
      });
      items = funcOrderBy(items, [orderBy], [orderDir]);
      // var evens = _.remove(array, function(n) {
      //    return n % 2 == 0;
      //  });
      // items = remove(items, (item) =>
      //    item.id == this.state.idItemDelete
      // )
      if (isShowForm) {
         elmForm = <Form
            itemSelected={itemSelected}
            onClickCancel={this.closeForm}
            onClickAdd={(item) => this.handleAdd(item)}
         />
      }



      return (
         <div>
            <Title />
            <Control
               orderBy={orderBy}
               orderDir={orderDir}
               onClickSort={this.handleSort}
               onClickSearchGo={this.handleSearch}
               onClickAdd={this.handleToggle}
               isShowForm={isShowForm} />
            {elmForm}
            <List items={items} onClickDelete={(id) => this.handleDelete(id)} onClickEdit={(item) => this.handleEdit(item)} />
         </div>
      );
   };
}