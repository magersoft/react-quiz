import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import style from './Drawer.module.scss';
import { connect } from 'react-redux';

class Drawer extends Component {

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

    return (
      <>
      <nav className={classes.join(' ')}>
        <ul>
          { this.renderLinks(this.props.links) }
        </ul>
        { this.props.isAuthenticated ? <div className={style.login}>Вы авторизованы: { this.props.login }</div> : null }
      </nav>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.auth.login
  }
}

export default connect(mapStateToProps)(Drawer);
