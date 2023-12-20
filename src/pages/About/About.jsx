import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/home-page-header.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import it1 from '../../utils/images/it1.jpg';
import it2 from '../../utils/images/it2.jpg';
import it3 from '../../utils/images/it3.jpg';

const persons = [
    {
        id: 1,
        img: [it1]
    },
    {
        id: 2,
        img: [it2]
    },
    {
        id: 3,
        img: [it3]
    }
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>IITU Almaty</h2>
                    <p>2009 - founding of the International University of Information Technologies. IITU is a university that received institutional international accreditation by ASIIN in 2019 and has undergone the procedure of official confirmation of compliance with international standards. In 2018, in accordance with the Order of the Minister of Defense of the Republic of Kazakhstan, a military department was opened at MUIT, specializing in the training of cybersecurity specialists, and a Cybersecurity Competence Center also operates. Currently, more than 4,000 students are studying at IITU in bachelor's, master's and PhD doctoral programs. The university produces specialists in the field of ICT with knowledge of industry technologies, management, economics and communication skills with knowledge of the English language.</p>
                    <p className='mb-4 mb-lg-5'>The University has created a Department for Research Activities, which coordinates and carries out scientific and development work. Its main task is the development, coordination and analysis of research activities at the university.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        <div className='bg-body-tertiary py-5'>
    <div className="container">
        <h2 className='text-center mb-5'>Organizations</h2>
        <div className='row g-4'>
            {persons.slice(0, 3).map((person) => (
                <div key={person.id} className='col-md-4'>
                    <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;