const Link = ({ href, children, className }) => {
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
    const navEvent = new PopStateEvent('routeChange');
    window.dispatchEvent(navEvent);
  }
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

//TODO: implement active
export default Link;