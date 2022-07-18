import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        	<div className="header-transparent">
    {/* <!-- topBar section --> */}
    <div className="xs-top-bar">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <ul className="xs-top-bar-info">
                    <li>
                        <p><i className="icon icon-phone3"></i>009-215-5596</p>
                    </li>
                    <li>
                        <a href=""><i className="icon icon-envelope4"></i>info@domain.com</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-6">
                <ul className="top-menu">
                    <li><a href=""><i className="icon icon-key2"></i> Login</a></li>
                    {/* <!-- <li><a href="">Sign Up</a></li> --> */}
                    <li><a href=""><i className="icon icon-hours-support"></i> Support</a></li>
                </ul>
            </div>
        </div>
        {/* <!-- .row END --> */}
    </div>
    {/* <!-- .container END --> */}
</div>    
{/* <!-- End topBar section --> */}

    {/* <!-- header section --> */}
    <div>
    <header className="xs-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-2">
                <div className="xs-logo-wraper">
                    <a href="" className="xs-logo">
                        <img src={process.env.PUBLIC_URL + "./assets/images/techhost.png"} alt=""/>
                    </a>
                </div>
            </div>
            <div className="col-lg-8">
                <nav className="xs-menus">
                    <div className="nav-header">
                        <a className="nav-brand" href="">
                            <img src={process.env.PUBLIC_URL + "./assets/images/logo.png"} alt=""/>
                        </a>
                        <div className="nav-toggle"></div>
                    </div>
                    <div className="nav-menus-wrapper">
                        <ul className="nav-menu align-to-right">
                             <li><a href="#">Domain</a>
                                <div className="megamenu-panel xs-service-menu">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href="">
                                                <div className="media">
                                                    <img src={process.env.PUBLIC_URL + "./assets/images/menu-icon/icon-4.png"} alt=""/>
                                                    <div className="media-body">
                                                        <h4>Register Domain</h4>
                                                        <p>Access your files from anywhere</p>
                                                    </div>
                                                </div>
                                            </a>
                                            
                                        </div>
                                        <div className="col-lg-6">
                                            
                                            <a href="">
                                                <div  className="media">
                                                    <img src="{process.env.PUBLIC_URL + assets/images/menu-icon/icon-2.png}" alt=""/>
                                                    <div className="media-body">
                                                        <h4>Transfer Domain</h4>
                                                        <p>Early Create sites & offload them to clients</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </li>
                            <li><a href="#">Hosting</a>
                                <div className="megamenu-panel xs-service-menu">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href="">
                                                <div className="media">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/menu-icon/icon-1.png"} alt=""/>
                                                    <div className="media-body">
                                                        <h4>Shared Hosting</h4>
                                                        <p>Early Create sites & offload them to clients</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="">
                                                <div  className="media">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/menu-icon/icon-2.png"} alt=""/>
                                                    <div className="media-body">
                                                        <h4>Reseller Hosting</h4>
                                                        <p>Early Create sites & offload them to clients</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="#">
                                                <div className="media">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/menu-icon/icon-4.png"} alt=""/>
                                                    <div className="media-body">
                                                        <h4>Worpdress Hosting</h4>
                                                        <p>Access your files from anywhere</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="">
                                                <div className="media">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/menu-icon/icon-5.png"} alt=""/>
                                                    <div className="media-body">
                                                        <h4>Business Hosting</h4>
                                                        <p>Be secure, be safe</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                           <li><a href="#">Servers</a>
                                <div className="megamenu-panel xs-service-menu">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href="#">
                                                <div className="media">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/menu-icon/icon-1.png"} alt=""/>
                                                    <div className="media-body">
                                                        <h4>VPS Servers</h4>
                                                        <p>Early Create sites & offload them to clients</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div  className="media">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/menu-icon/icon-2.png"} alt=""/>
                                                    <div className="media-body">
                                                        <h4>Dedicated Servers</h4>
                                                        <p>Early Create sites & offload them to clients</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="#">
                                                <div className="media">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/menu-icon/icon-4.png"} alt=""/>
                                                    <div className="media-body">
                                                        <h4>Pak Based Servers</h4>
                                                        <p>Access your files from anywhere</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="media">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/menu-icon/icon-5.png"} alt=""/>
                                                    <div className="media-body">
                                                        <h4>SSD Servers</h4>
                                                        <p>Be secure, be safe</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                             <li><a href="#">Services</a>
                                <div className="megamenu-panel xs-service-menu">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href="{{route('website-development')}}">
                                                <div className="media">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/menu-icon/icon-1.png"} alt=""/>
                                                    <div className="media-body">
                                                        <h4>Web Development</h4>
                                                        <p>Early Create sites & offload them to clients</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div  className="media">
                                                    <img src={process.env.PUBLIC_URL + "assets/images/menu-icon/icon-2.png"} alt=""/>
                                                    <div className="media-body">
                                                        <h4>SEO</h4>
                                                        <p>Early Create sites & offload them to clients</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="#">
                                                <div className="media">
                                                    <img src="assets/images/menu-icon/icon-4.png" alt=""/>
                                                    <div className="media-body">
                                                        <h4>SMO</h4>
                                                        <p>Access your files from anywhere</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="media">
                                                    <img src="assets/images/menu-icon/icon-5.png" alt=""/>
                                                    <div className="media-body">
                                                        <h4>SSL Certificates</h4>
                                                        <p>Be secure, be safe</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="col-lg-2">
                <ul className="xs-menu-tools">
                    <li>
                        <a href="#" className="offset-side-bar"><i className="icon icon-cart2"></i><span className="item-count"></span></a>
                    </li>
                    <li>
                        <a href="#modal-popup-2" className="navsearch-button xs-modal-popup"><i className="icon icon-search"></i></a>
                    </li>
                    <li>
                        <a href="#" className="navSidebar-button"><i className="icon icon-burger-menu"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        {/* <!-- .row END --> */}
    </div>
    {/* <!-- .container END --> */}
</header>
    </div>

      </div>
      </div>
    )
  }
}

export default Header
