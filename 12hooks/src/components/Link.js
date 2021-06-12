const Link = ({ href, children, className }) => {
  const onClick = (e) => {
    if (e.ctrlKey || e.metaKey) {
      // if link was clicked with cmd (macos) or ctrl key let the default behavious happen
      return;
    }
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