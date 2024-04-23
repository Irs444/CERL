import React from 'react'
import "./Home.css"


const Home = () => {
    return (
        <div>
            {/*headers*/}
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner " style={{ height: "30rem" }}>
                    <div className="carousel-item active">
                        <img src="https://www.shutterstock.com/shutterstock/photos/2159023891/display_1500/stock-photo-happy-businesspeople-laughing-while-collaborating-on-a-new-project-in-an-office-group-of-diverse-2159023891.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://eatsleepworkrepeat.com/wp-content/uploads/2020/06/office.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.shrm.org/content/dam/en/shrm/topics-tools/news/benefits-compensation/office_space_kj3wup.jpeg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/*headers*/}

            <>
                {/*====== BLOG PART START ======*/}
                <section className="blog-area pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-8 col-sm-10">
                                <div className="single-blog blog-style-one">
                                    <div className="blog-image">
                                        <a href="javascript:void(0)">
                                            <img
                                                src="https://cdn.ayroui.com/1.0/images/blog/1.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                        <a href="javascript:void(0)" className="category">
                                            Technology
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <h5 className="blog-title">
                                            <a href="javascript:void(0)">
                                                Budget-Friendly Design Ideas to Transform Your Office
                                            </a>
                                        </h5>
                                        <span>
                                            <i className="lni lni-calendar" /> Mar 23, 2022
                                        </span>
                                        <span>
                                            <i className="lni lni-comments-alt" /> 24 Comment
                                        </span>
                                        <p className="text">
                                            Create a workspace your team will love with these money-saving
                                            interior Ui/Ux design tips Learn how People.
                                        </p>
                                        <a className="more" href="javascript:void(0)">
                                            READ MORE
                                        </a>
                                    </div>
                                </div>
                                {/* single blog */}
                            </div>
                            <div className="col-lg-4 col-md-8 col-sm-10">
                                <div className="single-blog blog-style-one">
                                    <div className="blog-image">
                                        <a href="javascript:void(0)">
                                            <img
                                                src="https://cdn.ayroui.com/1.0/images/blog/2.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                        <a href="javascript:void(0)" className="category">
                                            Lifestyle
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <h5 className="blog-title">
                                            <a href="javascript:void(0)">
                                                Budget-Friendly Design Ideas to Transform Your Office
                                            </a>
                                        </h5>
                                        <span>
                                            <i className="lni lni-calendar" /> Mar 23, 2022
                                        </span>
                                        <span>
                                            <i className="lni lni-comments-alt" /> 24 Comment
                                        </span>
                                        <p className="text">
                                            Create a workspace your team will love with these money-saving
                                            interior Ui/Ux design tips Learn how People.
                                        </p>
                                        <a className="more" href="javascript:void(0)">
                                            READ MORE
                                        </a>
                                    </div>
                                </div>
                                {/* single blog */}
                            </div>
                            <div className="col-lg-4 col-md-8 col-sm-10">
                                <div className="single-blog blog-style-one">
                                    <div className="blog-image">
                                        <a href="javascript:void(0)">
                                            <img
                                                src="https://cdn.ayroui.com/1.0/images/blog/3.jpg"
                                                alt="Blog"
                                            />
                                        </a>
                                        <a href="javascript:void(0)" className="category">
                                            Science
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <h5 className="blog-title">
                                            <a href="javascript:void(0)">
                                                Budget-Friendly Design Ideas to Transform Your Office
                                            </a>
                                        </h5>
                                        <span>
                                            <i className="lni lni-calendar" /> Mar 23, 2022
                                        </span>
                                        <span>
                                            <i className="lni lni-comments-alt" /> 24 Comment
                                        </span>
                                        <p className="text">
                                            Create a workspace your team will love with these money-saving
                                            interior Ui/Ux design tips Learn how People.
                                        </p>
                                        <a className="more" href="javascript:void(0)">
                                            READ MORE
                                        </a>
                                    </div>
                                </div>
                                {/* single blog */}
                            </div>
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </section>
                {/*====== BLOG PART ENDS ======*/}
            </>

            <>
                {/*====== Tiny Slider Css ======*/}
                <link
                    rel="stylesheet"
                    href="https://cdn.ayroui.com/1.0/css/tiny-slider.css"
                />
                {/*====== TESTIMONIAL ONE PART START ======*/}
                <section className="testimonial-one">
                    {/*======  Start Section Title Seven ======*/}
                    <div className="section-title-seven">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title align-center">
                                        <span> Testimonial </span>
                                        <h2 className="fw-bold">What People Says</h2>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* container */}
                    </div>
                    {/*====== End Section Title Seven ======*/}
                    <div className="container">
                        <div className="testimonial-one-wrapper">
                            <div className="row justify-content-center">
                                <div className="col-md-9 col-lg-12">
                                    <div className="row testimonial-one-active">
                                        <div className="col-lg-4">
                                            <div className="single-testimonial text-center">
                                                <div className="testimonial-image">
                                                    <img
                                                        src="https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-14474.jpg"
                                                        alt="Author"
                                                    />
                                                    <div className="quote-icon">
                                                        <i className="lni lni-quotation" />
                                                    </div>
                                                </div>
                                                <div className="testimonial-content">
                                                    <p className="text">
                                                        Stop wasting time and money designing and managing a
                                                        website that doesn’t get results. Happiness lorem
                                                        guaranteed!
                                                    </p>
                                                    <h6 className="author-name">Isabela Moreira</h6>
                                                    <span className="sub-title">CEO, GrayGrids</span>
                                                </div>
                                            </div>
                                            {/* single testimonial */}
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="single-testimonial text-center">
                                                <div className="testimonial-image">
                                                    <img
                                                        src="https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-14474.jpg"
                                                        alt="Author"
                                                    />
                                                    <div className="quote-icon">
                                                        <i className="lni lni-quotation" />
                                                    </div>
                                                </div>
                                                <div className="testimonial-content">
                                                    <p className="text">
                                                        Stop wasting time and money designing and managing a
                                                        website that doesn’t get results. Happiness lorem
                                                        guaranteed!
                                                    </p>
                                                    <h6 className="author-name">Fajar Siddiq</h6>
                                                    <span className="sub-title">Founder, MakerFlix</span>
                                                </div>
                                            </div>
                                            {/* single testimonial */}
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="single-testimonial text-center">
                                                <div className="testimonial-image">
                                                    <img
                                                        src="https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-14474.jpg"
                                                        alt="Author"
                                                    />
                                                    <div className="quote-icon">
                                                        <i className="lni lni-quotation" />
                                                    </div>
                                                </div>
                                                <div className="testimonial-content">
                                                    <p className="text">
                                                        Stop wasting time and money designing and managing a
                                                        website that doesn’t get results. Happiness lorem
                                                        guaranteed!
                                                    </p>
                                                    <h6 className="author-name">Fiona</h6>
                                                    <span className="sub-title">Lead Designer, UIdeck</span>
                                                </div>
                                            </div>
                                            {/* single testimonial */}
                                        </div>
                                        {/* <div className="col-lg-4">
                <div className="single-testimonial text-center">
                  <div className="testimonial-image">
                    <img
                      src="https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-14474.jpg"
                      alt="Author"
                    />
                    <div className="quote-icon">
                      <i className="lni lni-quotation" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p className="text">
                      Stop wasting time and money designing and managing a
                      website that doesn’t get results. Happiness lorem
                      guaranteed!
                    </p>
                    <h6 className="author-name">Elon Musk</h6>
                    <span className="sub-title">CEO, SpaceX</span>
                  </div>
                </div>
               
              </div> */}
                                    </div>
                                    {/* row */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* container */}
                </section>
                {/*====== TESTIMONIAL ONE PART ENDS ======*/}
                {/*====== Tiny Slider js ======*/}
            </>
            <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-body-tertiary text-muted">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-twitter" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-instagram" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2021 Copyright:
      {/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a> */}
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>





        </div>
    )
}

export default Home