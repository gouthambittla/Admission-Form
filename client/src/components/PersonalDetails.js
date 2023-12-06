import React, { useState, useEffect } from 'react';
import '../styles/style.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PersonalDetails() {
    const [formData, setFormData] = useState({
        admissionNo: '',
        rollNo: '',
        program: '',
        studentName: '',
        fatherName: '',
        motherName: '',
        dob: '',
        fatherOccupation: '',
        nationality: '',
        motherOccupation: '',
        branch: '',
        gender: '',
        fatherAnnualIncome: '',
        motherAnnualIncome: '',
        religion: '',
        bloodgroup: '',
        identificationMarks: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setTouchedFields((prevFields) => ({
            ...prevFields,
            [name]: true,
        }));
    };

    const validate = (values) => {
        const errors = {};

        if (!values.admissionNo) {
            errors.admissionNo = 'Admission number is required';
        } else if (isNaN(values.admissionNo)) {
            errors.admissionNo = 'Enter a valid admission number';
        }

        if (!values.rollNo) {
            errors.rollNo = 'Roll number is required';
        } else if (isNaN(values.rollNo)) {
            errors.rollNo = 'Enter a valid roll number';
        }
        if (!values.program) {
            errors.program = 'Program is required';
        }

        if (!values.studentName) {
            errors.studentName = "Student name is required";
        }

        if (!values.fatherName) {
            errors.fatherName = "Father's name is required";
        }

        if (!values.motherName) {
            errors.motherName = "Mother's name is required";
        }

        if (!values.dob) {
            errors.dob = "Date of birth is required";
        }

        if (!values.fatherOccupation) {
            errors.fatherOccupation = "Father's occupation is required";
        }

        if (!values.nationality) {
            errors.nationality = "Nationality is required";
        }

        if (!values.motherOccupation) {
            errors.motherOccupation = "Mother's occupation is required";
        }

        if (!values.branch) {
            errors.branch = "Branch is required";
        }

        if (!values.gender) {
            errors.gender = "Gender is required";
        }

        if (!values.fatherAnnualIncome) {
            errors.fatherAnnualIncome = "Father's annual income is required";
        } else if (isNaN(values.fatherAnnualIncome)) {
            errors.fatherAnnualIncome = "Enter a valid annual income";
        }

        if (!values.motherAnnualIncome) {
            errors.motherAnnualIncome = "Mother's annual income is required";
        } else if (isNaN(values.motherAnnualIncome)) {
            errors.motherAnnualIncome = "Enter a valid annual income";
        }

        if (!values.religion) {
            errors.religion = "Religion is required";
        }

        if (!values.bloodgroup) {
            errors.bloodgroup = "Blood group is required";
        }

        if (!values.identificationMarks) {
            errors.identificationMarks = "Identification marks are required";
        }

        return errors;
    };

    const navigate = useNavigate();
    useEffect(() => {
        setFormErrors(validate(formData));
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(formErrors).length === 0) {
            navigate('/AdmissionDetails');
            try {
                const response = await axios.post('http://localhost:5000/forms/submitpersonaldetails', formData);
                console.log('Server response:', response.data);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>ADMISSION FORM</h1>
                <h5>(Fill in CAPITAL letters only)</h5>

                <label htmlFor="admissionNo">Admission Number:</label>
                <input type="text" id="admissionNo" name="admissionNo" value={formData.admissionNo} onChange={handleChange} />
                {touchedFields.admissionNo && <p>{formErrors.admissionNo}</p>}

                <label htmlFor="rollNo">Roll Number/Hall Ticket No:</label>
                <input type="text" id="rollNo" name="rollNo" value={formData.rollNo} onChange={handleChange} />
                {touchedFields.rollNo && <p>{formErrors.rollNo}</p>}

                <label htmlFor="program">Program:</label>
                <select id="program" name="program" value={formData.program} onChange={handleChange}>
                    <option value="">Select Program</option>
                    <option value="B.E./B.TECH">B.E./B.TECH</option>
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="Others">Others</option>
                </select>
                {touchedFields.program && <p>{formErrors.program}</p>}

                <label htmlFor="branch">Branch:</label>
                <select id="branch" name="branch" value={formData.branch} onChange={handleChange}>
                    <option value="">Select Branch</option>
                    <option value="IT">Information Technology (IT)</option>
                    <option value="CSE">Computer Science and Engineering (CSE)</option>
                    <option value="MECH">Mechanical Engineering (MECH)</option>
                    <option value="CIVIL">Civil Engineering (CIVIL)</option>
                    <option value="AIML">Artificial Intelligence and Machine Learning (AIML)</option>
                    <option value="ECE">Electronic Engineering (ECE)</option>
                    <option value="BIOTECH">Biotechnology (BIOTECH)</option>
                </select>
                {touchedFields.branch && <p>{formErrors.branch}</p>}

                <h3>Personal Details:</h3>

                <label htmlFor="studentName">Name of the Student (As per S.S.C / X Class):</label>

                <input type="text" id="studentName" name="studentName" value={formData.studentName} onChange={handleChange} />
                {touchedFields.studentName && <p>{formErrors.studentName}</p>}

                <label htmlFor="fatherName">Father's Name (As per S.S.C / X Class):</label>
                <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                {touchedFields.fatherName && <p>{formErrors.fatherName}</p>}

                <label htmlFor="motherName">Mother's Name (As per S.S.C / X Class):</label>
                <input type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} />
                {touchedFields.motherName && <p>{formErrors.motherName}</p>}

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
                {touchedFields.dob && <p>{formErrors.dob}</p>}

                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {touchedFields.gender && <p>{formErrors.gender}</p>}

                <label htmlFor="fatherOccupation">Father's Occupation:</label>
                <input type="text" id="fatherOccupation" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} />
                {touchedFields.fatherOccupation && <p>{formErrors.fatherOccupation}</p>}

                <label htmlFor="fatherAnnualIncome">Annual Income:</label>
                <input
                    type="text"
                    id="fatherAnnualIncome"
                    name="fatherAnnualIncome"
                    value={formData.fatherAnnualIncome}
                    onChange={handleChange}
                />
                {touchedFields.fatherAnnualIncome && <p>{formErrors.fatherAnnualIncome}</p>}

                <label htmlFor="motherOccupation">Mother's Occupation:</label>
                <input type="text" id="motherOccupation" name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} />
                {touchedFields.motherOccupation && <p>{formErrors.motherOccupation}</p>}

                <label htmlFor="motherAnnualIncome">Annual Income:</label>
                <input
                    type="text"
                    id="motherAnnualIncome"
                    name="motherAnnualIncome"
                    value={formData.motherAnnualIncome}
                    onChange={handleChange}
                />
                {touchedFields.motherAnnualIncome && <p>{formErrors.motherAnnualIncome}</p>}

                <label htmlFor="nationality">Nationality:</label>
                <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} />
                {touchedFields.nationality && <p>{formErrors.nationality}</p>}

                <label htmlFor="religion">Religion:</label>
                <input type="text" id="religion" name="religion" value={formData.religion} onChange={handleChange} />
                {touchedFields.religion && <p>{formErrors.religion}</p>}

                <label htmlFor="bloodGroup">Blood Group:</label>
                <select
                    id="bloodGroup"
                    name="bloodgroup"
                    value={formData.bloodgroup}
                    onChange={handleChange}
                >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
                {touchedFields.bloodgroup && <p>{formErrors.bloodgroup}</p>}

                <label htmlFor="studentIdentification">Student Identification Marks (As per Class X):</label>
                <input
                    type="text"
                    id="studentIdentification"
                    name="identificationMarks"
                    value={formData.identificationMarks}
                    onChange={handleChange}
                />
                {touchedFields.identificationMarks && <p>{formErrors.identificationMarks}</p>}

                <button type="submit">next</button>
            </form>
        </div>
    )
}

export default PersonalDetails