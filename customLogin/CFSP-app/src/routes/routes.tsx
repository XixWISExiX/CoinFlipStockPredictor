import { lazy, Suspense } from "react"


/* 
  This is to create a route, which is just a navigation tool.
  takes in a path (folder path to page) and the element (actual page itself)
  this is so we can easily add pages if need be
*/
type Route = {
  path: string;
  element: React.ReactNode;
};

/*
  function to help lazy load any page we want.
  parameters: takes in a promise which takes in any react
  component. 

  note: promises are used for asynch programming. MEANING
  its used to make multiple things at once.

  imagine like this:
  i say im gonna finish this shitty ass login page.
  and then you say will finish authentication

  and we both need to get it done, and only one person can do one task at a time

  a promise is when i say "gimme some time, ill finish" (which i will)
  and then typescript moves on to your task now.

  then based on whether or not i finish, you can do whatever you want.
*/
function lazyLoad(
  promise: Promise<{
    default: React.ComponentType<any>;
  }>
) {

  const LazyComponent = lazy(() => promise);

  return (
    // note: fallback is just a placeholder until the shit is finished loading
    <Suspense fallback={<>...</>}>
      <LazyComponent />
    </Suspense>
  );
}

export default [
  {
    path: "/",
    element: lazyLoad(import("../pages/Login"))
  },
  {
    path: "/",
    element: lazyLoad(import("../pages/Home")),
  },
] as Route[]