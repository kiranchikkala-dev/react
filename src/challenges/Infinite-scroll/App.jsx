import React from 'react';

class ClassCompo extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      count: 0,
    };
  }
  static getDerivedStateFromProps(prop, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    console.log('render');
    return (
      <div>
        {console.log('return')}

        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default ClassCompo;
