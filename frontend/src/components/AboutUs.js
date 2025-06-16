import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="">
      <div className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to the Science Faculty Internship Portal! Our platform is
            dedicated to bridging the gap between aspiring science professionals
            and top industry opportunities. We are committed to providing
            students with the tools and resources needed to succeed in their
            chosen fields by connecting them with internships and job
            opportunities tailored to their skills and aspirations.
          </p>
          <p>
            Our mission is to empower science students to thrive in the
            professional world by fostering connections, enhancing skills, and
            facilitating career growth. Whether you're exploring internships,
            seeking mentorship, or aiming for your dream job, we're here to
            support you every step of the way.
          </p>
        </div>
        <div className="about-image">
          <img
            src="/12@2x.png" 
            alt="About Us - Internship Portal"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
