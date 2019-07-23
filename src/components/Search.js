import React, { Component } from 'react'

export default class Search extends Component {
   constructor(props) {
      super(props);
      this.state = {
         strSeach: ''
      };
      this.handleSearch = this.handleSearch.bind(this);
      this.handleClear = this.handleClear.bind(this);
   }

   handleTextChangeOnSearch(event) {
      // let name = event.target.name;
      // let value = event.target.value;
      this.setState({
         strSeach: event.target.value
      });
      // console.table(name, value);
   }
   handleSearch() {
      // console.log(this.state.strSeach);
      this.props.onClickGo(this.state.strSeach);
   }
   handleClear() {
      this.setState({
         strSeach: ''
      });
      this.props.onClickGo('');
   }
   render() {
      return (

         <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
               <input value={this.state.strSeach} name="textSearch" onChange={(event) => this.handleTextChangeOnSearch(event)} type="text" className="form-control" placeholder="Search for..." />
               <span className="input-group-btn">
                  <button onClick={this.handleSearch} className="btn btn-info" type="button">Go!</button>
                  <button onClick={this.handleClear} className="btn btn-success" type="button">Clear</button>
               </span>
            </div>
         </div>

      )
   }
}
