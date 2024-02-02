import { Component } from "react";
import axios from "axios";
export class PostUser extends Component{
    constructor(){
        super();
        this.state = {
            userId: null
        };
    }
    // async componentDidMount(){
    //     const temp = {title: 'Hrello'};
    //     const response = await axios.post('https://reqres.in/api/articles', temp);
    //     this.setState({userId:response.data.id});
    // }

    componentDidMount(){
        const temp = {title: 'Hrello'};
        axios.post('https://reqres.in/api/articles', temp).then(response => this.setState({userId:response.data.id}));
    }
    render(){
        const {userId}  = this.state;
        return(
            <div>
                Id: {userId}
            </div>
            
        )
    }
}