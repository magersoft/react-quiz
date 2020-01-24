import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import style from './Layout.module.scss';

class Layout extends Component {
  state = {
    menu: false
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  };

  render() {
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
      <div className={style.Layout}>
        <MenuToggle
          isOpen={this.state.menu}
          onToggle={this.toggleMenuHandler}
        />
        <Drawer
          links={links}
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
        />
        <main>
          <Navbar
            links={links}
          />
          { this.props.children }
        </main>
        <div className={style.poweredBy} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

export default connect(mapStateToProps)(Layout)
