const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
              <img src="data:image/png;base64,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" alt="React" />
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
  
