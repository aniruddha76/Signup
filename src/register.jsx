import React from 'react';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import './register.css'

const register = () => {
    return (
        <div className='cont' class="opacity-50">
            <Container className="d-flex">
                <Row>
                    <Col>
                        <div class="col-lg-4 d-flex justify-content-center">
                            <div class="card">
                                <div class="card-body text-center">
                                    {/* <div class="card-img pt-2 pb-3"> <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </div> */}
                                    <div class="name h5">Welcome to our family.</div>
                                    <div class="testimonial"><form>
                                        <h3>Sign Up</h3>
                                        <div className="mb-3">
                                            <label>First name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div>
                                        <div className="mb-3">
                                            <label>Email address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter password"
                                            />
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">
                                                Sign Up
                                            </button>
                                        </div>
                                        <p className="forgot-password text-right">
                                            Already registered <a href="/sign-in">sign in?</a>
                                        </p>
                                    </form> </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default register;