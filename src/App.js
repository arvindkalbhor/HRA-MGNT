/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Auth/Login';
import Register from "./components/Auth/Register"
import Forms from "./components/Forms/Forms"
// import ImageGrid from './components/ImageGrid';
// import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import configureStore from './store';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/forms" component={Forms} />
          <Route path="/register" component={Register} />
        </div>
      </Router>

    </Provider>
  );
}


// class Hra extends Component {
//   render() {
//     return (
//       <Fragment>
//         Hello...
//         {/* <Header />
//         <ImageGrid /> */}
//       </Fragment>
//     )
//   }
// }

export default App;
