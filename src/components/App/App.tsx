import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'components';
import { HomePage, ButtonPage, IconPage } from 'pages';
import { ROUTES } from 'routes';
import './App.scss';

export const App: React.FC = () => {
  const handleButtonClick = (event: React.MouseEvent) => {
    console.log(event);
  };

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.BUTTON} component={ButtonPage} />
          <Route exact path={ROUTES.ICON} component={IconPage} />
        </Switch>
      </Layout>
    </div>
  );
};
