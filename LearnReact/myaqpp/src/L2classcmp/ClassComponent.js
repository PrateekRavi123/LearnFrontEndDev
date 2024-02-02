//This code will not run


import React from 'react';
import ReactDOM from 'react-dom/client';
class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: 'Header ',
            content: 'Content'
        }
    }
    render(){
        return(
            <div>
                <h4>{this.state.header}</h4>
                <h4>{this.state.content}</h4>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ClassComponent />);






class ClassComponent2 extends React.Component{
    
    render(){
        return(
            <div>
                <h4>{this.props.header}</h4>
                <h4>{this.props.content}</h4>
            </div>
        )
    }
}
ReactDOM.render(<ClassComponent2 header="header" content="content" />,document.getElementById('root'));



class ClassComponent3 extends React.Component{
    
    render(){
        return(
            <div>
                <h4>{this.props.header}</h4>
                <h4>{this.props.content}</h4>
            </div>
        )
    }
}

ClassComponent3.defaultProps = {
    header:"header",
    content:"content" 
}
ReactDOM.render(<ClassComponent3 />,document.getElementById('root'));
