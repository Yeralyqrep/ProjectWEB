import React from 'react'
import { Card } from 'react-bootstrap'
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion'
import { books } from '../../data'
import { useState } from 'react';


const Library = () => {

    const [bookIds, setBookIds] = useState([])

  return (
	<div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Library</h1>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {books.results.map((book) => (
                    <div key={book.work_id} className='col-md-4'>
                        <Card className='text-white'>
                            <Card.Img src={book?.published_works[0].cover_art_url} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{book.title}</Card.Title>
                                <button style={{backgroundColor: bookIds.find(id => id === book.work_id) ? 'limegreen' : 'orange', padding: "10px 20px", color: 'white', fontWeight: "900", borderRadius: "5px"}} onClick={bookIds.find(id => id === book.work_id) ? () => setBookIds(prev => prev.filter(id => id !== book.work_id)) : () => setBookIds(prev => [...prev, book.work_id])}>{bookIds.find(id => id === book.work_id) ? 'Saved' : "Save Book"}</button>
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

export default Library