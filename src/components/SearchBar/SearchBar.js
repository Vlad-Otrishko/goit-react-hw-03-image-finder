import React, { Component } from 'react';
import { toast } from 'react-toastify';
import s from './SearchBar.module.css';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
     return toast.error('Cannot search for empty request. Please, dial in something');
    }
    this.props.onSubmit(this.state.query);
    // this.reset();
  };
  reset = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm }>
          <button type="submit" className={s['SearchForm-button']} >
            <span className={s['SearchForm-button-label']}>Search</span>
    </button>

    <input id="home"
            className={s['SearchForm-input']}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
    />
  </form>
</header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
