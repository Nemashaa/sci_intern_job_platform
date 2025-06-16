
import { useRef } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon

import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css'
import FooterNew from '../components/FooterNew';
import HeaderBeforeLog from '../components/HeaderBeforeLog';



function ContactUs(props) {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gif23ge', 'template_x8ylgi9', form.current, 'GDHOMWnuASrjwZ8Dr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <>
      <div className='contactUs'>
        <HeaderBeforeLog />

        <Container className='contact-us-container'>
          <Row className='contentHeader'>

            <h1 className=''>Contact Us</h1>

          </Row>
          <Row>

            <Col lg={6} className='contactUs_left'>

              <p><FontAwesomeIcon icon={faPhone} className="contactUs-icon" /> <span>012-3456789</span></p>
              <p> <FontAwesomeIcon icon={faEnvelope} className="contactUs-icon" /> <span>sciintern@sci.pdn.ac.lk</span></p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="contactUs-icon" /><span>Internship Cell, Faculty of Science, University of Peradeniya, Peradeniya</span></p>

            </Col>

            <Col lg={6} className='contactUs_right'>
              <form ref={form} action="" onSubmit={sendEmail}>

                <div className='contact-contactForm'>
                  <span className='input_Content'>Full Name</span>

                  <input className="contactus-input" type="text" placeholder='Full Name' name='userName' required />

                  <span className='input_Content'>Phone Number</span>

                  <input className="contactus-input" type="text" placeholder='Phone Number' name='phoneNumber' required />

                  <span className='input_Content'>Enter Email</span>

                  <input className="contactus-input" type="email" placeholder='ABC@gmail.com' name='userEmail' required />

                  <span className='input_Content'>Subject</span>

                  <input className="contactus-input" type="text" placeholder='Subject' name='subject' required />

                  <span className='input_Content'>Message</span>

                  <textarea className="contactus-input" type="text" placeholder='Type Your Message Here' name='message' cols='40' rows='6' required ></textarea>

                  <Button type='submit' variant='success' className='common-button contactus-button'>Send Message</Button>

                </div>
              </form>

            </Col>





          </Row>
        </Container>


      </div>
      <FooterNew />
    </>
  )
}

export default ContactUs;
