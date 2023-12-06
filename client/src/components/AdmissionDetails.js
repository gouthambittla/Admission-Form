import React, { useState, useEffect } from 'react';
import '../styles/style.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdmissionDetails() {
    const [formData, setFormData] = useState({
        dateOfAdmission: '',
        cetHallTicketNo: '',
        selectedCET: '',
        cetRank: '',
        selectedAdmissionCategory: '',
        selectedCategory: '',
        casteName: '',
        selectedSpecialCategory: '',
        selectedArea: '',
        feeReimbursement: '',
        selectedScholarshipEligibility: '',
    });
    
    const [touchedFields, setTouchedFields] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setTouchedFields((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    const handleDropdownChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setTouchedFields((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    const validateForm = (values) => {
        const errors = {};

        if (!values.dateOfAdmission) {
            errors.dateOfAdmission = 'Date of Admission is required';
        }

        if (!values.cetHallTicketNo) {
            errors.cetHallTicketNo = 'CET Hall Ticket No. is required';
        } else if (isNaN(values.cetHallTicketNo)) {
            errors.cetHallTicketNo = 'Enter a valid CET HallTicket Number';
        }

        if (!values.selectedCET) {
            errors.selectedCET = 'Qualified CET Type is required';
        }

        if (!values.cetRank) {
            errors.cetRank = 'CET Rank is required';
        } else if (isNaN(values.cetRank)) {
            errors.cetRank = 'Enter a valid CET Rank';
        }

        if (!values.selectedAdmissionCategory) {
            errors.selectedAdmissionCategory = 'Admission Category is required';
        }

        if (!values.selectedCategory) {
            errors.selectedCategory = 'Category is required';
        }

        if (!values.casteName) {
            errors.casteName = 'Caste Name is required';
        }

        if (!values.selectedSpecialCategory) {
            errors.selectedSpecialCategory = 'Special Category is required';
        }

        if (!values.selectedArea) {
            errors.selectedArea = 'Area is required';
        }

        if (!values.feeReimbursement) {
            errors.feeReimbursement = 'Please select Fee Reimbursement';
        }

        if (!values.selectedScholarshipEligibility) {
            errors.selectedScholarshipEligibility = 'Scholarship Eligibility is required';
        }

        return errors;
    };

    const navigate = useNavigate();

    useEffect(() => {
        setFormErrors(validateForm(formData));
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm(formData);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                navigate('/CommunicationDetails');
                const response = await axios.post('http://localhost:5000/forms/submitAdmissionDetails', formData);
                console.log('Server response:', response.data);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Admission Details:</h2>
                <label htmlFor="dateOfAdmission">Date of Admission:</label>
                <input type="date" id="dateOfAdmission" name="dateOfAdmission" value={formData.dateOfAdmission} onChange={handleChange} />
                {touchedFields.dateOfAdmission && <p>{formErrors.dateOfAdmission}</p>}

                <label>Qualified CET Type:</label>
                <select value={formData.selectedCET} onChange={handleDropdownChange} name="selectedCET" >
                    <option value="">Select CET Type</option>
                    <option value="eamcet">EAMCET</option>
                    <option value="jee">JEE</option>
                    <option value="ecet">ECET</option>
                    <option value="icet">ICET</option>
                </select>
                {touchedFields.selectedCET && <p>{formErrors.selectedCET}</p>}

                <label htmlFor="cetHallTicketNo">CET Hall Ticket No.:</label>
                <input type="text" id="cetHallTicketNo" name="cetHallTicketNo" value={formData.cetHallTicketNo} onChange={handleChange} />
                {touchedFields.cetHallTicketNo && <p>{formErrors.cetHallTicketNo}</p>}



                <label htmlFor="cetRank">CET Rank:</label>
                <input type="text" id="cetRank" name="cetRank" value={formData.cetRank} onChange={handleChange} />
                {touchedFields.cetRank && <p>{formErrors.cetRank}</p>}


                <label htmlFor="selectedAdmissionCategory">Admission Category:</label>
                <select value={formData.selectedAdmissionCategory} onChange={handleDropdownChange} name="selectedAdmissionCategory" >
                    <option value="">Select Admission Category</option>
                    <option value="convenorquota">Convenor Quota(A-Category)</option>
                    <option value="merit">Merit</option>
                    <option value="nri">NRI</option>
                    <option value="nriSponsored">NRI Sponsored</option>
                    <option value="spot">SPOT</option>
                </select>
                {touchedFields.selectedAdmissionCategory && <p>{formErrors.selectedAdmissionCategory}</p>}

                <label htmlFor="selectedCategory">Category:</label>
                <select value={formData.selectedCategory} onChange={handleDropdownChange} name="selectedCategory" >
                    <option value="">Select Category</option>
                    <option value="oc">OC</option>
                    <option value="sc">SC</option>
                    <option value="st">ST</option>
                    <option value="bc-a">BC-A</option>
                    <option value="bc-b">BC-B</option>
                    <option value="bc-c">BC-C</option>
                    <option value="bc-d">BC-D</option>
                    <option value="bc-e">BC-E</option>
                    <option value="others">OTHERS(Specify)</option>
                </select>
                {touchedFields.selectedCategory && <p>{formErrors.selectedCategory}</p>}

                <label For="casteName">Caste Name:</label>
                <input
                    type="text"
                    id="casteName"
                    name="casteName"
                    value={formData.casteName} onChange={handleChange}

                />
                {touchedFields.casteName && <p>{formErrors.casteName}</p>}

                <label htmlFor="selectedSpecialCategory">Special Category:</label>
                <select
                    value={formData.selectedSpecialCategory}
                    onChange={handleDropdownChange}
                    name="selectedSpecialCategory"

                >
                    <option value="">Select Special Category</option>
                    <option value="phc">PHC</option>
                    <option value="ncc">NCC</option>
                    <option value="cap">CAP</option>
                    <option value="sports">SPORTS</option>
                </select>
                {touchedFields.selectedSpecialCategory && <p>{formErrors.selectedSpecialCategory}</p>}

                <label htmlFor="selectedArea">Area:</label>
                <select
                    value={formData.selectedArea}
                    onChange={handleDropdownChange}
                    name="selectedArea"

                >
                    <option value="">Select Area</option>
                    <option value="ou">OU</option>
                    <option value="au">AU</option>
                    <option value="svu">SVU</option>
                    <option value="others">OTHERS</option>
                </select>
                {touchedFields.selectedArea && <p>{formErrors.selectedArea}</p>}


                <label htmlFor="feeReimbursement">Fee Reimbursement:</label>
                <select
                    value={formData.feeReimbursement}
                    onChange={handleDropdownChange}
                    name="feeReimbursement"

                >
                    <option value="">Select Fee Reimbursement</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                {touchedFields.feeReimbursement && <p>{formErrors.feeReimbursement}</p>}

                <label htmlFor="selectedScholarshipEligibility">Scholarship Eligibility:</label>
                <select
                    value={formData.selectedScholarshipEligibility}
                    onChange={handleDropdownChange}
                    name="selectedScholarshipEligibility"
                >
                    <option value="">Select Scholarship Eligibility</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                {touchedFields.selectedScholarshipEligibility && <p>{formErrors.selectedScholarshipEligibility}</p>}
                <button type='submit'>Next</button>
            </form>
        </div>
    )
}       
export default AdmissionDetails;