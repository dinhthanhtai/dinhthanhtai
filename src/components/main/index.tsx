import React, { useEffect, useMemo, useState } from 'react';
import html2pdf from 'html2pdf-jspdf2';

import ResumeLeft from './resumeLeft';
import ResumeRight from './resumeRight';

import './index.css';

const Main: React.FC = () => {
    const [resume, setResume] = useState<HTMLDivElement>();

    useEffect(() => {
        const resumePDF = document.querySelector('.resume');       
        if (resumePDF) {
            setResume(resumePDF as HTMLDivElement);
        } 
    })

    let opt = useMemo(() => ({
        margin:       0,
        filename:     'DINH_THANH_TAI_CV.pdf',
        image:        { type: 'pdf', quality: 0.98 },
        html2canvas:  { scale: 4 },
        jsPDF:        { format: 'a4', orientation: 'p' }
      }),[resume]) 

    const handlePrintPDF = () => {
        html2pdf(resume, opt)
    }

    return (
        <main className="l-main bd-container">
            <div className="resume">
                <ResumeLeft onPrintPDF={handlePrintPDF} />
                <ResumeRight />
            </div>
        </main>
    )
}

export default Main;