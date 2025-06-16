import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../config/AuthContext';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './StudentHome.css'; // Import custom CSS file
import HeaderAfterLogStaff from '../components/HeaderAfterLogStaff';
import Footer from '../components/Footer';
import Axios from 'axios';
import FooterNew from '../components/FooterNew';

function StudentHome() {
    const { state } = useAuth();

    const token = localStorage.getItem('token');

    // State to control modal visibility
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');

    const selectedRole = 'lecturer'

    // Function to handle button click
    const handleButtonClick = () => {
        setShowModal(true);  // Show the modal
    };

    // Function to handle closing of the modal
    const handleClose = () => setShowModal(false);

    // Fetch users based on selected role
    useEffect(() => {
        if (selectedRole) {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `http://localhost:3001/api/get/users?userRole=${selectedRole}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            Axios.request(config)
                .then((response) => {
                    const lecturers = response.data.map((user) => ({
                        id: user.Lecturer.id,
                        name: `${user.Lecturer.title} ${user.Lecturer.firstName} ${user.Lecturer.lastName}`,
                    }));
                    setUsers(lecturers);
                })
                .catch((error) => {
                    console.error('Error fetching users:', error);
                });
        }
    }, [selectedRole, token]);



    const handleConfirmSelection = async () => {
        if (!selectedUser) return;

        try {
            const config = {
                method: "post",
                url: "http://localhost:3001/api/add/recommendation",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                data: {
                    lecturerID: selectedUser,
                },
            };

            const response = await Axios.request(config);

            alert(`${response.data.message}`);
        } catch (error) {
            console.error("Error adding recommendation:", error);
            alert("Failed to add recommendation. Please try again.");
        }
    }
    return (
        <div className="page-container">
            {/* Header Section with Image */}
            <header className="page-header">
                <HeaderAfterLogStaff />
                <img
                    src="/home.jpg"
                    alt="Header Background"
                    className="header-image"
                />
                <div className="header-text">
                    <h1>Welcome to Our Internship & Job Opportunity Platform</h1>
                </div>
            </header>

            {/* Button Grid Section */}
            <div className="button-grid container mt-5">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-4">
                        <Button
                            variant="warning"
                            className="w-100"
                            onClick={() => handleButtonClick('You clicked Button 1!')}
                        >
                            Request Lecturer Recommendation
                        </Button>
                    </div>
                    <div className="col mb-4">
                        <Link to="/jobs" style={{ textDecoration: "none" }}>
                            <Button variant="warning" className="w-100">
                                Search for Internships/Job Opportunities
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Request Lecturer Recommendation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Dropdown for Role Selection */}
                        {/* <Form.Group className="mb-3">
                            <Form.Label>Select Role</Form.Label>
                            <Form.Control
                                as="select"
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                            >
                                <option value="">-- Select Role --</option>
                                {roles.map((role, index) => (
                                    <option key={index} value={role}>
                                        {role}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group> */}

                        {/* Dropdown for User Selection */}
                        <Form.Group className="mb-3">
                            <Form.Label>Select Lecturer</Form.Label>
                            <Form.Control
                                as="select"
                                value={selectedUser}
                                onChange={(e) => setSelectedUser(e.target.value)}
                                disabled={!users.length}
                            >
                                <option value="">-- Select Lecturer --</option>
                                {users.map((users) => (
                                    <option key={users.id} value={users.id}>
                                        {users.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleConfirmSelection}
                        disabled={!selectedUser}
                    >
                        Confirm Selection
                    </Button>
                </Modal.Footer>
            </Modal>
            <FooterNew/>
            {/* <Footer footerTop="120vh" /> */}
        </div>
    );
}

export default StudentHome;
