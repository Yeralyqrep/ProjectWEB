import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p></p>
            <p></p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>How many points do you need to get to enter IITU?</Accordion.Header>
                    <Accordion.Body>
                    The Ministry of Education and Science of KZ annually sets a minimum threshold score, for example, in 2021 it was 105 points for contract training.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What language do they study at IITU?</Accordion.Header>
                    <Accordion.Body>
                    Languages of instruction: English, English-Russian.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What happens if you don't get a passing score?</Accordion.Header>
                    <Accordion.Body>
                    If you have not overcome the minimum threshold established for each subject of a specific educational program, you cannot participate in the competition.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Are students at your university provided with dormitories?</Accordion.Header>
                    <Accordion.Body>
                    At the moment there is no dormitory at the university.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;