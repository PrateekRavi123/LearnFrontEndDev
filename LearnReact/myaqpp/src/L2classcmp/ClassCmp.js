import React from "react";
import '../App.css';
// export default function ClassCmp() {
//     const [val,setval] = useState('');
//     let arr = ["newItem","newItem1","newItem2"];
//     const handleClick = () => {setval(val+arr)};
    
//     return (
//       <div>
//         <p style={{backgroundColor:'cyan'}}>Class Component</p>
//         <button onClick={handleClick}>Set State</button>
//         <p>State Array: {val}</p>
//       </div>
//     )
//   }





  class ClassCmp extends React.Component{
    constructor(){
        super();
        this.state = {
            data : []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler(){
        var item = "he;l;p"
        var arr = this.state.data.slice();
        arr.push(item);
        this.setState({data:arr});
    };
    render(){
        return(
            <div className="App">
                <button onClick={this.setStateHandler}>Set State</button>
                <h4>State Array: {this.state.data}</h4>
            </div>
        );
    }
  }

export default ClassCmp;