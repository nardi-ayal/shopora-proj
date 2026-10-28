import "./Footer.css";

function Footer() {
return ( <footer className="footer" id="about"> <div className="footer-content"> <div> <h2>Shopora<span>.</span></h2> <p>Your favorite finds, all in one place.</p> </div>

    <div>
      <h3>Explore</h3>
      <a href="/">Home</a>
      <a href="#shop">Shop</a>
      <a href="#categories">Categories</a>
    </div>

    <div>
      <h3>Customer Care</h3>
      <a href="#contact">Contact Us</a>
      <a href="#shipping">Shipping</a>
      <a href="#returns">Returns</a>
    </div>

    <div>
      <h3>Follow Us</h3>
      <a href="#instagram">Instagram</a>
      <a href="#facebook">Facebook</a>
      <a href="#tiktok">TikTok</a>
    </div>
  </div>

  <div className="footer-bottom">
    © 2026 Shopora. All rights reserved.
  </div>
</footer>

);
}

export default Footer;
