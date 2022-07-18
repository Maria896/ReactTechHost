import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="xs-footer-section">
			<div className="footer-group" style={{backgroundImage:"{url(${/assets/images/footer-bg.png})"}}>
				<div className="footer-main">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="footer-widget wow fadeInUp">
									<h3 className="widget-title">Services</h3>
									<ul className="xs-list">
										<li><a href="shared-hosting.html">Shared Hosting</a></li>
										<li><a href="reseller-hosting.html">Reseller Hosting</a></li>
										<li><a href="vps-hosting.html">VPS Hosting</a></li>
										<li><a href="cloud-hosting.html">Cloud Hosting</a></li>
										<li><a href="dedicated-hosting.html">Dedicated Hosting</a></li>
										<li><a href="domain.html">Domain Name</a></li>
									</ul>
                                    {/* <!-- .xs-list END --> */}
								</div>
                                {/* <!-- .footer-widget END --> */}
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-widget wow fadeInUp" data-wow-duration="1s">
									<h3 className="widget-title">Company</h3>
									<ul className="xs-list">
										<li><a href="about.html">About us</a></li>
										<li><a href="contact.html">Contact</a></li>
										<li><a href="support.html">Support</a></li>
										<li><a href="blog.html">Latest Blog</a></li>
										<li><a href="pricing.html">Pricing</a></li>
										<li><a href="affiliate.html">Affiliate</a></li>
									</ul>
                                    {/* <!-- .xs-list END --> */}
								</div>
                                {/* <!-- .footer-widget END --> */}
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-widget wow fadeInUp" data-wow-duration="1.3s">
									<h3 className="widget-title">Solutions</h3>
									<ul className="xs-list">
										<li><a href="who-is.html">Who Is</a></li>
										<li><a href="terms.html">Terms of Service</a></li>
										<li><a href="privacy.html">Privacy Policy</a></li>
										<li><a href="faq.html">FAQ</a></li>
										<li><a href="login.html">Log In</a></li>
									</ul>
                                    {/* <!-- .xs-list END --> */}
								</div>
                                {/* <!-- .footer-widget END --> */}
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="footer-widget wow fadeInUp" data-wow-duration="1.5s">
									<h3 className="widget-title">Contact Info</h3>
									<ul className="contact-info-widget">
										<li className="media">
											<img src="assets/images/address-pin.png" className="d-flex" alt="contact icon"/>
											<span className="media-body">9/4c, 1010 Avenue, NY, USA</span>
										</li>
                                        {/* <!-- .media END --> */}
										<li className="media">
											<img src="assets/images/phone-pin.png" className="d-flex" alt="contact icon"/>
											<span className="media-body">009-215-5596 (toll free) 009-215-5596</span>
										</li>
                                        {/* <!-- .media END --> */}
										<li className="media">
											<img src="assets/images/email-icon.png" className="d-flex" alt="contact icon"/>
											<span className="media-body">9/4c, 1010 Avenue, NY, USA</span>
										</li>
                                        {/* <!-- .media END --> */}
									</ul>
                                    {/* <!-- .contact-info-widget --> */}
								</div>
                                {/* <!-- .footer-widget END --> */}
							</div>
						</div>
                        {/* <!-- .row END --> */}
					</div>
                    {/* <!-- .container END --> */}
				</div>
                {/* <!-- .footer-main END --> */}
				<div className="container">
					<div className="footer-bottom">
						<div className="row">
							<div className="col-md-6">
								<div className="footer-bottom-info wow fadeInUp">
									<p>Offers valid for a limited time onlyand  reflect multi  annual discounts. Other terms and conditions may apply.  <a href="#">Click Here</a></p>
								</div>
							</div>
							<div className="col-md-6">
								<ul className="xs-list list-inline wow fadeInUp" data-wow-duration="1s">
									<li><img src="assets/images/security/security-company-images-1.png" alt="security company images"/></li>
									<li><img src="assets/images/security/security-company-images-2.png" alt="security company images"/></li>
									<li><img src="assets/images/security/security-company-images-3.png" alt="security company images"/></li>
									<li><img src="assets/images/security/security-company-images-4.png" alt="security company images"/></li>
								</ul>
							</div>
						</div>
                        {/* <!-- .row END --> */}
					</div>
                    {/* <!-- .footer-bottom end --> */}
				</div>
                {/* <!-- .container end --> */}
			</div>
            {/* <!-- .footer-group END --> */}
			<div className="footer-copyright">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="copyright-text wow fadeInUp">
								<p>&copy; 2018 <a href="#">Hostinza</a> Theme by <a href="https://themeforest.net/user/xpeedstudio">Xpeed Studio</a></p>
							</div>
                            {/* <!-- .copyright-text END --> */}
						</div>
						<div className="col-md-4">
							<div className="footer-logo-wraper wow fadeInUp" data-wow-duration="1s">
								<a href="index.html" className="footer-logo"><img src="assets/images/footer-logo.png" alt="footer logo"/></a>
							</div>
                            {/* <!-- .footer-logo-wraper END --> */}
						</div>
						<div className="col-md-4">
							<div className="social-list-wraper wow fadeInUp" data-wow-duration="1.3s">
								<ul className="social-list">
									<li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
									<li><a href="#" className="googlePlus"><i className="fa fa-google-plus"></i></a></li>
								</ul>
							</div>
                            {/* <!-- .social-list-wraper END --> */}
						</div>
					</div>
                    {/* <!-- .row END --> */}
				</div>
                {/* <!-- .container END --> */}
			</div>
            {/* <!-- .footer-copyright END --> */}
</footer>
      </div>
    )
  }
}

export default Footer
