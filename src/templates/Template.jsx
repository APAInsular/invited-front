import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../styles/WeddingWebsite.css'; // Asegúrate de tener un archivo CSS para los estilos personalizados
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import OwlCarousel from 'react-owl-carousel';

const WeddingWebsite = () => {
    return (
        <div>
            {/* Navbar Start */}
            <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
                <button className="navbar-brand d-block d-lg-none" style={{ background: 'none', border: 'none' }}>
                    <h1 className="font-secondary text-white mb-n2">Jack <span className="text-primary">&</span> Rose</h1>
                </button>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <button className="nav-item nav-link active" style={{ background: 'none', border: 'none' }}>Home</button>
                        <button className="nav-item nav-link" style={{ background: 'none', border: 'none' }}>About</button>
                        <button className="nav-item nav-link" style={{ background: 'none', border: 'none' }}>Story</button>
                        <button className="nav-item nav-link" style={{ background: 'none', border: 'none' }}>Gallery</button>
                    </div>
                    <button className="navbar-brand mx-5 d-none d-lg-block" style={{ background: 'none', border: 'none' }}>
                        <h1 className="font-secondary text-white mb-n2">Jack <span className="text-primary">&</span> Rose</h1>
                    </button>
                    <div className="navbar-nav mr-auto py-0">
                        <button className="nav-item nav-link" style={{ background: 'none', border: 'none' }}>Family</button>
                        <button className="nav-item nav-link" style={{ background: 'none', border: 'none' }}>Event</button>
                        <button className="nav-item nav-link" style={{ background: 'none', border: 'none' }}>RSVP</button>
                        <button className="nav-item nav-link" style={{ background: 'none', border: 'none' }}>Contact</button>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}

            {/* Carousel Start */}
            {/* <div className="container-fluid p-0 mb-5 pb-5" id="home">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item position-relative active" style={{ height: '100vh', minHeight: '400px' }}>
                            <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{ objectFit: 'cover' }} alt="Carousel 1" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">Jack & Rose</h1>
                                    <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                                        <h3 className="text-uppercase font-weight-normal text-white m-0" style={{ letterSpacing: '2px' }}>We're getting married</h3>
                                    </div>
                                    <button type="button" className="btn-play mx-auto" data-toggle="modal"
                                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative" style={{ height: '100vh', minHeight: '400px' }}>
                            <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{ objectFit: 'cover' }} alt="Carousel 2" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">Jack & Rose</h1>
                                    <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                                        <h3 className="text-uppercase font-weight-normal text-white m-0" style={{ letterSpacing: '2px' }}>We're getting married</h3>
                                    </div>
                                    <button type="button" className="btn-play mx-auto" data-toggle="modal"
                                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev justify-content-start" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-primary px-0" style={{ width: '68px', height: '68px' }}>
                            <span className="carousel-control-prev-icon mt-3"></span>
                        </div>
                    </button>
                    <button className="carousel-control-next justify-content-end" href="#header-carousel" data-slide="next">
                        <div className="btn btn-primary px-0" style={{ width: '68px', height: '68px' }}>
                            <span className="carousel-control-next-icon mt-3"></span>
                        </div>
                    </button>
                </div>
            </div> */}
            {/* Carousel End */}

            {/* Video Modal Start */}
            <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            {/* 16:9 aspect ratio */}
                            <div className="embed-responsive embed-responsive-16by9">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video Modal End */}

            {/* About Start */}
            <div className="container-fluid py-5" id="about">
                <div className="container py-5">
                    <div className="section-title position-relative text-center">
                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: '3px' }}>About</h6>
                        <h1 className="font-secondary display-4">Groom & Bride</h1>
                        <i className="far fa-heart text-dark"></i>
                    </div>
                    <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
                        <div className="col-md-6 p-0 text-center text-md-right">
                            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                                <h3 className="mb-3">The Groom</h3>
                                <p>Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                                <h3 className="font-secondary font-weight-normal text-muted mb-3"><i className="fa fa-male text-primary pr-3"></i>Jack</h3>
                                <div className="position-relative">
                                    <button className="btn btn-outline-primary btn-square mr-1" style={{ background: 'none', border: 'none' }}><i className="fab fa-twitter"></i></button>
                                    <button className="btn btn-outline-primary btn-square mr-1" style={{ background: 'none', border: 'none' }}><i className="fab fa-facebook-f"></i></button>
                                    <button className="btn btn-outline-primary btn-square mr-1" style={{ background: 'none', border: 'none' }}><i className="fab fa-linkedin-in"></i></button>
                                    <button className="btn btn-outline-primary btn-square" style={{ background: 'none', border: 'none' }}><i className="fab fa-instagram"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0" style={{ minHeight: '400px' }}>
                            <img className="position-absolute w-100 h-100" src="" style={{ objectFit: 'cover' }} alt="About 1" />
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-md-6 p-0" style={{ minHeight: '400px' }}>
                            <img className="position-absolute w-100 h-100" src="" style={{ objectFit: 'cover' }} alt="About 2" />
                        </div>
                        <div className="col-md-6 p-0 text-center text-md-left">
                            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                                <h3 className="mb-3">The Bride</h3>
                                <p>Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                                <h3 className="font-secondary font-weight-normal text-muted mb-3"><i className="fa fa-female text-primary pr-3"></i>Rose</h3>
                                <div className="position-relative">
                                    <button className="btn btn-outline-primary btn-square mr-1" style={{ background: 'none', border: 'none' }}><i className="fab fa-instagram"></i></button>
                                    <button className="btn btn-outline-primary btn-square mr-1" style={{ background: 'none', border: 'none' }}><i className="fab fa-facebook-f"></i></button>
                                    <button className="btn btn-outline-primary btn-square mr-1" style={{ background: 'none', border: 'none' }}><i className="fab fa-linkedin-in"></i></button>
                                    <button className="btn btn-outline-primary btn-square" style={{ background: 'none', border: 'none' }}><i className="fab fa-instagram"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            {/* Story Start */}
            <div className="container-fluid py-5" id="story">
                <div className="container pt-5 pb-3">
                    <div className="section-title position-relative text-center">
                        <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: '3px' }}>Story</h6>
                        <h1 className="font-secondary display-4">Our Love Story</h1>
                        <i className="far fa-heart text-dark"></i>
                    </div>
                    <div className="container timeline position-relative p-0">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-right">
                                <img className="img-fluid mr-md-3" src="" alt="Story 1" />
                            </div>
                            <div className="col-md-6 text-center text-md-left">
                                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                                    <h4 className="mb-2">First Meet</h4>
                                    <p className="text-uppercase mb-2">01 Jan 2050</p>
                                    <p className="m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-center text-md-right">
                                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                                    <h4 className="mb-2">First Date</h4>
                                    <p className="text-uppercase mb-2">01 Jan 2050</p>
                                    <p className="m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-md-left">
                                <img className="img-fluid ml-md-3" src="" alt="Story 2" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-center text-md-right">
                                <img className="img-fluid mr-md-3" src="" alt="Story 3" />
                            </div>
                            <div className="col-md-6 text-center text-md-left">
                                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                                    <h4 className="mb-2">Proposal</h4>
                                    <p className="text-uppercase mb-2">01 Jan 2050</p>
                                    <p className="m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-center text-md-right">
                                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                                    <h4 className="mb-2">Enagagement</h4>
                                    <p className="text-uppercase mb-2">01 Jan 2050</p>
                                    <p className="m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-md-left">
                                <img className="img-fluid ml-md-3" src="" alt="Story 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Story End */}

            {/* Gallery Start */}
            <div className="container-fluid bg-gallery" id="gallery" style={{ padding: '120px 0', margin: '90px 0' }}>
                <div className="section-title position-relative text-center" style={{ marginBottom: '120px' }}>
                    <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: '3px' }}>Gallery</h6>
                    <h1 className="font-secondary display-4 text-white">Our Photo Gallery</h1>
                    <i className="far fa-heart text-white"></i>
                </div>
                {/* <OwlCarousel className="owl-carousel gallery-carousel">
                    <div className="gallery-item">
                        <img className="img-fluid w-100" src="img/gallery-1.jpg" alt="Gallery 1" />
                        <button href="img/gallery-1.jpg" data-lightbox="gallery" style={{ background: 'none', border: 'none' }}>
                            <i className="fa fa-2x fa-plus text-white"></i>
                        </button>
                    </div>
                    <div className="gallery-item">
                        <img className="img-fluid w-100" src="img/gallery-2.jpg" alt="Gallery 2" />
                        <button href="img/gallery-2.jpg" data-lightbox="gallery" style={{ background: 'none', border: 'none' }}>
                            <i className="fa fa-2x fa-plus text-white"></i>
                        </button>
                    </div>
                    <div className="gallery-item">
                        <img className="img-fluid w-100" src="img/gallery-3.jpg" alt="Gallery 3" />
                        <button href="img/gallery-3.jpg" data-lightbox="gallery" style={{ background: 'none', border: 'none' }}>
                            <i className="fa fa-2x fa-plus text-white"></i>
                        </button>
                    </div>
                    <div className="gallery-item">
                        <img className="img-fluid w-100" src="img/gallery-3.jpg" alt="Gallery 3" />
                        <button href="img/gallery-3.jpg" data-lightbox="gallery" style={{ background: 'none', border: 'none' }}>
                            <i className="fa fa-2x fa-plus text-white"></i>
                        </button>
                    </div>
                </OwlCarousel> */}
            </div>
        </div>
    );
}

export default WeddingWebsite;