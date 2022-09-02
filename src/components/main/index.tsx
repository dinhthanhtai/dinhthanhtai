import ResumeLeft from './resumeLeft';

import './index.css';
import ResumeRight from './resumeRight';

const Main: React.FC = () => {
    return (
        <main className="l-main bd-container">
            <div className="resume">
                <ResumeLeft />
                <ResumeRight />
            </div>
        </main>
    )
}

export default Main;