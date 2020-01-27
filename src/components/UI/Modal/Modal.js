import React, { Component } from 'react';
import M from 'materialize-css';
import Button from '../Button/Button';
import styles from './Modal.module.scss';


export default class Modal extends Component {

  componentDidMount() {
    const modal = document.getElementById(this.props.id);
    M.Modal.init(modal);
  }

  render() {

    return (
      <div id={this.props.id} className={'modal ' + styles.Modal}>
        <div className="modal-content">
          <h6>{ this.props.title }</h6>
          { this.props.children }
        </div>
        <div className="modal-footer">
          {
            !!this.props.confirm ?
              <Button flat onClick={this.props.onConfirm}>
                { this.props.confirm }
              </Button>
            : null
          }
          {
            !!this.props.cancel ?
              <Button flat onClick={this.props.onCancel}>
                { this.props.cancel }
              </Button>
              : null
          }
        </div>
      </div>
    )
  }

}
