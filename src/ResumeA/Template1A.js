import React, { useRef, useState } from 'react';
import './Template1A.css';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { useNavigate } from 'react-router-dom';
import Header from '../Project/Header';

const Template1A = ({ resume }) => {


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
  








    const [showButtons, setShowButtons] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const navigate = useNavigate();
  const handleButtonClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
        <Header/><br></br><br></br><br></br><br></br>
    <div class="body-template2-43">
        <div class ="container-template2-43" ref={pdfRef}  >
          <div class="left-template2-43"  style={{ backgroundColor: selectedColor }}>
            <div class="profileText-template2-43 " >
                <h2>{resume.fname} {resume.lname}<br></br><span>{resume.title}</span></h2>
            </div>

            <div class="info-template2-43">
                <h3 class="title-template2-43">Contact Info</h3>

                <ul>
                    <li>
                        <span class="icon-template-43"></span>
                        <span class="text-template-43">Name: {resume.fname} {resume.lname}</span>
                    </li>

                    <li>
                        <span class="icon-template-43"></span>
                        
                    </li>

                    <li>
                        <span class="icon-template-43"></span>
                        <span class="text-template-43">Email: {resume.email}</span>
                    </li>

                    <li>
                        <span class="icon-template-43"></span>
                        <span class="text-template-43">Linkedin: {resume.linkedin}</span>
                    </li>

                    <li>
                        <span class="icon-template-43"></span>
                        <span class="text-template-43">GitHub: {resume.github}</span>
                    </li>

                </ul>
            </div>

            <div class="info-template2-43 education-template2-43">
                <h3 class="title-template2-43">Education</h3>
                <ul>
                    <li>
                        
                        <h4>{resume.edu1}</h4>
                    </li>

                    <li>
                        
                        <h4>{resume.edu2}</h4>
                        
                    </li>

                    
                </ul>
            </div>

            <div class="info-template2-43 language-template2-43">
                <h3 class="title-template2-43">Languages</h3>
                <ul>
                    <li>
                        <span class="text-template2-43">English</span>
                       
                    </li>

                    <li>
                        <span class="text-template2-43">Hindi</span>
                        
                    </li>
                </ul>
            </div>
          </div>
          <div class="right-template2-43">
            <div class="about-template2-43">
                <h2 class="title2-template2-43">Profile</h2>
                <p>{resume.des1}</p>
            </div>

            <div class="about-template2-43">
            <h2 class="title2-template2-43">Experience</h2>
            <div class="box-template2-43">
                <div class="year-company-template2-43">
                    
                    <h5>{resume.cname1}</h5>
                    <h5>{resume.dur1} years</h5>
                </div>
                
                <div lass="text-template2-43">
                    <h4>{resume.role1}</h4>
                    
                </div>
            </div>

            <div class="box-template2-43">
                <div class="year-company-template2-43">
                    
                    <h5>{resume.cname2}</h5>
                    <h5>{resume.dur2} years</h5>
                </div>
                
                <div lass="text-template2-43">
                    <h4>{resume.role2}</h4>
                    
                </div>
            </div>
            </div>

            <div class="about-tmplate2-43 skills-template2-43">
                <h2 class="title2-template2-43">Professional skills</h2>
                <div class="box-template2-43">
                    <h4>{resume.skill1}</h4>
                </div>

                <div class="box-template2-43">
                    <h4>{resume.skill2}</h4>
                </div>

                <div class="box-template2-43">
                    <h4>{resume.skill3}</h4>
                </div>

                <div class="box-template2-43">
                    <h4>{resume.skill4}</h4>
                </div>

                <div class="box-template2-43">
                    <h4>{resume.skill5}</h4>
                </div>

                
            </div>

            
          </div>
        </div>
        <button onClick={downloadPdf} class= "button-download">Download</button>
  
        <button className="button-right-template" onClick={() => setShowButtons(!showButtons)}>Click Me</button>
      {showButtons && (
        <div className="hover-buttons-template">
          <button className="hover-button-1-template" onClick={() => handleButtonClick('rgb(255, 255, 90)')}>Button 1</button>
          <button className="hover-button-2-template" onClick={() => handleButtonClick('rgb(255, 145, 0)')}>Button 2</button>
          <button className="hover-button-3-template" onClick={() => handleButtonClick('#3498db')}>Button 3</button>
          <button className="hover-button-4-template" onClick={() => handleButtonClick('rgb(252, 58, 58)')}>Button 4</button>
          <button className="hover-button-5-template" onClick={() => handleButtonClick('rgb(4, 226, 4)')}>Button 5</button>
          <button className="hover-button-6-template" onClick={() => handleButtonClick('rgb(255, 0, 255)')}>Button 6</button>
        </div>
      )}
     
     </div>
    </div>
  )
}

export default Template1A