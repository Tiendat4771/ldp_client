import React from 'react';
import './footer.scss';

const FooterComponent = () => (
  <div>
    <div id="footer">
      <div className="tomottoWrap">
        <div id="tomotto">
          “In such seconds of decision entire futures are made.” ― Dan Simmons, Hyperion
        </div>
      </div>
      <div className="lookWrap">
        <div id="look">
          <div className="section">
            <h3>Support</h3>
            <p>FAQs</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Shipping Information</p>
            <p>Return Policy</p>
            <p>Item Exchange</p>
            <p>Cash Back Rewards</p>
          </div>
          <div className="section">
            <h3>Give & Take</h3>
            <p>Gift Certificates</p>
            <p>Wishlist</p>
            <p>Gift Ideas</p>
            <p>Refer a Friend</p>
            <p>Reviews</p>
            <p>Scholarship</p>
            <p>Sponsor</p>
          </div>
          <div className="section">
            <h3>Follow Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Pinterest</p>
            <p>Blog</p>
            <p>Ravelry</p>
            <p>Sponsor</p>
            <p>RSS</p>
          </div>
          <div className="section">
            <h3>About Us</h3>
            <p>About</p>
            <p>Testimonials</p>
            <p>The Team</p>
          </div>
        </div>
      </div>
      <div className="legality">© Copyright 2002 - 2014 Your Company</div>
    </div>
  </div>
);

export default FooterComponent;
