


import React, { useState } from 'react';
import './BookTable.css';
import { Container, Row, Col, Form, Button, Alert, Modal } from 'react-bootstrap';

function BookTable() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [endtime, setEndTime] = useState('');
    const [people, setPeople] = useState('');
    const [message, setMessage] = useState('');
    const [showPayment, setShowPayment] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a booking object
        const booking = {
            name,
            number,
            date,
            time,
            endtime,
            people: parseInt(people, 10),
        };
        const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        existingBookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(existingBookings));

        setMessage('Booking Successful! Please proceed to payment.');
        setShowPayment(true);
        // Clear form fields
        setName('');
        setNumber('');
        setDate('');
        setTime('');
        setEndTime('');
        setPeople('');
    };

    const handleCancel = () => {
        setShowPayment(false);
        setMessage('');
        // Optionally clear the form or navigate away
    };

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    return (
        <Container className="container">
            <Row>
                <Col xs={12} md={8} lg={6} className="mx-auto">
                    <div className="form">
                        <h1 className="text-center form-title">Book a Table</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your phone number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="formStartTime">
                                        <Form.Label>Start Time</Form.Label>
                                        <Form.Control
                                            type="time"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="formEndTime">
                                        <Form.Label>End Time</Form.Label>
                                        <Form.Control
                                            type="time"
                                            value={endtime}
                                            onChange={(e) => setEndTime(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="formNumberOfPeople">
                                <Form.Label>Number of People</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter number of people"
                                    value={people}
                                    onChange={(e) => setPeople(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <button type="submit" className="submit-button w-100 mt-3">
                                Book Table
                            </button>
                        </Form>
                        {message && <Alert variant="success" className="alert-success mt-3">{message}</Alert>}
                    </div>
                    {showPayment && (
                        <div className="payment-section mt-4">
                            <h3 className="text-center">Payment Method</h3>
                            <Button variant="secondary" onClick={handleCancel}>
                                Cancel Booking
                            </Button>
                            <Button variant="primary" onClick={handleModalShow}className='proceed' >
                                Proceed to Payment
                            </Button>
                        </div>
                    )}
                    <Modal show={showModal} onHide={handleModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Payment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          
                            <p>Here you would include your payment form or instructions.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleModalClose} >
                                Pay Now
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
}

export default BookTable;

