import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import New1img from '../../utils/images/newimg-1.jpg';
import New2img from '../../utils/images/newimg-2.jpg';
import New3img from '../../utils/images/newimg-3.jpg';
import New4img from '../../utils/images/newimg-4.jpg';
import New5img from '../../utils/images/newimg-5.jpg';
import New6img from '../../utils/images/newimg-6.jpg';


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
    },
    {
        id: 4,
        img: [New4img],
        title: 'МУИТ - чемпион Alma Cup 2023',
        description: 'С гордостью и радостью сообщаем вам о нашем великолепном успехе на турнире Alma Cup 2023! В течение двух дней интенсивных соревнований наши баскетболисты показали не только выдающуюся игру, но и настоящий дух команды, который привел нас к заветному первому месту.'
    },
    {
        id: 5,
        img: [New5img],
        title: 'Форум Большого Евразийского Партнерства 2023',
        description: '25 сентября 2023 года НИУ ВШЭ провела Образовательный форум Большого Евразийского партнерства в г. Москва. Форум направлен на сопряжение стратегий и инициатив участников БЕП в области образования, науки и технологий с целью формирования общего пространства для развития социально-гуманитарного сотрудничества в Большой Евразии.'
    },
    {
        id: 6,
        img: [New6img],
        title: 'Секция “CyberSecurity”',
        description: 'CyberSecurity - это соревнования по информационной безопасности формата CTF, которая проводится на платформе CTFD. В рамках соревнования участникам предлагается некоторое число заданий на проверку знаний в области информационной безопасности.'
    },
    
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Blogs and News</h1>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;