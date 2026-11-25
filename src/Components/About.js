import React from 'react';
import './css/About.css';
import TestimonialCard from './TestimonialCard';
import Images from '../static/Images.js';

const About = () => (
  <div className="about-content">
    <h1>About Me</h1>
    <hr className="about-divider" />

    <p className="about-lead">
      Java Software Engineer with approximately 4 years of experience building
      scalable microservices across fintech and banking. Focused on distributed
      payment workflows, high-throughput services, and reliable backend systems.
    </p>

    <div className="about-grid">
      <article className="about-panel">
        <h3>Impact</h3>
        <p>
          Contributed to services handling 2Cr+ requests/day and Redis-based
          optimizations delivering about INR 50L–1Cr per month in cost savings.
        </p>
      </article>
      <article className="about-panel">
        <h3>Stack focus</h3>
        <p>
          Java, Spring Boot, Redis, Kafka, AWS, and GCP — with emphasis on
          scalability, reliability, performance, and production operations.
        </p>
      </article>
    </div>

    <h2 className="about-section-title">Experience</h2>
    <div className="experience-list">
      <article className="experience-item">
        <div className="experience-header">
          <h3>Software Engineer · Paytm (One97 Communications)</h3>
          <span>Dec 2024 – Present · Mumbai</span>
        </div>
        <ul>
          <li>
            Enhanced Java/Spring Boot merchant-facing payment gateway proxy
            services for validation, order creation, and payment routing.
          </li>
          <li>
            Implemented Redis transaction tokens and idempotency for retries;
            contributed to Saga-based failure handling and async workflows.
          </li>
          <li>
            Contributed to QR services processing 2Cr+ requests/day and
            enterprise merchant onboarding for Payment Gateway.
          </li>
          <li>
            Drove Redis cost optimizations (~INR 50L–1Cr/month) and traffic
            protection with FF4J, Bucket4j, and Istio rate limiting.
          </li>
          <li>
            Owned deployments, monitoring, and on-call; built AI-assisted PR /
            merge-conflict tooling with Groq, Gemini, and Bitbucket APIs.
          </li>
        </ul>
      </article>

      <article className="experience-item">
        <div className="experience-header">
          <h3>Software Engineer · FIS</h3>
          <span>June 2022 – Dec 2023 · Pune</span>
        </div>
        <ul>
          <li>Built Java banking applications backed by MySQL.</li>
          <li>
            Worked on CIBC-aligned bond systems and migrated legacy C++
            components into Java.
          </li>
          <li>
            Used Git, Postman, Oracle, MySQL, and PuTTY for development and
            maintenance.
          </li>
        </ul>
      </article>

      <article className="experience-item">
        <div className="experience-header">
          <h3>Intern · Mass Technology</h3>
          <span>6 months · Pune</span>
        </div>
        <ul>
          <li>
            Built regression and image-processing apps with Python, OpenCV,
            NumPy, Pandas, and TensorFlow.
          </li>
        </ul>
      </article>
    </div>

    <h2 className="about-section-title">Education</h2>
    <article className="about-panel education-panel">
      <h3>B.E. Information Technology · CGPA 8.2</h3>
      <p>
        JSPM&apos;s Jayawantrao Sawant College of Engineering, Pune · 2022
      </p>
    </article>

    <h2 className="about-section-title">Achievements</h2>
    <ul className="achievements-list">
      <li>
        Competitive Programming Lead — CodeChef JSCOE Chapter (300+ students)
      </li>
      <li>Python &amp; ML training — IIT Kharagpur</li>
      <li>Google Cloud Ready Facilitator Program</li>
      <li>2nd Rank — PCCOE Coding Competition</li>
      <li>Publication: Calories Estimation Analysis — IJERT (May 2022)</li>
    </ul>

    <h2 className="about-section-title">LinkedIn Recommendations</h2>
    <div className="testimonial-card-container">
      <TestimonialCard
        name="Prince Puri"
        details="Software Engineer at Paytm"
        relation="Managed Mayur directly · Nov 2026"
        photo={Images.personLogo}
        testimonial="I had the pleasure of working with Mayur, and it has been a great experience. He is a hardworking and dedicated professional with strong technical skills and a genuine willingness to learn and grow. What particularly stands out is his sense of ownership and accountability towards the work he takes up. He consistently demonstrates the ability to take responsibility, navigate challenges, and drive tasks to completion."
      />
      <TestimonialCard
        name="Akash Kharate"
        details="Paytm | Ex-Jio | NIT Nagpur CSE'22"
        relation="Same team · Nov 2026"
        photo={Images.personLogo}
        testimonial="I had the pleasure of working with Mayur at Paytm. He is a dedicated and supportive professional with a strong learning mindset and a collaborative approach to work. He is always willing to share knowledge, help teammates, and contribute to the team's success. It was great working with him, and I would definitely recommend him to anyone looking for a reliable and talented professional."
      />
      <TestimonialCard
        name="Simandhar Randive"
        details="Public Policy & Government Relations | Paytm"
        relation="Same team · Nov 2026"
        photo={Images.personLogo}
        testimonial="I worked with Mayur at Paytm and was consistently impressed by him. He's a skilled software developer who writes clean, reliable code, owns his work end to end, and picks up new technologies fast. He's also a great teammate, clear in communication and always ready to help others. Any team would be lucky to have him."
      />
      <TestimonialCard
        name="Ankit Gupta"
        details="Software Engineer @ Paytm | Payment Gateway"
        relation="Same team · Oct 2026"
        photo={Images.personLogo}
        testimonial="I worked with Mayur at Paytm while he was on the Payment Gateway team. He's a strong Java backend engineer who is very comfortable with Spring Boot, microservices, Kafka and Redis, and he understands how to build reliable, high-throughput payment systems where correctness really matters. What stood out to me was his ownership. He took issues from investigation through to a clean fix, worked well across teams, and was always willing to help others debug tricky production problems. He's dependable, keeps learning, and is easy to work with. I'd happily recommend Mayur to any team building scalable backend systems."
      />
    </div>

    <h2 className="about-section-title">Open to opportunities</h2>
    <p className="about-closing">
      Last working day at current role: 30 Nov 2026. Open to backend /
      platform engineering roles where reliability and scale matter.
    </p>
  </div>
);

export default About;
