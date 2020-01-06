import React, { Component } from 'react';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import style from './Layout.module.scss';

export default class Layout extends Component {
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
    return (
      <div className={style.Layout}>
        <MenuToggle
          isOpen={this.state.menu}
          onToggle={this.toggleMenuHandler}
        />
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
        />
        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
}
