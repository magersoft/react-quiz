import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import style from './Drawer.module.scss';

const links = [
  { to: '/', label: 'Список', exact: true },
  { to: '/auth', label: 'Авторизация', exact: false },
  { to: '/quiz-creator', label: 'Создать тест', exact: false }
];

export default class Drawer extends Component {

  renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={style.active}
            onClick={this.props.onClose}
          >
            { link.label }
          </NavLink>
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
