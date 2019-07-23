import React, { Component } from 'react'
const uuidv4 = require('uuid/v4');
export default class Form extends Component {
   constructor(props) {
      super(props);
      this.state = {
         task_id: '',
         task_Name: '',
         task_Level: 0
      }


      this.handleCancel = this.handleCancel.bind(this);
      console.log(this.props.itemSelected);
      // this.handleLevelChange = this.handleLevelChange.bind(this);
   }
   componentWillMount() {
      let item = this.props.itemSelected;
      this.updateItem(item);
   }
   componentWillReceiveProps(nextProps) {
      let item = nextProps.itemSelected;
      this.updateItem(item);
   }
   updateItem(item) {
      if (item !== null) {
         this.setState({
            task_id: item.id,
            task_Name: item.name,
            task_Level: item.level,
         })
      }
   }
   handleCancel() {
      this.props.onClickCancel();
   }
   // handTextChange = (event) => {
   //    this.setState({
   //       taskName: event.target.value,
   //    })
   // }
   // handleAdd(event) {
   //    console.log('add');
   //    let taskName = this.state.taskName;
   //    let taskLevel = this.state.taskLevel;
   //    console.log('Taskname = ' + taskName);
   //    console.log('TaskLevel = ' + taskLevel);
   // }
   handleChange(event) {
      let target = event.target;
      let value = target.value;
      let name = target.name;
      this.setState({
         [name]: value
      });
   }
   handleSubmit(event) {
      var item = {
         id: this.state.task_id,
         name: this.state.task_Name,
         level: this.state.task_Level
      }
      this.props.onClickAdd(item);
      event.preventDefault();
   }
   // handleLevelChange(event) {
   //    this.setState({
   //       taskLevel: event.target.value
   //    })
   //    console.log(event.target.value);
   // }
   render() {
      return (
         <div>
            {/* FORM : START */}
            <div className="row">
               <div className="col-md-offset-7 col-md-5">
                  {/* <form action method="POST" className="form-inline"> */}
                  <form onSubmit={(event) => this.handleSubmit(event)} className="form-inline">
                     <div className="form-group">
                        <label className="sr-only">label</label>
                        <input value={this.state.task_Name} onChange={(event) => this.handleChange(event)} name="task_Name" type="text" className="form-control" placeholder="Task Name" />
                     </div>
                     <div className="form-group">
                        <label className="sr-only">label</label>
                        <select value={this.state.task_Level} name="task_Level" id="inputDs" className="form-control" required="required" onChange={(event) => this.handleChange(event)}>
                           <option value={0} >Small</option>
                           <option value={1} >Medium</option>
                           <option value={2} >High</option>
                        </select>
                     </div>
                     <button type="submit" className="btn btn-primary">Submit</button>
                     <button onClick={this.handleCancel} type="button" className="btn btn-default">Cancel</button>
                  </form>
               </div>
            </div>
            {/* FORM : END */}
         </div>
      )
   }
}
