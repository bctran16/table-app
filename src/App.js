import React, {Component} from 'react';
import './App.scss';
import MyTable from './MyTable/MyTable' 
import dateGen from './generator/randomDateGen'
import amountGen from './generator/amountGenerators'
import strGen from './generator/stringGenerator';

class App extends Component {
  state = {
    data: [{
      date: dateGen(),
      description: strGen(),
      amount: amountGen()
    }]
};
  addElemHandler = () => {
    let entry = { date: dateGen(), description: strGen(), amount: amountGen()};
    this.setState({data: [...this.state.data, entry]});
  }
  render() {
    return (
      <div className="App">
        <h1>Table</h1>
        <MyTable data={this.state.data} click={this.addElemHandler}/>
      </div>
    );
  }
}

export default App;
