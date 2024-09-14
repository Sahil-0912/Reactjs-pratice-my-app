function Header(){
    return(
        <>
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <img src="images/logo.png.webp" className="ms-5 text-light" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto  fs-5  ">
                    <li className="nav-item ">
                        <a className="nav-link active text-light" aria-current="page" href="charity.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="about.html">About us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="causes.html">Causes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="Gallery.html">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </>
    )
}

export default Header