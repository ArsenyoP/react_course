const Header = () => {
    return <header className="header">
        <div className="container header-inner">
          <h1 className="logo">Mini blog</h1>
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Post</a>
            <a href="#">About</a>
            <a href="#">Submit</a>
          </nav>
          <button>Dark Mode</button>
        </div>
      </header>
}

export default Header