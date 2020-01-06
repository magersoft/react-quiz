import React, { Component } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import style from './Drawer.module.scss';

const links = [
  1, 2, 3
];

export default class Drawer extends Component {

  renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href="#">Link { link }</a>
        </li>
      )
    })
  };

  render() {
    const classes = [style.Drawer];

    if (!this.props.isOpen) {
      classes.push(style.close);
    }

    return (
      <>
      <nav className={classes.join(' ')}>
        <ul>
          { this.renderLinks() }
        </ul>
      </nav>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
      </>
    )
  }
}
