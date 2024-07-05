import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
      <h1 className="text-center">
  About Us{" "}
  <a className="text-dark fs-4" href="https://github.com/Shreya-0701" target="_blank" rel="noreferrer" style={{
      float: "right",
      marginLeft: "10px", // Add some spacing to separate it from the heading
    }}> 
              <i className="fa fa-github"></i>
            </a>
</h1>
        <hr />
        <p className="lead text-center">
        Welcome to Bou'jee Couture, your ultimate destination for the latest in fashion. At Bou'jee Couture, we believe that every woman is unique and deserves to express her individuality through her clothing. We redefine fashion by curating collections that are as unique as you are. We celebrate individuality and provide a platform for you to express your style, unapologetically. Our journey began with a dream to offer women a spectrum of clothing that's both exquisite and affordable. We meticulously handpick each item, ensuring it embodies our core values of elegance, quality, and distinctiveness. Bou'jee Couture is more than a brand; it's a movement. It's an ode to the artists who dare to be different, the trendsetters who challenge the status quo, and the dreamers who see fashion as a form of self-expression.
        </p>
        <p className="lead text-center">
        Step into Bou'jee Couture, where every stitch is a brushstroke, and you are the masterpiece.
        </p>
        

        <h2 className="text-center py-4">Trends & Treasures</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Men</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewellery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage