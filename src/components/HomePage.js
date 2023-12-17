import React from 'react'
import { Worker } from "@phuocng/react-pdf-viewer";
import Viewer from "@phuocng/react-pdf-viewer";

import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

import samplePdf from "../components/demo.pdf";
import BasicAccordion from './Accordion';
const HomePage = () => {
    return (
        <>
            <div className='container'>
                <div>
                    <div>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                            <Viewer fileUrl={samplePdf} />
                        </Worker>
                    </div>
                </div>
                <div className='accordianContainer'>
                    <BasicAccordion />
                </div>
            </div>
        </>
    )
}

export default HomePage;