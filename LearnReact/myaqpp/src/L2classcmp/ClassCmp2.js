import React from 'react';
import '../App.css';
   class ClassCmp2 extends React.Component{
        constructor(){
            super();
            this.state = {
                data : 0
            }
            this.setStateHandler = this.setStateHandler.bind(this);
        };
        setStateHandler(){
            this.setState({data : this.state.data + 1});
        };
        render(){
            return(
                <div className="App">
                    <h4>Count: {this.state.data}</h4>
                    <button onClick={this.setStateHandler}>Click Me</button>
                    
                </div>
            );
        }
      }

      export default ClassCmp2;