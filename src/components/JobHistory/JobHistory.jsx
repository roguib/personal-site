import React from 'react';
import './JobHistory.css';
import oracleBrandingLogo from '../../images/oracle-branding-logo.png'
import companyNoLogo from '../../images/company-no-logo.png';
import i18n from '../../utils/i18n.js';

const JOB_DATA = [{
    position: i18n('career.jobs.smts.position'),
    project: i18n('career.jobs.smts.project'),
    date: i18n('career.jobs.smts.date'),
    description: i18n('career.jobs.smts.description'),
    brandingLogo: oracleBrandingLogo,
    fillLogo: true
}, {
    position: i18n('career.jobs.mts.position'),
    project: i18n('career.jobs.mts.project'),
    date: i18n('career.jobs.mts.date'),
    description: i18n('career.jobs.mts.description'),
    brandingLogo: oracleBrandingLogo,
    fillLogo: true
}, {
    position: i18n('career.jobs.freelance.position'),
    project: i18n('career.jobs.freelance.project'),
    date: i18n('career.jobs.freelance.date'),
    description: i18n('career.jobs.freelance.description'),
    brandingLogo: companyNoLogo,
    fillLogo: false
}];

function JobHistory() {
    return (
        <div id="job-history" className="section job-history-layout">
            <div className="job-history-left">
                <h1 className="section-title job-history-title">{i18n('career.title')}</h1>
                <p className="job-history-subtitle">{i18n('career.subtitle')}</p>
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
