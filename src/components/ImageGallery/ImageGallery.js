import {Component} from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Rejected from '../Rejected/Rejected';
import Loader from '../Loader/Loader';
import IdleMessage from '../IdleMessage/IdleMessage';
import ApiService from '../../API';
import PropTypes from 'prop-types';

const galleryApi = new ApiService();

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
  };

  handleQuery() {
      galleryApi
        .fetchCards()
        .then(result => {
          if (result.hits.length > 0) {
            this.updateImagesArray(result.hits);
            galleryApi.page += 1;
            this.scrollView();
            return;
          }
          throw new Error(`Sorry, but no result for ${galleryApi.query}`);
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
  }
  updateImagesArray = update => {
    if (galleryApi.page === 1) {
      this.setState({ images: update, status: 'resolved' });
      return;
    }
    this.setState(prev => {
      return { images: [...prev.images, ...update], status: 'resolved' };
    });
  };
  scrollView = () => {
    if (this.state.images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
    return;
  };

  componentDidUpdate(prevProps, prevState) {
    const previousQuery = prevProps.query;
    const newQuery = this.props.query;
    if (previousQuery !== newQuery) {
      this.setState({ status: 'pending' });
      galleryApi.reset();
      galleryApi.request = newQuery;
      this.handleQuery(newQuery);
    }
  }
  loadMore=()=> {
    this.setState({ status: 'pending' });
    this.handleQuery('cat');
  }
  render() {
    const { images, error, status } = this.state;
    if (status === 'idle') {
      return <IdleMessage/>;
    }
    if (status === 'pending') {
      return <Loader/>;
    }
    if (status === 'rejected') {
     return <Rejected message={error.message}/>
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className={s.ImageGallery}>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                route={image.webformatURL}
                bigPicture={image.largeImageURL}
                description={image.tags}
              />
            ))}
          </ul>
          <Button handleClick={this.loadMore} />
        </>
      );
    }
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string,
};

