
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import s from './App.module.css';

class App extends React.Component {
  state = {
    query: '',
    showModal: false
  };
  

  formSubmitHandler = query => {
    this.setState({query});
  }
    

  
render(){
  return (
    <div className={s.container}>
      <SearchBar onSubmit={this.formSubmitHandler} />
      <ToastContainer autoClose={3000} position="top-right" />
     <ImageGallery query={this.state.query} /> 
    </div>
  );
  }
 };
export default App;
