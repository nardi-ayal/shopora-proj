import "./Navbar.css";

function Navbar() {
return ( <nav className="navbar"> <a href="/" className="logo">Shopora<span>.</span></a>


  <div className="nav-links">
    <a href="/">Home</a>
    <a href="#shop">Shop</a>
    <a href="#categories">Categories</a>
    <a href="#about">About</a>
  </div>

  <button className="cart-button">🛒 Cart (0)</button>
</nav>

);
}

export default Navbar;
