const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
              <img src="https://www.svgrepo.com/show/69341/apple-logo.svg" alt="React" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {/* <a className="nav-link active" aria-current="page" href="https://www.nationalfitting.com/">Home</a> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Header;
  
