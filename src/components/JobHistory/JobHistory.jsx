import React from 'react';
import './JobHistory.css';
import oracleBrandingLogo from '../../images/oracle-branding-logo.png'
import companyNoLogo from '../../images/company-no-logo.png';

const JOB_DATA = [{
    position: 'Senior Member of Technical Staff at Oracle - IC3',
    project: 'Visual Builder Studio',
    date: '2022 - Present',
    description: 'Focusing on complex feature implementations and architecture within the cloud platform.',
    brandingLogo: oracleBrandingLogo,
    fillLogo: true
}, {
    position: 'Member of Technical Staff at Oracle - IC2',
    project: 'Visual Builder Studio',
    date: '2021 - 2022',
    description: 'Initial relocation to Prague, contributing to the development of the collaborative application development ecosystem.',
    brandingLogo: oracleBrandingLogo,
    fillLogo: true
}, {
    position: 'Software Developer',
    project: 'Several small projects',
    date: '2020 - 2021',
    description: 'Laying the foundation of engineering principles through various freelance and internal development initiatives.',
    brandingLogo: companyNoLogo,
    fillLogo: false
}];

function JobHistory() {
    return (
        <div id="job-history" className="section job-history-layout">
            <div className="job-history-left">
                <h1 className="section-title job-history-title">Career</h1>
                <p className="job-history-subtitle">Building enterprise-grade solutions at scale.</p>
            </div>
            <div className="job-list">
                {JOB_DATA.map(({ position, project, date, description, brandingLogo, fillLogo }, index) => (
                    <div
                        key={index}
                        className="job-item reveal"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                        <div className="job-item-top">
                            <div className={`job-logo-wrapper${fillLogo ? ' job-logo-fill' : ' job-logo-card'}`}>
                                <img className="job-logo" src={brandingLogo.src} alt={position} />
                            </div>
                            <div className="job-header">
                                <span className="job-position">{position}</span>
                                <span className="job-project">{project}</span>
                                <span className="job-date">{date}</span>
                            </div>
                        </div>
                        <p className="job-description">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JobHistory;
