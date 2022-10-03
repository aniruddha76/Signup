import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './register.css'

const register = () => {
    return (
        <div className='cont' class="opacity-50">
            <Container>
                <Row>
                    <Col>
                        <div class="col-lg-4 d-flex justify-content-center">
                            <div class="card">
                                <div class="card-body text-center">
                                    <form>
                                        <h4>Sign Up
                                            <br /><small class="text-muted">Welcome to our family.</small>
                                        </h4>
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
                                        <lable>Select Department</lable>
                                            <select className='form-control'>
                                            <option value="1">IT</option>
                                            <option value="2">Computer</option>
                                            <option value="3">Electric</option>
                                            <option value="3">Electronic</option>
                                            <option value="3">Instru</option>
                                            </select>
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
                                                size="8"
                                            />
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">
                                                Sign Up
                                            </button>
                                        </div>
                                        <p className="forgot-password text-center"><hr />
                                            Already registered <a href="/sign-in">sign in?</a>
                                        </p>
                                    </form> </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default register;