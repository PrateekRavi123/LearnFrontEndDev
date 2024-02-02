import React from 'react';
import ReactDOM from "react-dom";
import '../App.css';
   class ClassCmp3 extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                data : ''
            };
            this.setStateHandler = this.setStateHandler.bind(this);
            this.clearHandler = this.clearHandler.bind(this);
        };
        setStateHandler = (e) => {
            this.setState({data : e.target.value});
        };
        clearHandler(){
            this.setState({data : ""});
            ReactDOM.findDOMNode(this.refs.myinput).focus();
        }
        render(){
            return(
                <div className="App">
                    <h4>Parent Component</h4>
                    <input type='text' value={this.state.data } onChange={this.setStateHandler} ref = "myinput"/>
                    <button onClick={this.clearHandler}>Clear</button>
                    <ChildClassCmp3 msg = {this.state.data}/>
                </div>
            );
        }
      }

      class ChildClassCmp3 extends React.Component{

        render(){
            return (
                <div>
                    <h4>Child Component : {this.props.msg}</h4>
                </div>
            )
        }
      }
      export default ClassCmp3;
