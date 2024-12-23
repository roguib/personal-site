import './JobHistory.css';
import oracleBrandingLogo from '../../images/oracle-branding-logo.png'
import companyNoLogo from '../../images/company-no-logo.png';
import RowSeparator from './RowSeparator/RowSeparator';

const JOB_DATA = [{
    position: 'Senior Member of Technical Staff at Oracle - IC3',
    project: 'Visual Builder Studio',
    date: '2022 - Act.',
    brandingLogo: oracleBrandingLogo
}, {
    position: 'Member of Technical Staff at Oracle - IC2',
    project: 'Visual Builder Studio',
    date: '2021 - 2022',
    brandingLogo: oracleBrandingLogo
}, {
    position: 'Software Developer',
    project: 'Several small projects',
    date: '2020 - 2021',
    brandingLogo: companyNoLogo
}];

function JobHistory() {
    return (
        <div id="job-history" className="section">
            <h1 className="title">Career</h1>
            <div>
                {JOB_DATA.map(({ position, project, date, brandingLogo }, index) => (
                    <>
                    <div className="job-row">
                    <img className="job-branding-logo" src={brandingLogo} />
                        <div className="job-description">
                            <span>{position}</span>
                            <span>{project}</span>
                            <span>{date}</span>
                        </div>
                    </div>
                    {index < JOB_DATA.length - 1 ? (
                        <RowSeparator />
                    ) : (<></>)}
                    </>               
                ))}
            </div>
        </div>
    );
}

export default JobHistory;