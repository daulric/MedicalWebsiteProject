import React from "react";

import "./Home.css"

function HomePage() {
    return (
        <React.Fragment>
            <br />
            <div class="nav-bar">
                <a class="navbar" href="/">USMLE STEP Prep</a>
                <a class="navbar" href="/">CV Editing</a>
                <a class="navbar" href="/">Personal Statement Editing </a>
                <a class="navbar" href="/">Courses</a>
            </div>

            <header>
                <h1>MEDICAL SUCCESS BLUEPRINT</h1>
                <p>At Medical Success Blueprint, we bring together a diverse team of experts dedicated to empowering medical students in their career journeys. We are deeply committed to supporting medical students, especially International Medical Graduates (IMGs), in their journey to pursue postgraduate training in the United States (US) healthcare system. We understand the unique challenges and the lack of support that IMGs often encounter during this process. Our team shares a passion for providing personalized guidance and resources to help you navigate and succeed in your career aspirations in the US medical field.</p>
                <p>Medical Success Blueprint provides career advising services to help students achieve success in the medical field.</p>
            </header>

            <main>
                <section id="services">
                    <h2>Service Offered</h2>
                    <ul>
                        <li>USMLE STEP Prep</li>
                        <li>CV Editing</li>
                        <li>Personal Statement Editing</li>
                        <li>Courses</li>
                    </ul>
                </section>

                <section id="about">
                    <h2>About Us</h2>
                    <p>At Medical Success Blueprint, we bring together a diverse team of experts dedicated to empowering medical students in their career journeys. We are deeply committed to supporting medical students, especially International Medical Graduates (IMGs), in their journey to pursue postgraduate training in the United States (US) healthcare system. We understand the unique challenges and the lack of support that IMGs often encounter during this process. Our team shares a passion for providing personalized guidance and resources to help you navigate and succeed in your career aspirations in the US medical field.</p>
                    <p>Our team includes</p>
                    <ul>
                        <li>A Medical Doctor who is an international medical graduate with XX years of postgraduate training in the US, specializing in internal medicine and palliative care.</li>
                        <li>Two master's-level professionals with extensive experience in multi-sector health management and education, as well as psychology, who have served as career advisors with a focus on supporting medical students.</li>
                        <li>A residency program coordinator with expertise in screening applicants for residency programs.</li>
                    </ul>
                    <p>We are all knowledgeable about the journey as medical students but have experienced the success stories personally or from students we have mentored. With our combined knowledge and hands-on experience, we are uniquely positioned to provide tailored guidance and support to help medical students excel in their professional endeavors.</p>
                </section>
        
                <section id="courses">
                    <h2>Courses</h2>
                    <article>
                        <h3>Emotional Components in Patient Encounters</h3>
                        <h4>What is it?</h4>
                        <p>The course runs over 10 weeks with sixty-minute-long sessions delivered synchronously and asynchronously. The interactive and experiential learning consists of lectures, group discussions, role-playing scenarios, and reflective and meditative exercises. At the end of the course, the goal is to encourage you to explore your emotional responses, and biases, and to find coping strategies when dealing with emotionally demanding patient interactions.</p>
                        <h4>How can it help build your professional skills?</h4>
                        <p>The course on Emotional Components in Patient Encounters plays a pivotal role in building students' professional skills for the wards and residency training by providing them with essential tools and experiences. Through this course, students develop a nuanced understanding of the emotional dynamics inherent in patient interactions, honing their communication skills, empathy, and cultural competence. By engaging in role-playing scenarios, case studies, and reflective exercises, students learn to navigate complex situations with sensitivity and professionalism, preparing them to handle challenging encounters in real clinical settings. This comprehensive training equips students to deliver empathetic, patient-centered care, effectively collaborate with multidisciplinary teams, and uphold ethical standards, thus laying a strong foundation for their success in the wards and during residency training.</p>
                        <a href="/#" class="cta-button">GET STARTED (Click to Register)</a>
                    </article>
                </section>
                
                <section id="contact">
                    <h2>Contact Information</h2>
                    <p>Email: info@medicalsuccessblueprint.com</p>

                    <form action="/email">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required />
                        <button type="submit" id="submit-btn">Submit</button>
                    </form>

                </section>

            </main>

            <footer>
                <p>© 2024 Medical Success Blueprint. All rights reserved.</p>
            </footer>

        </React.Fragment>
    )
}

export default HomePage;