import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonalDetails from "./components/PersonalDetails";
import AdmissionDetails from "./components/AdmissionDetails";
import CommunicationDetails from "./components/CommunicationDetails";
import EducationDetails from "./components/EducationDetails";
import Instructions from './components/Instructions';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Home" />
          <Route path="/About" />
          <Route path="/Contact" />
        </Routes>
        <Routes>
          <Route path="/" element={<PersonalDetails />} />
          <Route path="/AdmissionDetails" element={<AdmissionDetails />} />
          <Route path="/CommunicationDetails" element={<CommunicationDetails />} />
          <Route path="/EducationDetails" element={<EducationDetails />} />
          <Route path="/Instructions" element={<Instructions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import PersonalDetails from "./components/PersonalDetails";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AdmissionDetails from "./components/AdmissionDetails";
// import CommunicationDetails from "./components/CommunicationDetails";
// import EducationDetails from "./components/EducationDetails";
// import Navbar from "./components/Navbar";
// import SideNav from "./components/SideNav";

// function App() {
//   return (
//     <div className="App">  

//       <BrowserRouter>
//         <Navbar></Navbar>
//         <Routes>
//           <Route path="/Home" />
//           <Route path="/About" />
//           <Route path="/Contact" />
//         </Routes>
//       </BrowserRouter>
//       <BrowserRouter>
//         <SideNav />
//         <Routes>
//           <Route path="/" element={<PersonalDetails />} />
//           <Route path="/AdmissionDetails" element={<AdmissionDetails />} />
//           <Route path="/CommunicationDetails" element={<CommunicationDetails />} />
//           <Route path="/EducationDetails" element={<EducationDetails />} />
//         </Routes>
//       </BrowserRouter>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<PersonalDetails />} />
//           <Route path="/AdmissionDetails" element={<AdmissionDetails />} />
//           <Route path="/CommunicationDetails" element={<CommunicationDetails />} />
//           <Route path="/EducationDetails" element={<EducationDetails />} />
//         </Routes>
//       </BrowserRouter>
//       {/* <AdmissionDetails /> */}
//     </div>
//   );
// }

// export default App;





