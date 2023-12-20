import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import New1img from '../../utils/images/newimg-1.jpg';
import New2img from '../../utils/images/newimg-2.jpg';
import New3img from '../../utils/images/newimg-3.jpg';

const blogs = [
    {
        id: 1,
        img: [New1img],
        title: 'AUEN BIRTHDAY',
        description: '29 ноября в МУИТ было проведено мероприятие Auen Birthday в честь 7-летия студенческой организации Auen IITU. Концерт открыли выступлением танцевальной организации Shadows, а также были приглашены в качестве гостей Music Club SDU. На мероприятии царила невероятная атмосфера праздника и веселья. Вечер начался с захватывающего выступления танцевальной организации Shadows, которая восхитила зрителей своим профессионализмом и энергией.'    },
    {
        id: 2,
        img: [New2img],
        title: 'Beam.kz - найди работу мечты!',
        description: 'Дорогие студенты и выпускники МУИТ! Мы понимаем, что поиск работы и стажировок может быть сложным и времязатратным процессом. Поэтому мы представляем вам BEAM.KZ - отечественную платформу, созданную специально для того, чтобы облегчить вам этот путь к успешной карьере!'    },
    {
        id: 3,
        img: [New3img],
        title: 'Итоги IT FEST 2023',
        description: 'Вот и завершился грандиозный IT FEST 2023.IT FEST 2023 - это увлекательное исследование современного мира информационных технологий, которое прошло с 27 по 28 ноября в столице Казахстана, городе Астана. Поздравляем всех победителей! Вы проделали отличную работу и показали своё мастерство'
    }
];

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>IITU university ALMATY</h1>
                <p>Международный университет информационных технологий — высшее учебное заведение, 
                    основанное в апреле 2009 года в городе Алматы, Казахстан.</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Professions</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact US</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className="py-5 bg-dark">
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                    <h2 className='text-capitalize' style={{ color: 'white' }}>Our professions</h2>

                        <p></p>
                        <p></p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                    <img src={StartCoursesImg} className='img-fluid rounded-1' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Blogs and News</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Read More News</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;