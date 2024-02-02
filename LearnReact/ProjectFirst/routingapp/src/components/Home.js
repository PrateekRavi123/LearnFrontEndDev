import React from "react";
import "../App.css";
import axios from "axios";


class ProductForm extends React.Component {

  
  state = {
    id: "",
    
  };
  
  handlesubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://fakestoreapi.com/products/${this.state.id}`
    );
    this.props.onSubmit(res.data);
    this.setState({ id: "" });
    console.log(this.state.id);
  };
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <input
          type="text"
          value={this.state.id}
          onChange={(e) => {
            this.setState({ id: e.target.value });
          }}
          placeholder=""
          required
        />
        <button>Search</button>
      </form>
    );
  }
}

class ProductCard extends React.Component {
  // state = {navigate : useNavigate(),}
  // navigatehandle =  () => {
  //   this.state.navigate('/contact');
  // }
  render() {
    const props = this.props;
    return (
      <div>
        {
        props.productlist.map((p) => (
          <div >
            <img src={p.image} alt="" />
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            {/* <button onClick={this.navigatehandle}> Add to Cart</button> */}
          </div>
        ))}
      </div>
    );
  }
}

class Home extends React.Component {

  state = {
    productlist: [],
  };

  addproduct = (productdata) => {
    this.setState({
      productlist: [productdata],
    });
  };
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const productlist = res.data;
      this.setState({ productlist });
    });
  }
  render() {
    return (
      <div>
        <h1>Welcome to the Store</h1>
        <p>Explore your products </p>
        <ProductForm onSubmit={this.addproduct} />
        <ProductCard productlist={this.state.productlist} />
      </div>
    );
  }
}

export default Home;
