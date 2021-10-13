import { Component } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRootRef = document.querySelector('#modal-root');


export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.modalButtonShutDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.modalButtonShutDown);
  }

  modalButtonShutDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
    };
    modalClickShutDown=e => {
        if (e.target!==e.currentTarget) { return }
        this.props.onClose();
    }

    render() {

      return createPortal(
          <div className={s.Overlay} onClick={ this.modalClickShutDown}>
          <div className={s.Modal}>{this.props.children}</div>
        </div>, modalRootRef
      );
    }
}

Modal.propTypes = {
  onClose: PropTypes.func,
};


