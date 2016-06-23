import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newItem: '',
      itemArr: []
    }
    this.onInputBoxChange = this.onInputBoxChange.bind(this);
    this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this);
  }
  //change this.state.newItem by 'listening' to the input box
  onInputBoxChange(evt){
    var itemText = evt.target.value;
    this.setState({newItem: itemText});
    console.log(this.state.newItem);
  }
  //click the submit button and change this.state.itemArr
  onSubmitButtonClick(evt){
    evt.preventDefault();
    var item = this.state.newItem;
    var oldArray = this.state.itemArr;
    var updatedArr = oldArray.concat(item);
    //when the button is clicked reset the value of this.state.newItem
    //and set the state of itemArr to updatedArr.
    this.setState({
      newItem: '',
      itemArr: updatedArr
    });
    console.log(oldArray, updatedArr, 'from onSubmitButtonClick');
  }
  render(){
    return(
      <div className='container'>
        <h1 className='title'>{this.props.appName}</h1>
        <InputForm newItem={this.state.newItem}
          onItemChange={this.onInputBoxChange}
          onSubmit={this.onSubmitButtonClick} />
        <List items={this.state.itemArr} />
      </div>
    );
  }
}

Container.defaultProps = { appName: 'My List' }

class InputForm extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <form className='form' onSubmit={this.props.onSubmit}>
          <input type='text'
            value={this.props.newItem}
            onChange={this.props.onItemChange} />
          <input type='submit'
            value='Add to list' />
        </form>
      </div>
    );
  }
}

class List extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    var items = this.props.items.map(function(item, index){
      return <li key={index}>{item}</li>;
    });
    return(
      <div className='list__container'>
        <ul className='list'>
          {items}
        </ul>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Container />, document.getElementById('app'));
});
