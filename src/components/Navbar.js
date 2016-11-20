import React, { Component } from 'react';
import {Link} from 'react-scroll';

require('../styles/main.scss');

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.getMenus = this.getMenus.bind(this);
  }
  getMenus() {
    if (this.props.title)
      return;
    var items = JSON.parse(this.props.menus).map( (item, index) => {
      return (
        <li key={index}>
          <Link
            activeClass='active'
            to={item}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}>
            {item}
          </Link>
        </li>
      );
    });
    return (
      <div className='collapse navbar-collapse'>
        <ul className='nav navbar-nav navbar-right'>
          <li className='hidden'>
            <a href='#page-top'></a>
          </li>
          {items}
        </ul>
      </div>
    );
  }
  render() {
    return (
      <nav
        className='navbar navbar-default navbar-fixed-top navbar-custom'
        data-spy="affix" data-offset-top="200">
        <div className='container'>
          <div className='navbar-header page-scroll'>
            <button
              type='button'
              className='navbar-toggle'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'>
              <span className='sr-only'>Toggle navigation</span>
                Menu <i className='fa fa-bars'></i>
            </button>
            <Link
              activeClass='active'
              className='clickable navbar-brand'
              to='page-top'
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}>
              HARRYI3T.GITHUB.IO
            </Link>
            <a href='https://github.com/harryi3t/harryi3t.github.io'>
              <span className='clickable fa fa-github fa-3x'></span>
            </a>
          </div>
          <div className='navbar-title nav navbar-nav navbar-right'>
            <h3>{this.props.title}</h3>
          </div>
          {this.getMenus()}
        </div>
      </nav>
    );
  }
}
