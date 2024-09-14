function Footer(){
    return(
        <>
         <footer className="my-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer-txt">
                        <img src="images/foot-logo.png" className="w-75 my-5" />
                        <p className="text-secondary">Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris temp
                            us vestib ulum mauris.Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem
                            ipsum
                            dolo.</p>
                        <i className="fa-brands fa-pinterest"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h5 className="text-light my-5">Useful Links</h5>
                    <ul className="text-light">
                        <li>Privacy Polticy</li>
                        <li>Become a Volunteer</li>
                        <li>Donate</li>
                        <li>Testimonials</li>
                        <li>Causes</li>
                        <li>Portfolio</li>

                    </ul>
                </div>
                <div className="col-lg-3">
                    <h5 className="text-light my-5">Latest News</h5>
                    <div className="news">
                        <p className="my-5 text-light">A new cause to help <br /> MArch 12, 2018</p>
                        <p className="my-5 text-light">We love to help people <br /> MArch 12, 2018</p>
                        <p className="my-5 text-light">The new ideas for helping <br /> MArch 12, 2018</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h5 className="text-light my-5">Contact</h5>
                    <div className="footer-icon">
                        <span className="text-light my-5"><i className="fa-solid fa-phone"></i> +45 677 8993000 223</span>
                        <h6 className="text-light my-3"><i className="fa-solid fa-envelope"></i>office@template.com</h6>
                        <p className="text-light my-3"><i className="fa-solid fa-location-dot"></i> Main Str. no 45-46, b3,
                            56832, <br /> Los Angeles, CA</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Your Email"
                                aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text bg-danger" id="basic-addon2">Send</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer