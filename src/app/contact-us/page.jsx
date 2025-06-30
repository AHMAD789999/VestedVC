// app/contact/page.jsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, faMapMarkerAlt, faHeadset, faComments, faEnvelope,
  faPaperPlane, faCar, faTrain, faCoffee, faQuestionCircle,
  faTicketAlt, faVideo, faBook, faArrowRight, faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, faInstagram, faTwitter, faLinkedinIn, 
  faYoutube, faGithub
} from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  const particlesRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Create particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.1;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.background = `rgba(59, 130, 246, ${opacity})`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesRef.current.appendChild(particle);
      
      gsap.to(particle, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    
    // Animate elements on scroll
    gsap.utils.toArray('.animate-in').forEach((el, index) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.7)"
      });
    });
    
    // Form animation
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          scale: 1.02,
          duration: 0.3
        });
      });
      
      input.addEventListener('blur', () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.3
        });
      });
    });
    
    // Button animations
    const buttons = document.querySelectorAll('.btn-glow');
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)',
          duration: 0.3
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)',
          duration: 0.3
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-x-hidden">
      {/* Particles Background */}
      <div ref={particlesRef} className="fixed inset-0 z-0" />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-purple-600 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-600 rounded-full filter blur-[120px] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </span> With Us
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Have questions or ready to start your next project? Our team is here to help you innovate and transform your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact-form" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 btn-glow">
                  Send a Message
                </a>
                <a href="tel:+1234567890" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" /> Call Now
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative animate-floating">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gray-900 border border-gray-700 rounded-xl p-8 w-full max-w-md">
                  <div className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">24/7</div>
                    <div className="text-xl">Support Available</div>
                    <div className="mt-6">
                      <div className="flex items-center justify-center mb-4">
                        <div className="bg-blue-500 p-3 rounded-full mr-3">
                          <FontAwesomeIcon icon={faHeadset} className="text-2xl text-white" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold">Technical Support</div>
                          <div className="text-blue-400">support@ocentra.tech</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="bg-purple-500 p-3 rounded-full mr-3">
                          <FontAwesomeIcon icon={faComments} className="text-2xl text-white" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold">General Inquiries</div>
                          <div className="text-purple-400">info@ocentra.tech</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Global Offices</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with our teams around the world for localized support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Office 1 */}
            <div className="office-card animate-in p-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 glow">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">San Francisco</h3>
              <p className="text-gray-300 mb-4">
                123 Tech Avenue<br />
                Silicon Valley, CA 94043<br />
                United States
              </p>
              <div className="text-blue-400">
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> +1 (555) 123-4567
              </div>
            </div>
            
            {/* Office 2 */}
            <div className="office-card animate-in p-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 glow">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">London</h3>
              <p className="text-gray-300 mb-4">
                456 Innovation Street<br />
                London, EC1A 1AA<br />
                United Kingdom
              </p>
              <div className="text-purple-400">
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> +44 20 7946 0958
              </div>
            </div>
            
            {/* Office 3 */}
            <div className="office-card animate-in p-6">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 glow">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Singapore</h3>
              <p className="text-gray-300 mb-4">
                789 Future Boulevard<br />
                Singapore 068805<br />
                Singapore
              </p>
              <div className="text-amber-400">
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> +65 6011 9999
              </div>
            </div>
            
            {/* Office 4 */}
            <div className="office-card animate-in p-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 glow">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sydney</h3>
              <p className="text-gray-300 mb-4">
                101 Digital Highway<br />
                Sydney, NSW 2000<br />
                Australia
              </p>
              <div className="text-emerald-400">
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> +61 2 9876 5432
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-16 relative z-10 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div id="contact-form" className="section-card animate-in p-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Send Us a Message</h2>
                <p className="text-gray-400 mb-8">We'll get back to you within 24 hours</p>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none input-glow" placeholder="John Doe" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none input-glow" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <select id="subject" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none input-glow">
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership Opportunities</option>
                      <option>Careers</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea id="message" rows="5" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none input-glow" placeholder="Tell us how we can help..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all btn-glow animate-pulse">
                    Send Message <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                  </button>
                </form>
              </div>
              
              {/* Contact Channels */}
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect With Us</h2>
                  <p className="text-gray-300 mb-8">
                    Reach out through any of these channels for prompt assistance and support.
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="section-card animate-in p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-500 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Phone Support</h3>
                    </div>
                    <p className="text-gray-300 mb-2">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Mon-Fri: 9am - 6pm EST</p>
                  </div>
                  
                  <div className="section-card animate-in p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-500 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Email Us</h3>
                    </div>
                    <p className="text-gray-300 mb-2">info@ocentra.tech</p>
                    <p className="text-gray-400 text-sm">24/7 support available</p>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="social-hover bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faFacebookF} className="text-white" />
                    </a>
                    <a href="#" className="social-hover bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faInstagram} className="text-white" />
                    </a>
                    <a href="#" className="social-hover bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faTwitter} className="text-white" />
                    </a>
                    <a href="#" className="social-hover bg-blue-700 w-12 h-12 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
                    </a>
                    <a href="#" className="social-hover bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faYoutube} className="text-white" />
                    </a>
                  </div>
                </div>
                
                {/* Support Hours */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Support Hours</h3>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="font-bold text-gray-300">Technical Support</div>
                      <p className="text-gray-400">24/7</p>
                    </div>
                    <div className="timeline-item">
                      <div className="font-bold text-gray-300">Sales Inquiries</div>
                      <p className="text-gray-400">Mon-Fri: 8am - 8pm EST</p>
                    </div>
                    <div className="timeline-item">
                      <div className="font-bold text-gray-300">Account Management</div>
                      <p className="text-gray-400">Mon-Fri: 9am - 5pm EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Support Center</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get immediate assistance from our expert technical support team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Support Card 1 */}
              <div className="support-card section-card animate-in p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faHeadset} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Live Chat Support</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Connect instantly with our support team for real-time assistance with any technical issues.
                </p>
                <button className="text-blue-400 hover:text-blue-300 transition font-medium">
                  Start Chat <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </button>
              </div>
              
              {/* Support Card 2 */}
              <div className="support-card section-card animate-in p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faTicketAlt} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Ticket System</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Submit a detailed support ticket and track its progress through our dedicated portal.
                </p>
                <button className="text-purple-400 hover:text-purple-300 transition font-medium">
                  Submit Ticket <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </button>
              </div>
              
              {/* Support Card 3 */}
              <div className="support-card section-card animate-in p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-500 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faVideo} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Remote Assistance</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Allow our technicians to securely access your system for direct troubleshooting.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 transition font-medium">
                  Request Session <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </button>
              </div>
              
              {/* Support Card 4 */}
              <div className="support-card section-card animate-in p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faBook} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Knowledge Base</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Access our comprehensive library of guides, tutorials, and troubleshooting articles.
                </p>
                <button className="text-green-400 hover:text-green-300 transition font-medium">
                  Browse Resources <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 relative z-10 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Visit Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Headquarters</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our state-of-the-art facility in Silicon Valley is open for scheduled tours and meetings
              </p>
            </div>
            
            <div className="section-card animate-in overflow-hidden p-0 h-[500px]">
              <div className="map-container h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101453.17164994384!2d-122.15020499999999!3d37.413299999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1690834321231!5m2!1sen!2s" 
                  className="w-full h-full border-0" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="section-card animate-in p-6 text-center">
                <FontAwesomeIcon icon={faCar} className="text-3xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Parking</h3>
                <p className="text-gray-300">Free visitor parking available on site</p>
              </div>
              
              <div className="section-card animate-in p-6 text-center">
                <FontAwesomeIcon icon={faTrain} className="text-3xl text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Public Transport</h3>
                <p className="text-gray-300">10 min walk from Mountain View Station</p>
              </div>
              
              <div className="section-card animate-in p-6 text-center">
                <FontAwesomeIcon icon={faCoffee} className="text-3xl text-amber-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Amenities</h3>
                <p className="text-gray-300">Café, lounge, and meeting rooms available</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}