import React, { useState , useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';

function App() {
//  const [isOpen, setIsOpen] = useState(false);
const location = useLocation();
const [showLoginBox, setShowLoginBox] = useState(true);

useEffect(() => {
  // Check if the current path is "/forgot", if so, hide the login box
  setShowLoginBox(location.pathname !== '/forgot');
}, [location.pathname]);

const handleIconClick = (event) => {
  event.preventDefault(); }
 return (
//     <nav className="flex items-center justify-between flex-wrap p-6 bg-gray-200">
//     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-65">
//       <img className="w-100 h-10 mr-2" alt="Logo" />
//     </div>
//     <div className="block lg:hidden">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
//       >
//         <svg
//           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//         </svg>
//         <svg
//           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
//         </svg>
//       </button>
//     </div>
//     <div
//       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
//     >
//       <div className="text-sm lg:flex-grow lg:flex lg:justify-center">
//         <Link to="/Home" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//         Home
//         </Link>
//         <Link to="/shop" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//         shop
//         </Link>
//         {/* <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//           Third Link
//         </a>
//         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//           Fourth Link
//         </a> */}
//       </div>
//       <div>
//         <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
//           Click Me
//         </button>
//       </div>
//     </div>
//   </nav>
<>
<header id="site-header" className="site-header header-v3">
  <div className="header-mobile">
    <div className="section-padding">
      <div className="section-container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
            <div className="navbar-header">
              <button
                type="button"
                id="show-megamenu"
                className="navbar-toggle"
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
            <div className="site-logo">
              <a href="index3.html">
                <img
                  width={400}
                  height={79}
                  src="media/logo.png"
                  alt="Mojuri – Jewelry Store HTML Template"
                />
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
            <div className="mojuri-topcart dropdown">
              <div className="dropdown mini-cart top-cart">
                <div className="remove-cart-shadow" />
                <a
                  className="dropdown-toggle cart-icon"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="icons-cart">
                    <i className="icon-large-paper-bag" />
                    <span className="cart-count">2</span>
                  </div>
                </a>
                <div className="dropdown-menu cart-popup">
                  <div className="cart-empty-wrap">
                    <ul className="cart-list">
                      <li className="empty">
                        <span>No products in the cart.</span>
                        <a className="go-shop" href="shop-grid-left.html">
                          GO TO SHOP
                          <i aria-hidden="true" className="arrow_right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="cart-list-wrap">
                    <ul className="cart-list ">
                      <li className="mini-cart-item">
                        <a href="#" className="remove" title="Remove this item">
                          <i className="icon_close" />
                        </a>
                        <a href="shop-details.html" className="product-image">
                          <img
                            width={600}
                            height={600}
                            src="media/product/3.jpg"
                            alt=""
                          />
                        </a>
                        <a href="shop-details.html" className="product-name">
                          Twin Hoops
                        </a>
                        <div className="quantity">Qty: 1</div>
                        <div className="price">$150.00</div>
                      </li>
                      <li className="mini-cart-item">
                        <a href="#" className="remove" title="Remove this item">
                          <i className="icon_close" />
                        </a>
                        <a href="shop-details.html" className="product-image">
                          <img
                            width={600}
                            height={600}
                            src="media/product/1.jpg"
                            alt=""
                          />
                        </a>
                        <a href="shop-details.html" className="product-name">
                          Medium Flat Hoops
                        </a>
                        <div className="quantity">Qty: 1</div>
                        <div className="price">$100.00</div>
                      </li>
                    </ul>
                    <div className="total-cart">
                      <div className="title-total">Total: </div>
                      <div className="total-price">
                        <span>$250.00</span>
                      </div>
                    </div>
                    <div className="free-ship">
                      <div className="title-ship">
                        Buy <strong>$400</strong> more to enjoy{" "}
                        <strong>FREE Shipping</strong>
                      </div>
                      <div className="total-percent">
                        <div className="percent" style={{ width: "20%" }} />
                      </div>
                    </div>
                    <div className="buttons">
                      <Link
                        to="/ViewCard"
                        className="button btn view-cart btn-primary"
                      >
                        View cart
                      </Link>
                      <Link
                        to="/CheckOut"
                        className="button btn checkout btn-default"
                      >
                        Check out
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-mobile-fixed">
      {/* Shop */}
      <div className="shop-page">
        <a href="shop-grid-left.html">
          <i className="wpb-icon-shop" />
        </a>
      </div>
      {/* Login */}
      <div className="my-account">
        <div className="login-header">
          <a href="page-my-account.html">
            <i className="wpb-icon-user" />
          </a>
        </div>
      </div>
      {/* Search */}
      <div className="search-box">
        <div className="search-toggle">
          <i className="wpb-icon-magnifying-glass" />
        </div>
      </div>
      {/* Wishlist */}
      <div className="wishlist-box">
        <Link to="/Wishlist">
          <i className="wpb-icon-heart" />
        </Link>
      </div>
    </div>
  </div>
  <div className="header-desktop">
    <div className="header-top">
      <div className="section-padding">
        <div className="section-container large p-l-r">
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12 header-left">
              <div className="header-page-link">
                {/* Search */}
                <div className="search-box">
                  <div className="search-toggle">
                    <i className="icon-search" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-4 col-md-12 col-sm-12 col-12 text-center header-center">
  <div className="site-logo">
  <Link to="/">
      Reeja
      </Link>
  </div>
</div>

            <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
              <div className="header-page-link">
                {/* Login */}
                <div className={`login-header icon ${showLoginBox ? 'active' : ''}`}>
                  <a className="active-login" href="#"  onClick={handleIconClick}>
                    <i className="icon-user" />
                  </a>
                  <div className="form-login-register">
                    <div className="box-form-login">
                      <div className="active-login" />
                      <div className="box-content">
                      <div className={`form-login ${showLoginBox ? 'active' : ''}`}>
                          <form id="login_ajax" method="post" className="login">
                            <h2>Log in</h2>
                            <p className="status" />
                            <div className="content">
                              <div className="username">
                                <input
                                  type="text"
                                  required="required"
                                  className="input-text"
                                  name="email"
                                  id="email"
                                  placeholder="Your email"
                                />
                              </div>
                              <div className="password">
                                <input
                                  className="input-text"
                                  required="required"
                                  type="password"
                                  name="password"
                                  id="password"
                                  placeholder="Password"
                                />
                              </div>
                              <div className="rememberme-lost">
                                <div className="rememberme">
                                  <input
                                    name="rememberme"
                                    type="checkbox"
                                    id="rememberme"
                                    defaultValue="forever"
                                  />
                                  <label
                                    htmlFor="rememberme"
                                    className="inline"
                                  >
                                    Remember me
                                  </label>
                                </div>
                                <div className="lost_password">
                                  <Link to="/forgot">
                                    Lost your password?
                                  </Link>
                                </div>
                              </div>
                              <div className="button-login">
                                <input
                                  type="submit"
                                  className="button"
                                  name="login"
                                  defaultValue="Login"
                                />
                              </div>
                              <div className="button-next-reregister">
                                Create An Account
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="form-register">
                          <form method="post" className="register">
                            <h2>REGISTER</h2>
                            <div className="content">
                            <div className="first-name">
                                <input
                                  type="text"
                                  className="input-text"
                                  placeholder="First Name"
                                  name="firstname"
                                  id="reg_firstname"
                                  defaultValue=""
                                />
                              </div>
                              <div className="last-name">
                                <input
                                  type="text"
                                  className="input-text"
                                  placeholder="Last Name"
                                  name="lastname"
                                  id="reg_lastname"
                                  defaultValue=""
                                />
                              </div>
                              <div className="phone-number">
                                <input
                                  type="text"
                                  className="input-text"
                                  placeholder="Phone number"
                                  name="phonenumber"
                                  id="reg_phonenumber"
                                  defaultValue=""
                                />
                              </div>
                              <div className="email">
                                <input
                                  type="email"
                                  className="input-text"
                                  placeholder="Email"
                                  name="email"
                                  id="reg_email"
                                  defaultValue=""
                                />
                              </div>
                              <div className="password">
                                <input
                                  type="password"
                                  className="input-text"
                                  placeholder="Password"
                                  name="password"
                                  id="reg_password"
                                />
                              </div>
                              <div className="button-register">
                                <input
                                  type="submit"
                                  className="button"
                                  name="register"
                                  defaultValue="Register"
                                />
                              </div>
                              <div className="button-next-login">
                                Already has an account
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Wishlist */}
                <div className="wishlist-box">
                  <Link to="/Wishlist">
                    <i className="icon-heart" />
                  </Link>
                  <span className="count-wishlist">1</span>
                </div>
                {/* Cart */}
                <div className="mojuri-topcart dropdown light">
                  <div className="dropdown mini-cart top-cart">
                    <div className="remove-cart-shadow" />
                    <a
                      className="dropdown-toggle cart-icon"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="icons-cart">
                        <i className="icon-large-paper-bag" />
                        <span className="cart-count">2</span>
                      </div>
                    </a>
                    <div className="dropdown-menu cart-popup">
                      <div className="cart-empty-wrap">
                        <ul className="cart-list">
                          <li className="empty">
                            <span>No products in the cart.</span>
                            <a className="go-shop" href="shop-grid-left.html">
                              GO TO SHOP
                              <i aria-hidden="true" className="arrow_right" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="cart-list-wrap">
                        <ul className="cart-list ">
                          <li className="mini-cart-item">
                            <a
                              href="#"
                              className="remove"
                              title="Remove this item"
                            >
                              <i className="icon_close" />
                            </a>
                            <a
                              href="shop-details.html"
                              className="product-image"
                            >
                              <img
                                width={600}
                                height={600}
                                src="media/product/3.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              href="shop-details.html"
                              className="product-name"
                            >
                              Twin Hoops
                            </a>
                            <div className="quantity">Qty: 1</div>
                            <div className="price">$150.00</div>
                          </li>
                          <li className="mini-cart-item">
                            <a
                              href="#"
                              className="remove"
                              title="Remove this item"
                            >
                              <i className="icon_close" />
                            </a>
                            <a
                              href="shop-details.html"
                              className="product-image"
                            >
                              <img
                                width={600}
                                height={600}
                                src="media/product/1.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              href="shop-details.html"
                              className="product-name"
                            >
                              Medium Flat Hoops
                            </a>
                            <div className="quantity">Qty: 1</div>
                            <div className="price">$100.00</div>
                          </li>
                        </ul>
                        <div className="total-cart">
                          <div className="title-total">Total: </div>
                          <div className="total-price">
                            <span>$250.00</span>
                          </div>
                        </div>
                        <div className="free-ship">
                          <div className="title-ship">
                            Buy <strong>$400</strong> more to enjoy{" "}
                            <strong>FREE Shipping</strong>
                          </div>
                          <div className="total-percent">
                            <div className="percent" style={{ width: "20%" }} />
                          </div>
                        </div>
                        <div className="buttons">
                          <Link
                            to="/ViewCard"
                            className="button btn view-cart btn-primary"
                          >
                            View cart
                          </Link>
                          <Link
                            to="/CheckOut"
                            className="button btn checkout btn-default"
                          >
                            Check out
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-middle text-center color-white">
      <div className="site-navigation">
        <nav id="main-navigation">
          <ul id="menu-main-menu" className="menu">
            <li className="level-0 menu-item menu-item-has-children current-menu-item">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">        Home
       </Link>
            
            </li>
            <li className="level-0 menu-item menu-item-has-children">
              <Link to="/shop" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">       Shop
       </Link>
           
            </li>
      
          
          
          </ul>
        </nav>
      </div>
    </div>
    <div className="header-bottom">
      <div className="section-padding">
        <div className="section-container p-l-r">
          <div className="block block-feature">
            <div className="block-widget-wrap">
              <div className="row">
                <div className="col-md-4 sm-m-b-50">
                  <div className="box">
                    <div className="box-icon">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          style={{ enableBackground: "new 0 0 512 512" }}
                          xmlSpace="preserve"
                        >
                          <g>
                            <g>
                              <path d="M509.473,256.394l-59.391-67.801c-1.937-2.21-4.733-3.479-7.672-3.479h-49.455v-41.872    c0-5.633-4.567-10.199-10.199-10.199H172.109c-5.632,0-10.199,4.566-10.199,10.199v13.762H63.818    c-5.632,0-10.199,4.566-10.199,10.199c0,5.633,4.567,10.199,10.199,10.199h98.092v132.21h-59.046    c-5.632,0-10.199,4.566-10.199,10.199c0,5.633,4.567,10.199,10.199,10.199h59.046v10.365c0,5.633,4.567,10.199,10.199,10.199    h21.288c4.485,16.339,19.459,28.382,37.203,28.382c17.744,0,32.718-12.043,37.204-28.382h136.089v-0.001    c4.485,16.339,19.459,28.382,37.203,28.382c17.744,0,32.718-12.043,37.204-28.382h23.502c5.632,0,10.199-4.566,10.199-10.199    v-77.261C512,260.642,511.101,258.253,509.473,256.394z M230.6,358.558c-10.026,0-18.182-8.157-18.182-18.183    s8.156-18.183,18.182-18.183s18.183,8.157,18.183,18.183S240.626,358.558,230.6,358.558z M267.802,330.176    c-4.485-16.339-19.46-28.382-37.204-28.382s-32.717,12.043-37.203,28.382h-11.089V153.44h190.247v176.736H267.802z     M441.094,358.558c-10.026,0-18.182-8.157-18.182-18.183s8.156-18.183,18.182-18.183c10.026,0,18.183,8.157,18.183,18.183    S451.121,358.558,441.094,358.558z M491.602,330.176h-13.304c-4.485-16.339-19.46-28.382-37.204-28.382    c-17.744,0-32.717,12.043-37.203,28.382h-10.939V205.512h44.831l53.818,61.437V330.176z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M69.261,309.611h-5.442c-5.632,0-10.199,4.566-10.199,10.199c0,5.633,4.567,10.199,10.199,10.199h5.442    c5.632,0,10.199-4.566,10.199-10.199C79.46,314.177,74.894,309.611,69.261,309.611z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M119.5,232.276H10.199C4.567,232.276,0,236.842,0,242.475c0,5.633,4.567,10.199,10.199,10.199H119.5    c5.632,0,10.199-4.566,10.199-10.199C129.699,236.842,125.132,232.276,119.5,232.276z" />
                            </g>
                          </g>
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                        </svg>
                      </span>
                    </div>
                    <div className="box-title-wrap">
                      <h3 className="box-title">FREE SHIPPING OVERS $60</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 sm-m-b-50">
                  <div className="box">
                    <div className="box-icon icon-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="459pt"
                          viewBox="-5 0 459 459.648"
                          width="459pt"
                        >
                          <path d="m416.324219 293.824219c0 26.507812-21.492188 48-48 48h-313.375l63.199219-63.199219-22.625-22.625-90.511719 90.511719c-6.246094 6.25-6.246094 16.375 0 22.625l90.511719 90.511719 22.625-22.625-63.199219-63.199219h313.375c44.160156-.054688 79.945312-35.839844 80-80v-64h-32zm0 0" />
                          <path d="m32.324219 165.824219c0-26.511719 21.488281-48 48-48h313.375l-63.199219 63.199219 22.625 22.625 90.511719-90.511719c6.246093-6.25 6.246093-16.375 0-22.625l-90.511719-90.511719-22.625 22.625 63.199219 63.199219h-313.375c-44.160157.050781-79.949219 35.839843-80 80v64h32zm0 0" />
                        </svg>
                      </span>
                    </div>
                    <div className="box-title-wrap">
                      <h3 className="box-title">
                        EASY EXCHANGES &amp; RETURNS
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                    <div className="box-icon icon-3">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          style={{ enableBackground: "new 0 0 512 512" }}
                          xmlSpace="preserve"
                        >
                          <g>
                            <g>
                              <path d="M498.946,294.959c-5.521-1.116-10.902,2.455-12.018,7.977C464.834,412.256,367.715,491.602,256,491.602    c-129.911,0-235.602-105.69-235.602-235.602S126.089,20.398,256,20.398c61.287,0,120.041,23.97,163.818,66.295h-26.361    c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h51.229c5.633,0,10.199-4.566,10.199-10.199V45.664    c0-5.633-4.566-10.199-10.199-10.199c-5.633,0-10.199,4.566-10.199,10.199v26.848C386.87,26.228,322.823,0,256,0    C187.62,0,123.333,26.628,74.98,74.98C26.628,123.333,0,187.62,0,256s26.628,132.667,74.98,181.02    C123.333,485.372,187.62,512,256,512c59.438,0,117.352-20.83,163.074-58.652c45.116-37.321,76.315-89.304,87.849-146.372    C508.039,301.455,504.467,296.075,498.946,294.959z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M501.801,245.801c-5.633,0-10.199,4.566-10.199,10.199c0,2.281-0.033,4.585-0.098,6.848    c-0.161,5.631,4.273,10.326,9.903,10.487c0.1,0.002,0.198,0.004,0.297,0.004c5.497,0,10.031-4.376,10.19-9.907    c0.07-2.457,0.106-4.957,0.106-7.43C512,250.367,507.434,245.801,501.801,245.801z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M248.858,350.416H145.234v-20.14c0-43.204,109.147-65.293,109.147-135.134c0-35.082-27.286-62.369-64.644-62.369    c-34.434,0-61.07,22.739-61.07,53.924c0,9.745,3.248,13.319,9.745,13.319c7.471,0,11.369-4.548,11.369-8.771    c0-25.662,16.892-38.332,39.306-38.332c29.886,0,43.854,22.414,43.854,42.88c0,56.846-109.797,80.56-109.797,134.484v31.51    c0,5.198,5.847,8.446,10.07,8.446h115.644c4.223,0,7.796-4.872,7.796-10.071C256.654,354.964,253.081,350.416,248.858,350.416z" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M388.538,293.893h-17.866v-62.695c0-5.523-5.523-8.121-10.72-8.121c-5.523,0-10.719,2.599-10.719,8.121v62.695h-63.669    l75.039-148.127c0.65-1.625,0.975-2.924,0.975-4.223c0-5.198-6.173-8.771-10.395-8.771c-3.898,0-7.796,1.949-10.071,6.497    l-81.535,160.797c-0.974,1.625-1.299,3.573-1.299,5.523c0,4.872,2.924,8.771,8.446,8.771h82.51v47.426    c0,5.522,5.198,8.446,10.719,8.446c5.198,0,10.72-2.924,10.72-8.446v-47.426h17.866c4.872,0,8.121-5.198,8.121-10.395    C396.658,299.091,394.059,293.893,388.538,293.893z" />
                            </g>
                          </g>
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                          <g />
                        </svg>
                      </span>
                    </div>
                    <div className="box-title-wrap">
                      <h3 className="box-title">24/7 Free Support</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

</>
  
 );
}
export default App;