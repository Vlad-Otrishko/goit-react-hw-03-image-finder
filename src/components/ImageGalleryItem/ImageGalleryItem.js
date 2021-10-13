import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };


  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <>
      <li className={s.ImageGalleryItem}>
        <img
          src={this.props.route}
          alt={this.props.description}
          data-source={this.props.bigPicture}
          className={s['ImageGalleryItem-image']}
          onClick={this.toggleModal}
        />
      </li>
        {showModal && (<Modal onClose={this.toggleModal}>
          <Loader/>
          <img src={this.props.bigPicture} alt={this.props.description} />
        </Modal>)}
        </>

    );
  }
}
ImageGalleryItem.propTypes = {
  route: PropTypes.string,
  description: PropTypes.string,
  bigPicture: PropTypes.string,
};