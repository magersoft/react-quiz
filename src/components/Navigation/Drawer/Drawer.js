import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import style from './Drawer.module.scss';

export default class Drawer extends Component {

  renderLinks = (links) => {
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

    const links = [
      { to: '/', label: 'Список', exact: true }
    ];

    if (this.props.isAuthenticated) {
      links.push(
        { to: '/quiz-creator', label: 'Создать тест', exact: false },
        { to: '/logout', label: 'Выйти', exact: false }
      )
    } else {
      links.push(
        { to: '/auth', label: 'Авторизация', exact: false }
      )
    }

    return (
      <>
      <nav className={classes.join(' ')}>
        <ul>
          { this.renderLinks(links) }
        </ul>
      </nav>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
      </>
    )
  }
}
