export default function App() {
  return (
    <div>
      <section className="hero">
        <h1>LensRider 👓</h1>
        <p>
          Karachi home eyewear try-on service. Try glasses at home before you buy.
          Rider brings multiple frames to your doorstep.
        </p>

        <a
          className="btn"
          href="https://api.whatsapp.com/send?phone=923212430365"
          target="_blank"
        >
          Book on WhatsApp
        </a>
      </section>

      <section className="section">
        <h2>Our Collections</h2>

        <div className="cards">
          <div className="card">
            <h3>Men</h3>
            <p>Affordable & premium eyewear for men.</p>
          </div>

          <div className="card">
            <h3>Women</h3>
            <p>Stylish frames for women.</p>
          </div>

          <div className="card">
            <h3>Kids</h3>
            <p>Comfortable kids eyewear collection.</p>
          </div>

          <div className="card">
            <h3>Premium</h3>
            <p>Luxury-inspired premium frames.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Office Visits Available</h2>
        <p>
          Busy office schedule? Call LensRider to your workplace and let your
          colleagues also try frames.
        </p>
      </section>

      <footer className="footer">
        <h2>LensRider</h2>
        <p>Karachi's Home Eyewear Service</p>
      </footer>
    </div>
  )
}
