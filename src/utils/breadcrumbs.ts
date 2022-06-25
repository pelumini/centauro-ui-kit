import { IBreadcrumbsLocationState } from 'ui-kit/Breadcrumbs';

/*
 * state -- history state of app
 * route -- url of a new breadcrumb  */
export const isContainRoute = (
  state: IBreadcrumbsLocationState[],
  route: string
): boolean => state.some(({ url }) => url === route);

/*
 * state -- history state of app (array of bread crumbs)
 * url -- url of current breadcrumb (URL the page contained in the state that is being navigated to) */
export const removeRemainingCrumbs = (
  state: IBreadcrumbsLocationState[],
  url: string
): IBreadcrumbsLocationState[] => {
  const index = state.findIndex(({ url: route }) => route === url);
  return state.slice(0, index);
};
