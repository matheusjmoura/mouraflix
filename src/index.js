import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/Register/Video';
import CadastroCategoria from './pages/Register/Category';

const notFound404 = () => <div>Página 404 - Not Found</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={notFound404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
