// import React, { useState } from 'react';
// import axios from 'axios';
// function EducationDetails() {
//   const [studentInfo, setStudentInfo] = useState({
//     ssc: {
//       board: '',
//       hallTicketNumber: '',
//       maxMarks: '',
//       marksSecured: '',
//       totalAggregate: '',
//       groupPercentage: '',
//       passingMonthYear: '',
//     },
//     inter: {
//       board: '',
//       hallTicketNumber: '',
//       maxMarks: '',
//       marksSecured: '',
//       totalAggregate: '',
//       groupPercentage: '',
//       passingMonthYear: '',
//     },
//     degree: {
//       board: '',
//       hallTicketNumber: '',
//       maxMarks: '',
//       marksSecured: '',
//       totalAggregate: '',
//       groupPercentage: '',
//       passingMonthYear: '',
//     },
//   });

//   const handleChange = (section, field, value) => {
//     setStudentInfo((prevData) => ({
//       ...prevData,
//       [section]: {
//         ...prevData[section],
//         [field]: value,
//       },
//     }));
//   };

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/forms/submiteducationdetails', studentInfo);
//       console.log('Server response:', response.data);
//       // window.location.href = '/Instructions';
//     } catch (error) {
//       console.log(error)
//     }
//     console.log('Form submitted:', studentInfo);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* SSC Section */}
//         <h2>Education Details:</h2>
//         <h3>S.S.C. / X Class </h3>
//         <label htmlFor="sscBoard">Board/University:</label>
//         <input
//           type="text"
//           id="sscBoard"
//           name="sscBoard"
//           value={studentInfo.ssc.board}
//           onChange={(e) => handleChange('ssc', 'board', e.target.value)}
//         />
//         <label htmlFor="sscHallTicket">Hall Ticket Number:</label>
//         <input
//           type="text"
//           id="sscHallTicket"
//           name="sscHallTicket"
//           value={studentInfo.ssc.hallTicketNumber}
//           onChange={(e) => handleChange('ssc', 'hallTicketNumber', e.target.value)}
//         />
//         <label htmlFor="sscMaxMarks">Maximum Marks:</label>
//         <input
//           type="text"
//           id="sscMaxMarks"
//           name="sscMaxMarks"
//           value={studentInfo.ssc.maxMarks}
//           onChange={(e) => handleChange('ssc', 'maxMarks', e.target.value)}
//         />
//         <label htmlFor="sscMarksSecured">Marks Secured:</label>
//         <input
//           type="text"
//           id="sscMarksSecured"
//           name="sscMarksSecured"
//           value={studentInfo.ssc.marksSecured}
//           onChange={(e) => handleChange('ssc', 'marksSecured', e.target.value)}
//         />
//         <label htmlFor="sscTotalAggregate">Total Aggregate (%):</label>
//         <input
//           type="text"
//           id="sscTotalAggregate"
//           name="sscTotalAggregate"
//           value={studentInfo.ssc.totalAggregate}
//           onChange={(e) => handleChange('ssc', 'totalAggregate', e.target.value)}
//         />
//         <label htmlFor="sscGroupPercentage">Group (%):</label>
//         <input
//           type="text"
//           id="sscGroupPercentage"
//           name="sscGroupPercentage"
//           value={studentInfo.ssc.groupPercentage}
//           onChange={(e) => handleChange('ssc', 'groupPercentage', e.target.value)}
//         />
//         <label htmlFor="sscPassingMonthYear">Month & Year of Passing:</label>
//         <input
//           type="text"
//           id="sscPassingMonthYear"
//           name="sscPassingMonthYear"
//           value={studentInfo.ssc.passingMonthYear}
//           onChange={(e) => handleChange('ssc', 'passingMonthYear', e.target.value)}
//         />
//         {/* Add other SSC fields */}
//         <h3>Inter / XII / Polytechnic</h3>
//         <label htmlFor="interBoard">Board/University:</label>
//         <input
//           type="text"
//           id="interBoard"
//           name="interBoard"
//           value={studentInfo.inter.board}
//           onChange={(e) => handleChange('inter', 'board', e.target.value)}
//         />
//         <label htmlFor="interHallTicket">Hall Ticket Number:</label>
//         <input
//           type="text"
//           id="interHallTicket"
//           name="interHallTicket"
//           value={studentInfo.inter.hallTicketNumber}
//           onChange={(e) => handleChange('inter', 'hallTicketNumber', e.target.value)}
//         />
//         <label htmlFor="interMaxMarks">Maximum Marks:</label>
//         <input
//           type="text"
//           id="interMaxMarks"
//           name="interMaxMarks"
//           value={studentInfo.inter.maxMarks}
//           onChange={(e) => handleChange('inter', 'maxMarks', e.target.value)}
//         />
//         <label htmlFor="interMarksSecured">Marks Secured:</label>
//         <input
//           type="text"
//           id="interMarksSecured"
//           name="interMarksSecured"
//           value={studentInfo.inter.marksSecured}
//           onChange={(e) => handleChange('inter', 'marksSecured', e.target.value)}
//         />
//         <label htmlFor="interTotalAggregate">Total Aggregate (%):</label>
//         <input
//           type="text"
//           id="interTotalAggregate"
//           name="interTotalAggregate"
//           value={studentInfo.inter.totalAggregate}
//           onChange={(e) => handleChange('inter', 'totalAggregate', e.target.value)}
//         />
//         <label htmlFor="interGroupPercentage">Group (%):</label>
//         <input
//           type="text"
//           id="interGroupPercentage"
//           name="interGroupPercentage"
//           value={studentInfo.inter.groupPercentage}
//           onChange={(e) => handleChange('inter', 'groupPercentage', e.target.value)}
//         />
//         <label htmlFor="interPassingMonthYear">Month & Year of Passing:</label>
//         <input
//           type="text"
//           id="interPassingMonthYear"
//           name="interPassingMonthYear"
//           value={studentInfo.inter.passingMonthYear}
//           onChange={(e) => handleChange('inter', 'passingMonthYear', e.target.value)}
//         />
//         {/* Add other Inter fields */}

//         {/* Degree Section */}
//         <h3>Degree (Specify)(For MBA/MCA/M.E/M.Tech)</h3>
//         <label htmlFor="degreeBoard">Board/University:</label>
//         <input
//           type="text"
//           id="degreeBoard"
//           name="degreeBoard"
//           value={studentInfo.degree.board}
//           onChange={(e) => handleChange('degree', 'board', e.target.value)}
//         />
//         <label htmlFor="degreeHallTicket">Hall Ticket Number:</label>
//         <input
//           type="text"
//           id="degreeHallTicket"
//           name="degreeHallTicket"
//           value={studentInfo.degree.hallTicketNumber}
//           onChange={(e) => handleChange('degree', 'hallTicketNumber', e.target.value)}
//         />
//         <label htmlFor="degreeMaxMarks">Maximum Marks:</label>
//         <input
//           type="text"
//           id="degreeMaxMarks"
//           name="degreeMaxMarks"
//           value={studentInfo.degree.maxMarks}
//           onChange={(e) => handleChange('degree', 'maxMarks', e.target.value)}
//         />
//         <label htmlFor="degreeMarksSecured">Marks Secured:</label>
//         <input
//           type="text"
//           id="degreeMarksSecured"
//           name="degreeMarksSecured"
//           value={studentInfo.degree.marksSecured}
//           onChange={(e) => handleChange('degree', 'marksSecured', e.target.value)}
//         />
//         <label htmlFor="degreeTotalAggregate">Total Aggregate (%):</label>
//         <input
//           type="text"
//           id="degreeTotalAggregate"
//           name="degreeTotalAggregate"
//           value={studentInfo.degree.totalAggregate}
//           onChange={(e) => handleChange('degree', 'totalAggregate', e.target.value)}
//         />
//         <label htmlFor="degreeGroupPercentage">Group (%):</label>
//         <input
//           type="text"
//           id="degreeGroupPercentage"
//           name="degreeGroupPercentage"
//           value={studentInfo.degree.groupPercentage}
//           onChange={(e) => handleChange('degree', 'groupPercentage', e.target.value)}
//         />
//         <label htmlFor="degreePassingMonthYear">Month & Year of Passing:</label>
//         <input
//           type="text"
//           id="degreePassingMonthYear"
//           name="degreePassingMonthYear"
//           value={studentInfo.degree.passingMonthYear}
//           onChange={(e) => handleChange('degree', 'passingMonthYear', e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default EducationDetails

import React, { useState } from 'react';
import axios from 'axios';

function EducationDetails() {
  const [studentInfo, setStudentInfo] = useState({
    ssc: {
      board: '',
      hallTicketNumber: '',
      maxMarks: '',
      marksSecured: '',
      totalAggregate: '',
      groupPercentage: '',
      passingMonthYear: '',
    },
    inter: {
      board: '',
      hallTicketNumber: '',
      maxMarks: '',
      marksSecured: '',
      totalAggregate: '',
      groupPercentage: '',
      passingMonthYear: '',
    },
    degree: {
      board: '',
      hallTicketNumber: '',
      maxMarks: '',
      marksSecured: '',
      totalAggregate: '',
      groupPercentage: '',
      passingMonthYear: '',
    },
  });

  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const handleChange = (section, field, value) => {
    setStudentInfo((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleFocus = (section, field) => {
    setTouchedFields((prevTouched) => ({
      ...prevTouched,
      [`${section}-${field}`]: true,
    }));
  };

  const validate = (values) => {
    const errors = {};

    // SSC validation
    ['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].forEach((field) => {
      if (!values.ssc[field]) {
        errors[`ssc-${field}`] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    // Inter validation
    ['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].forEach((field) => {
      if (!values.inter[field]) {
        errors[`inter-${field}`] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    // Degree validation
    ['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].forEach((field) => {
      if (!values.degree[field]) {
        errors[`degree-${field}`] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(studentInfo);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/forms/submiteducationdetails', studentInfo);
        console.log('Server response:', response.data);
      } catch (error) {
        console.log(error);
      }
      console.log('Form submitted:', studentInfo);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* SSC Section */}
        <h2>Education Details:</h2>
        <h3>S.S.C. / X Class </h3>
        {['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].map((field) => (
          <div key={`ssc-${field}`}>
            <label htmlFor={`ssc-${field}`}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type="text"
              id={`ssc-${field}`}
              name={`ssc-${field}`}
              value={studentInfo.ssc[field]}
              onChange={(e) => handleChange('ssc', field, e.target.value)}
              onFocus={() => handleFocus('ssc', field)}
            />
            {touchedFields[`ssc-${field}`] && formErrors[`ssc-${field}`] && <p>{formErrors[`ssc-${field}`]}</p>}
          </div>
        ))}

        {/* Add other SSC fields */}
        <h3>Inter / XII / Polytechnic</h3>
        {['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].map((field) => (
          <div key={`inter-${field}`}>
            <label htmlFor={`inter-${field}`}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type="text"
              id={`inter-${field}`}
              name={`inter-${field}`}
              value={studentInfo.inter[field]}
              onChange={(e) => handleChange('inter', field, e.target.value)}
              onFocus={() => handleFocus('inter', field)}
            />
            {touchedFields[`inter-${field}`] && formErrors[`inter-${field}`] && <p>{formErrors[`inter-${field}`]}</p>}
          </div>
        ))}

        {/* Degree Section */}
        <h3>Degree (Specify)(For MBA/MCA/M.E/M.Tech)</h3>
        {['board', 'hallTicketNumber', 'maxMarks', 'marksSecured', 'totalAggregate', 'groupPercentage', 'passingMonthYear'].map((field) => (
          <div key={`degree-${field}`}>
            <label htmlFor={`degree-${field}`}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type="text"
              id={`degree-${field}`}
              name={`degree-${field}`}
              value={studentInfo.degree[field]}
              onChange={(e) => handleChange('degree', field, e.target.value)}
              onFocus={() => handleFocus('degree', field)}
            />
            {touchedFields[`degree-${field}`] && formErrors[`degree-${field}`] && <p>{formErrors[`degree-${field}`]}</p>}
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EducationDetails;
