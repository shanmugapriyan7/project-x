import React,{useRef, useState} from 'react'
import './Template1.css'
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import Header from '../Project/Header';
const Template1 = ({ resume }) => {




  const pdfRef = useRef();
  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => { // Corrected syntax here
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf('p', 'mm', 'a4', true); // Corrected 'jspdf' to 'jspdf'
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight(); // Corrected to getHeight()
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('Resume.pdf');
    });
};
  /* const colors = ['#2d3436','#4834d4', '#2d4436', '#f9ca24','green','#38336b'];

  const setColor = (event) */

  const [showButtons, setShowButtons] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = (color) => {
    setSelectedColor(color);
  };
  return (
    <div class="body-template1-43">
      <Header/>
      <br></br><br></br><br></br><br></br><br></br>
      
      <div class="container-template1-43" ref={pdfRef} style={{ backgroundColor: selectedColor }}>
        <div class="header-template-43">
        <h1>{resume.fname} {resume.lname}</h1>

            <h3>{resume.title}</h3>
        </div>
        <hr></hr>

        <div class="main-template1-43">
            <div class="left-template1-43">
                <h2>Personal Information</h2>
                <p><strong>First Name: </strong>{resume.fname}</p>
                <p><strong>Last Name: </strong>{resume.lname}</p>
                <p><strong>Email: </strong>{resume.email}</p>
                <p><strong>Linkedin: </strong>{resume.linkedin}</p>
                <p><strong>GitHub: </strong>{resume.github}</p>

                <h2>Skills</h2>
                <ul>
                  <li>{resume.skill1}</li>
                  <li>{resume.skill2}</li>
                  <li>{resume.skill3}</li>
                  <li>{resume.skill4}</li>
                  <li>{resume.skill5}</li>
                </ul>
                <h2>Education</h2>
                
                <p>{resume.edu1}</p>
                
                <p>{resume.edu2}</p>
            </div>
            <div class="right-template1-43">
              <h2>Profile</h2>
              <p>{resume.des1}</p>
              <h2>Work Experience</h2>
              <h3>{resume.cname1}</h3>
              <p><strong>Role:</strong>{resume.role1}</p>
              <p><strong>Duration:</strong>{resume.dur1}</p>
              <br /><br />
              <h3>{resume.cname2}</h3>
              <p><strong>Role:</strong>{resume.role2}</p>
              <p><strong>Duration:</strong>{resume.dur2}</p>
              
            </div>

        </div>
      </div>
      <button onClick={downloadPdf} class= "button-download">Download</button>
      <button className="button-right" onClick={() => setShowButtons(!showButtons)}>Click Me</button>
      {showButtons && (
        <div className="hover-buttons">
          <button className="hover-button-1" onClick={() => handleButtonClick('rgb(255, 255, 90)')}>Button 1</button>
          <button className="hover-button-2" onClick={() => handleButtonClick('rgb(255, 145, 0)')}>Button 2</button>
          <button className="hover-button-3" onClick={() => handleButtonClick('#3498db')}>Button 3</button>
          <button className="hover-button-4" onClick={() => handleButtonClick('rgb(252, 58, 58)')}>Button 4</button>
          <button className="hover-button-5" onClick={() => handleButtonClick('rgb(4, 226, 4)')}>Button 5</button>
          <button className="hover-button-6" onClick={() => handleButtonClick('rgb(255, 0, 255)')}>Button 6</button>
        </div>
      )}
    </div>
  )
}

export default Template1