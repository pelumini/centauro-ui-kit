import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'components';
import {
  HomePage,
  ButtonPage,
  IconPage,
  AccordionPage,
  CheckboxPage,
  ModalPage,
  SpinnerPage,
  ScrollbarPage,
  DocumentViewerPage,
  OverlayPage,
  HamburgerPage,
  TextAreaPage,
  RatingPage,
  SidebarPage,
  TabsPage,
  AvatarPage,
  PaginationPage,
  TablePage,
  DropDownPage,
  SkeletonPage,
  PortalPage,
  TooltipPage,
  CopyPage,
  BreadcrumbsPage,
  ErrorPage,
  FormPage,
  SelectPage,
  UploaderPage,
  IconButtonPage,
} from 'pages';
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
          <Route exact path={ROUTES.AVATAR} component={AvatarPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.BUTTON} component={ButtonPage} />
          <Route exact path={ROUTES.ICON} component={IconPage} />
          <Route exact path={ROUTES.ACCORDION} component={AccordionPage} />
          <Route exact path={ROUTES.CHECKBOX} component={CheckboxPage} />
          <Route exact path={ROUTES.MODAL} component={ModalPage} />
          <Route exact path={ROUTES.SPINNER} component={SpinnerPage} />
          <Route exact path={ROUTES.SCROLLBAR} component={ScrollbarPage} />
          <Route exact path={ROUTES.OVERLAY} component={OverlayPage} />
          <Route exact path={ROUTES.HAMBURGER} component={HamburgerPage} />
          <Route
            exact
            path={ROUTES.DOCUMENT_VIEWER}
            component={DocumentViewerPage}
          />
          <Route exact path={ROUTES.SIDEBAR} component={SidebarPage} />
          <Route exact path={ROUTES.TABS} component={TabsPage} />
          <Route exact path={ROUTES.RATING} component={RatingPage} />
          <Route exact path={ROUTES.TEXTAREA} component={TextAreaPage} />
          <Route exact path={ROUTES.TABLE} component={TablePage} />
          <Route exact path={ROUTES.SKELETON} component={SkeletonPage} />
          <Route exact path={ROUTES.DROPDOWN} component={DropDownPage} />
          <Route exact path={ROUTES.PAGINATION} component={PaginationPage} />
          <Route exact path={ROUTES.TOOLTIP} component={TooltipPage} />
          <Route exact path={ROUTES.PORTAL} component={PortalPage} />
          <Route exact path={ROUTES.COPY} component={CopyPage} />
          <Route exact path={ROUTES.BREADCRUMBS} component={BreadcrumbsPage} />
          <Route exact path={ROUTES.FORM} component={FormPage} />
          <Route exact path={ROUTES.ERROR} component={ErrorPage} />
          <Route exact path={ROUTES.SELECT} component={SelectPage} />
          <Route exact path={ROUTES.UPLOADER} component={UploaderPage} />
          <Route exact path={ROUTES.ICON_BUTTON} component={IconButtonPage} />
        </Switch>
      </Layout>
    </div>
  );
};
