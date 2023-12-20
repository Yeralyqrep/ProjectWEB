import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import Itcourse from '../../utils/images/it-1.jpg';
import Cybersecurity from '../../utils/images/it-2.png';
import Computerengineering from '../../utils/images/it-3.jpg';
import Radioengineering from '../../utils/images/it-4.jpg';
import DepartmentLanguages from '../../utils/images/it-5.jpg';
import Iscourse from '../../utils/images/it-6.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [Itcourse],
        title: 'Information Systems',
    },
    {
        id: 2,
        img: [Cybersecurity],
        title: 'Cybersecurity',
    },
    {
        id: 3,
        img: [Computerengineering],
        title: 'Computer engineering',
    },
    {
        id: 4,
        img: [Radioengineering],
        title: 'Radio electronics and telecommunications',
    },
    {
        id: 5,
        img: [DepartmentLanguages],
        title: 'Department of Languages',
    },
    {
        id: 6,
        img: [Iscourse],
        title: 'Economics and business',
    },
   
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;