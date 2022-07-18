import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export class Layout extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">    
                    <div id="content-wrapper" className="d-flex flex-column">  
                        <div id="content">  
                        {/* <p>Hi Maria is here</p> */}
                            <Header />  
                        </div>
                        <div>
                        </div>  
                        <Footer />  
                    </div>  
                </div>  

      </div>
    )
  }
}

export default Layout
