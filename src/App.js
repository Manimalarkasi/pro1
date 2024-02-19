
import PageCall from './Website/PageCall';
import React, { Component } from 'react';

 class App extends Component {
  constructor(props){
    super(props);
    this.state = {apiresponce:""};
  }

  // callAPI(){
    // fetch('http://localhost:4000/testapi')
  //   fetch('http://localhost:3001/demo')
  //   .then(res => res.text())
  //   .then(res => this.setState({apiresponce:res}))
  // }
  // componentWilMount(){
  //   this.callAPI();
  // }
  render() {
    return (
         <div className="App">
     <PageCall />
     {/* <p>{this.state.apiresponce}</p> */}
    </div>
    )
  }
}
export default App;
