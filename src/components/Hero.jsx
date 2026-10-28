import "./Hero.css";

function Hero() {
return ( <section className="hero"> <div className="hero-text"> <p className="eyebrow">DISCOVER SOMETHING NEW</p>

    <h1>
      Find Your <span>Perfect</span> Style.
    </h1>

    <p className="hero-description">
      Discover amazing products, explore new collections,
      and find everything you love in one place.
    </p>

    <a href="#shop" className="hero-button">
      Shop Now →
    </a>
  </div>

  <div className="hero-photo">
    <img
      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85"
      alt="Fashion and shopping collection"
    />
  </div>
</section>


);
}

export default Hero;
