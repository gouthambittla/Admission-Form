import React, { useState } from 'react';
import '../styles/style.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CommunicationDetails() {

    const navigate = useNavigate();
    const [permanentHouseNo, setPermanentHouseNo] = useState('');
    const [permanentStreet, setPermanentStreet] = useState('');
    const [permanentLandmark, setPermanentLandmark] = useState('');
    const [permanentArea, setPermanentArea] = useState('');
    const [permanentMandal, setPermanentMandal] = useState('');
    const [permanentDistrict, setPermanentDistrict] = useState('');
    const [permanentPincode, setPermanentPincode] = useState('');
    const [permanentState, setPermanentState] = useState('');

    const [correspondenceHouseNo, setCorrespondenceHouseNo] = useState('');
    const [correspondenceStreet, setCorrespondenceStreet] = useState('');
    const [correspondenceLandmark, setCorrespondenceLandmark] = useState('');
    const [correspondenceArea, setCorrespondenceArea] = useState('');
    const [correspondenceMandal, setCorrespondenceMandal] = useState('');
    const [correspondenceDistrict, setCorrespondenceDistrict] = useState('');
    const [correspondencePincode, setCorrespondencePincode] = useState('');
    const [correspondenceState, setCorrespondenceState] = useState('');


    const [studentAadharNo, setStudentAadharNo] = useState('');
    const [studentMobileNo, setStudentMobileNo] = useState('');
    const [studentEmail, setStudentEmail] = useState('');

    const [parentMobileNo, setParentMobileNo] = useState('');
    const [parentEmail, setParentEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/EducationDetails');
        const communicationdata = {
            permanentAddress: {
                houseNo: permanentHouseNo,
                street: permanentStreet,
                landmark: permanentLandmark,
                area: permanentArea,
                mandal: permanentMandal,
                district: permanentDistrict,
                pincode: permanentPincode,
                state: permanentState
            },
            correspondenceAddress: {
                houseNo: correspondenceHouseNo,
                street: correspondenceStreet,
                landmark: correspondenceLandmark,
                area: correspondenceArea,
                mandal: correspondenceMandal,
                district: correspondenceDistrict,
                pincode: correspondencePincode,
                state: correspondenceState
            },
            contactDetails: {
                studentAadharNo,
                studentMobileNo,
                studentEmail
            },
            parentContactDetails: {
                parentMobileNo,
                parentEmail
            }
        };

        const response = await axios.post('http://localhost:5000/forms/submitcomunicationdetails', communicationdata);
        console.log('Server response:', response.data);
    };


    return (
        <div>
            <form onSubmit={handleSubmit} >
                {/* Permanent Address */}
                <h2>Communication Details: (Fill in CAPITAL letters only)</h2>
                <h3>Permanent Address:</h3>
                <label htmlFor="permanentHouseNo">H.No:</label>
                <input
                    type="text"
                    id="permanentHouseNo"
                    value={permanentHouseNo}
                    onChange={(e) => setPermanentHouseNo(e.target.value)}
                    required
                />

                <label htmlFor="permanentStreet">Street:</label>
                <input
                    type="text"
                    id="permanentStreet"
                    value={permanentStreet}
                    onChange={(e) => setPermanentStreet(e.target.value)}
                    required
                />

                <label htmlFor="permanentLandmark">Landmark:</label>
                <input
                    type="text"
                    id="permanentLandmark"
                    value={permanentLandmark}
                    onChange={(e) => setPermanentLandmark(e.target.value)}
                    required
                />

                <label htmlFor="permanentArea">Area(Village):</label>
                <input
                    type="text"
                    id="permanentArea"
                    value={permanentArea}
                    onChange={(e) => setPermanentArea(e.target.value)}
                    required
                />

                <label htmlFor="permanentMandal">Mandal:</label>
                <input
                    type="text"
                    id="permanentMandal"
                    value={permanentMandal}
                    onChange={(e) => setPermanentMandal(e.target.value)}
                    required
                />

                <label htmlFor="permanentDistrict">District:</label>
                <input
                    type="text"
                    id="permanentDistrict"
                    value={permanentDistrict}
                    onChange={(e) => setPermanentDistrict(e.target.value)}
                    required
                />

                <label htmlFor="permanentPincode">Pin Code:</label>
                <input
                    type="text"
                    id="permanentPincode"
                    value={permanentPincode}
                    onChange={(e) => setPermanentPincode(e.target.value)}
                    required
                />

                <label htmlFor="permanentState">State:</label>
                <input
                    type="text"
                    id="permanentState"
                    value={permanentState}
                    onChange={(e) => setPermanentState(e.target.value)}
                    required
                />

                {/* Correspondence Address */}
                <h3>Correspondence Address:</h3>
                <label htmlFor="correspondenceHouseNo">H.No:</label>
                <input
                    type="text"
                    id="correspondenceHouseNo"
                    value={correspondenceHouseNo}
                    onChange={(e) => setCorrespondenceHouseNo(e.target.value)}
                    required
                />

                <label htmlFor="correspondenceStreet">Street:</label>
                <input
                    type="text"
                    id="correspondenceStreet"
                    value={correspondenceStreet}
                    onChange={(e) => setCorrespondenceStreet(e.target.value)}
                    required
                />

                <label htmlFor="correspondenceLandmark">Landmark:</label>
                <input
                    type="text"
                    id="correspondenceLandmark"
                    value={correspondenceLandmark}
                    onChange={(e) => setCorrespondenceLandmark(e.target.value)}
                    required
                />

                <label htmlFor="correspondenceArea">Area(Village):</label>
                <input
                    type="text"
                    id="correspondenceArea"
                    value={correspondenceArea}
                    onChange={(e) => setCorrespondenceArea(e.target.value)}
                    required
                />

                <label htmlFor="correspondenceMandal">Mandal:</label>
                <input
                    type="text"
                    id="correspondenceMandal"
                    value={correspondenceMandal}
                    onChange={(e) => setCorrespondenceMandal(e.target.value)}
                    required
                />

                <label htmlFor="correspondenceDistrict">District:</label>
                <input
                    type="text"
                    id="correspondenceDistrict"
                    value={correspondenceDistrict}
                    onChange={(e) => setCorrespondenceDistrict(e.target.value)}
                    required
                />

                <label htmlFor="correspondencePincode">Pin Code:</label>
                <input
                    type="text"
                    id="correspondencePincode"
                    value={correspondencePincode}
                    onChange={(e) => setCorrespondencePincode(e.target.value)}
                    required
                />
                <label htmlFor="correspondenceState">State:</label>
                <input
                    type="text"
                    id="correspondenceState"
                    value={correspondenceState}
                    onChange={(e) => setCorrespondenceState(e.target.value)}
                    required
                />

                {/* Contact Details */}
                <h3>Contact Details:</h3>
                <label htmlFor="studentAadharNo">Student Aadhaar Number:</label>
                <input
                    type="text"
                    id="studentAadharNo"
                    value={studentAadharNo}
                    onChange={(e) => setStudentAadharNo(e.target.value)}
                    required
                />

                <label htmlFor="studentMobileNo">Student Mobile Number:</label>
                <input
                    type="text"
                    id="studentMobileNo"
                    value={studentMobileNo}
                    onChange={(e) => setStudentMobileNo(e.target.value)}
                    required
                />

                <label htmlFor="studentEmail">Student E-mail ID:</label>
                <input
                    type="email"
                    id="studentEmail"
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    required
                />
                <h3>Parent Contact Details:</h3>
                <label htmlFor="parentMobileNo">Parent Mobile Number:</label>
                <input
                    type="text"
                    id="parentMobileNo"
                    value={parentMobileNo}
                    onChange={(e) => setParentMobileNo(e.target.value)}
                    required
                />

                <label htmlFor="parentEmail">Parent E-mail ID:</label>
                <input
                    type="email"
                    id="parentEmail"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    required
                />

                <button type="submit">Next</button>
            </form>
        </div>
    );
}

export default CommunicationDetails