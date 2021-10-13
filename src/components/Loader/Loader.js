import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class App extends Component {
  render() {
    return (
      <Loader
        type="Watch"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={1500} //1.5 secs
      />
    );
  }
}
