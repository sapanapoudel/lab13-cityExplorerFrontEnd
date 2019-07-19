import React from 'react';


class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }
  
  render(){
    return (
      <React.Fragment>

        <input id="api-key" onChange={e => this.setState({ data: e.target.value })}></input>

        <button onClick={() => this.props.onClick(this.state.data)}>{this.props.formName}</button>
      </React.Fragment>
    )
  }
}

export default Form;