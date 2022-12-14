import React, { Component } from "react";

class Counter extends Component {
componentDidUpdate(prevProps,prevState){

   console.log('prevProps',prevProps);
   console.log('prevState',prevState);
   if(prevProps.counter.value !== this.props.counter.value){
    /////// ajax call and get a new data from the server
   }
}

  render() { 
    console.log('Counter Get Render');
    return (

       <div className="row"> 
        <div className="col-2">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>

        <div className="col">
        <button
          onClick={()=>this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2 "
        >
          +
        </button>
        <button
          onClick={()=>this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={this.props.counter.value === 0 ? 'disabled':''}
        >
          -
        </button>
        <button onClick={()=> this.props.onDelete(this.props.counter.id)} 
          className="btn btn-danger btn-sm ">Delete
        </button>
        </div>

         </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
