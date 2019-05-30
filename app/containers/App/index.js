/**
 *
 * App
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';
import NewsPage from 'containers/NewsPage';
import ProfilePage from 'containers/ProfilePage';
import NotFoundPage from 'containers/NotFoundPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import '../../global-styles.css';

const AppWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  const login = window.localStorage.getItem('rr_login');
  const password = window.localStorage.getItem('rr_password');
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Login-Articles"
        defaultTitle="Login-Articles"
      >
        <meta name="description" content="Login-Articles" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/loging" component={LoginPage} />
        <Route path="/news" component={NewsPage} />
        <Route path='/profile' render={() => ( login !== 'Admin' && password !== '12345' ? 
        <Redirect to="/loging" /> : <ProfilePage /> )} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
