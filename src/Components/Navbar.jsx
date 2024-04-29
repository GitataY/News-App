const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <span className="badge text-bg-secondary fs-2" href="#">
                    NewsTrail
                </span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">
                            Entertainment
                        </a>
                        <a className="nav-link" href="#">
                            Sports
                        </a>
                        <a className="nav-link" href="#">
                            Technology
                        </a>
                        <a className="nav-link" href="#">
                            Health
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
