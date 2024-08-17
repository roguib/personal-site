import './JobHistory.css';
import oracleBrandingLogo from '../../images/oracle-branding-logo.png'
import RowSeparator from './RowSeparator/RowSeparator';

const JOB_DATA = [{
    position: 'Senior Member of Technical Staff - IC3',
    project: 'Visual Builder Studio',
    date: '2022 - Act.',
    brandingLogo: oracleBrandingLogo
}, {
    position: 'Member of Technical Staff - IC2',
    project: 'Visual Builder Studio',
    date: '2021 - 2022',
    brandingLogo: oracleBrandingLogo
}, {
    position: 'Software Developer',
    project: 'Several small projects',
    date: '2020 - 2021',
    brandingLogo: ''
}];

function JobHistory() {
    return (
        <div>
            {JOB_DATA.map(({ position, project, date, brandingLogo }, index) => (
                <>
                <div class="job-row">
                   <img src={brandingLogo} />
                    <div class="job-description">
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
    );
}

export default JobHistory;