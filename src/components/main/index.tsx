import React, { useEffect, useState, useRef, useMemo } from 'react';
// import html2pdf from 'html2pdf-jspdf2';

import ResumeLeft from './resumeLeft';
import ResumeRight from './resumeRight';
import DINH_THANH_TAI_CV from '../../assets/DINH_THANH_TAI_CV.pdf';

import './index.scss';

const Main: React.FC = () => {
    const [resume, setResume] = useState<HTMLDivElement>();
    const [isScale, setIsScale] = useState<boolean>(false);
    const generatePDF = useRef<HTMLAnchorElement | null>(null);
    

    useEffect(() => {
        const resumePDF = document.querySelector('.resume');

        if (resumePDF) {
            setResume(resumePDF as HTMLDivElement);
        } 
    }, []);

    // let opt = useMemo(() => ({
    //     margin:       0,
    //     filename:     'DINH_THANH_TAI_CV.pdf',
    //     image:        { type: 'pdf', quality: 0.98 },
    //     html2canvas:  { scale: 4 },
    //     jsPDF:        { format: [250, 580], orientation: 'p' }
    //   }),[resume]) 

    const handlePrintPDF = () => {
        document.body.classList.add('scale-cv');
        setIsScale(true);

        setTimeout(() => {
            document.body.classList.remove('scale-cv');
            setIsScale(false);
        }
        , 2000);

        if (generatePDF.current) {
            generatePDF.current.href = DINH_THANH_TAI_CV;
        }

        // export new version of pdf 
        // html2pdf(resume, opt)
    }

    return (
        <main className="l-main bd-container">
            <div className="resume">
                <ResumeLeft ref={generatePDF} onPrintPDF={handlePrintPDF} />
                <ResumeRight isScale={isScale} />
            </div>
        </main>
    )
}

export default Main;