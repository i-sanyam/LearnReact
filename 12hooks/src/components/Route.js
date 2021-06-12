import { useEffect, useState } from "react";
const Route = ({ href, children, setCurrentActive}) => {
  const [currentPath, setCurrentPath] = useState('/');
  useEffect(() => {
    const onRouteChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentActive(window.location.pathname);
    };
    window.addEventListener('routeChange', onRouteChange);
    return (() => {
      window.removeEventListener('routeChange', onRouteChange);
    });
  });
  return currentPath === href ? children : null;
}

export default Route;