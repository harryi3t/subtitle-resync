import React, { Component } from 'react';

export default class Delay extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.state = {
      delayCounter: 0
    };
  }
  onClick() {
    this.props.onClick(this.state.delayCounter);
  }
  updateValue(event) {
    this.setState({delayCounter: event.target.value});
  }
  render() {
    return (
      <div>
        <form className='form-inline'>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail2'>Delay&nbsp;</label>
              <div className='input-group'>
                <input
                  step='1000'
                  type='number'
                  value={this.state.delayCounter}
                  onChange={this.updateValue}
                  className='form-control'
                  placeholder='+10' />
                <div className='input-group-addon'>ms</div>
              </div>
          </div>
          <br /><br />
        </form>
        <div className='row'>
          <div className='col-xs-5'>
            <button
              onClick={this.onClick}
              className='btn btn-primary'>Re-Sync</button>
          </div>
          <div className='col-xs-5'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
