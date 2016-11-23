import React, { Component } from 'react';
import _ from 'underscore';
import {Link} from 'react-scroll';

require('../styles/main.scss');

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.getMenus = this.getMenus.bind(this);
  }
  getMenus() {
    if (_.isEmpty(this.props.menus))
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
              <div className='Aligner'>
                <a href='/' className='icon clickable home'>
                  <span className='fa-stack fa-2x' aria-hidden='true'>
                    <i className='fa fa-circle-thin fa-stack-2x'></i>
                    <i className='fa fa-home fa-stack-1x'></i>
                  </span>
                </a>
                <a href='https://github.com/harryi3t/subtitle-resync'
                  className='icon'>
                  <span className='clickable fa fa-github fa-4x'></span>
                </a>
                <Link to='page-top' className='clickable navbar-brand'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}>
                  {this.props.title}
                </Link>
              </div>
          </div>
          {this.getMenus()}
        </div>
      </nav>
    );
  }
}
