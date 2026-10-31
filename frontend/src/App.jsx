import { useState } from "react";
import axios from "axios";
import {
  Menu, X, Phone, MessageCircle, Refrigerator,
  Tv, WashingMachine, Snowflake, Microwave,
  Zap, Wrench, ShieldCheck, Clock, MapPin,
  Mail, ArrowRight, ChevronDown
} from "lucide-react";

import "./App.css";

const phone = "9067751593";

const services = [
  {
    name: "Refrigerator Repair",
    icon: Refrigerator,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=700",
    description: "Professional fridge repair and maintenance."
  },
  {
    name: "TV Repair",
    icon: Tv,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=700",
    description: "TV troubleshooting and repair services."
  },
  {
    name: "Washing Machine",
    icon: WashingMachine,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=700",
    description: "Washing machine repair and servicing."
  },
  {
    name: "Air Conditioner",
    icon: Snowflake,
    image: "https://images.unsplash.com/photo-1631545806609-2f7c6a4b0b5e?w=700",
    description: "AC repair and maintenance services."
  },
  {
    name: "Microwave Repair",
    icon: Microwave,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=700",
    description: "Microwave troubleshooting and repairs."
  },
  {
    name: "Inverter Repair",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=700",
    description: "Inverter inspection and repair."
  },
  {
    name: "Aqua / Water Purifier",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=700",
    description: "Water purifier service and repair."
  },
  {
    name: "Deep Freezer",
    icon: Snowflake,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=700",
    description: "Deep freezer repair and maintenance."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    appliance: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const whatsapp = `https://wa.me/91${phone}`;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/enquiries`,
        form
      );

      setFeedback(response.data.message);

      setForm({
        name: "",
        phone: "",
        appliance: "",
        message: ""
      });

    } catch (error) {
      setFeedback(
        error.response?.data?.message ||
        "Unable to submit enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <div className="container top-content">
          <span>Electronics Repair & Service Experts</span>
          <a href={`tel:${phone}`}>
            <Phone size={15} /> +91 {phone}
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span>NIKHIL</span>
            <small>Electronics & Service Care</small>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About Us</a>

            <div className="dropdown">
              <a href="#services" className="dropdown-title">
                Services <ChevronDown size={15} />
              </a>

              <div className="dropdown-menu">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href="#services"
                    onClick={closeMenu}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="#contact" onClick={closeMenu}>Contact Us</a>

            <a
              className="nav-button"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} /> Get Service
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="eyebrow">
              NIKHIL ELECTRONICS & SERVICE CARE
            </span>

            <h1>
              Your Trusted Partner for
              <span> Electronics Repair</span>
            </h1>

            <p>
              Expert repair and maintenance services for
              refrigerators, televisions, washing machines,
              air conditioners and all types of electronics.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-btn">
                Book a Service <ArrowRight size={18} />
              </a>

              <a href={`tel:${phone}`} className="secondary-btn">
                <Phone size={18} /> Call Now
              </a>
            </div>

            <div className="hero-points">
              <span><ShieldCheck /> Reliable Service</span>
              <span><Wrench /> Expert Repair</span>
              <span><Clock /> Customer Support</span>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1000"
              alt="Electronics service technician working"
            />
            <div className="image-card">
              <Wrench size={25} />
              <div>
                <strong>Quality Service</strong>
                <small>Repair with confidence</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <span>WHAT WE DO</span>
            <h2>Our Repair Services</h2>
            <p>
              Complete repair solutions for your home appliances.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.name}>
                  <div className="service-image">
                    <img src={service.image} alt={service.name} />
                  </div>

                  <div className="service-info">
                    <div className="service-icon">
                      <Icon size={24} />
                    </div>

                    <h3>{service.name}</h3>
                    <p>{service.description}</p>

                    <a
                      href={`${whatsapp}?text=${encodeURIComponent(
                        `Hello, I need ${service.name} service.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Enquire Now <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900"
              alt="Electronics maintenance work"
            />
          </div>

          <div className="about-content">
            <span className="eyebrow">ABOUT OUR BUSINESS</span>

            <h2>
              NIKHIL Electronics & Service Care
            </h2>

            <p>
              We provide repair and maintenance services for
              household electronics and appliances. Our goal
              is to provide dependable service and customer
              satisfaction.
            </p>

            <h3>Proprietor: Tushar Ahire</h3>

            <div className="about-feature">
              <ShieldCheck />
              <span>All types of items repaired with confidence.</span>
            </div>

            <div className="about-feature">
              <Wrench />
              <span>Appliance repair and maintenance support.</span>
            </div>

            <a href="#contact" className="primary-btn">
              Contact Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section why-section">
        <div className="container">
          <div className="section-heading">
            <span>OUR COMMITMENT</span>
            <h2>Why Choose Us?</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <Wrench />
              <h3>Repair Solutions</h3>
              <p>Support for different household appliances.</p>
            </div>

            <div className="why-card">
              <ShieldCheck />
              <h3>Reliable Service</h3>
              <p>We focus on dependable repair solutions.</p>
            </div>

            <div className="why-card">
              <Clock />
              <h3>Quick Enquiry</h3>
              <p>Contact us easily for your service requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="section-heading">
            <span>GET IN TOUCH</span>
            <h2>Book Your Repair Service</h2>
            <p>Tell us about your appliance problem.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-details">
              <h2>Contact Information</h2>

              <div className="contact-item">
                <Phone />
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <a href={`tel:${phone}`}>+91 {phone}</a>
                </div>
              </div>

              <div className="contact-item">
                <MessageCircle />
                <div>
                  <strong>WhatsApp</strong>
                  <a href={whatsapp} target="_blank" rel="noreferrer">
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <MapPin />
                <div>
                  <strong>Business</strong>
                  <p>NIKHIL Electronics & Service Care</p>
                </div>
              </div>

              <p className="owner">
                Proprietor: Tushar Ahire
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle /> Chat on WhatsApp
              </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Customer Enquiry</h2>

              <label>Your Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                maxLength={80}
              />

              <label>Phone Number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                maxLength={20}
              />

              <label>Select Appliance</label>
              <select
                name="appliance"
                value={form.appliance}
                onChange={handleChange}
                required
              >
                <option value="">Choose appliance</option>
                {services.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>

              <label>Describe Your Problem</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your repair requirement"
                rows="4"
                maxLength={1000}
                required
              />

              <button
                type="submit"
                className="primary-btn submit-btn"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>

              {feedback && (
                <p className="feedback" role="status">
                  {feedback}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div>
            <h2>NIKHIL</h2>
            <p>Electronics & Service Care</p>
            <p>All Types of Items Will Be Repaired With Confidence.</p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div>
            <h3>Contact</h3>
            <a href={`tel:${phone}`}>+91 {phone}</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
            <p>Prop. Tushar Ahire</p>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} NIKHIL Electronics & Service Care.
          All Rights Reserved.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        className="floating-whatsapp"
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={27} />
      </a>
    </>
  );
}

export default App;