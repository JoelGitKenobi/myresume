import React from 'react';
import { Resume as ResumeProps } from './types';
import { Basics } from './Basics';
import { Volunteer } from './Volunteer';
import { Education } from './Education';
import { Awards } from './Awards';
import { Certificates } from './Certificates';
import { Interests } from './Interests';
import { Languages } from './Languages';
import { Projects } from './Projects';
import { Publications } from './Publications';
import { References } from './References';
import { Skills } from './Skills';
import { Work } from './Work';
export const Resume: React.FC<ResumeProps> = (resume) => {
  const { meta } = resume;
  const hasBanners = meta?.bannerLight || meta?.bannerDark;
  
  return (
    <div id="resume">
      {hasBanners && (
        <div className="banner-background">
          {meta?.bannerLight && (
            <img 
              className="banner banner-light" 
              src={meta.bannerLight} 
              alt="Light theme banner" 
            />
          )}
          {meta?.bannerDark && (
            <img 
              className="banner banner-dark" 
              src={meta.bannerDark} 
              alt="Dark theme banner" 
            />
          )}
        </div>
      )}
      
      <div className={hasBanners ? "header-overlay" : ""}>
        <header id="header" className="clear">
          {resume.basics?.image && <img className="image" src={resume.basics.image} alt={resume.basics.name || "Profile"} />}
          <div className="middle">
            <h1 className="name">{resume.basics?.name}</h1>
            <h2 className="label">{resume.basics?.label}</h2>
          </div>
          {resume.basics?.location && (
            <span className="location">
              {resume.basics.location.city && <span className="city">{resume.basics.location.city}, </span>}
              {resume.basics.location.region && <span className="region">{resume.basics.location.region} </span>}
              {resume.basics.location.countryCode && <span className="countryCode">{resume.basics.location.countryCode}</span>}
            </span>
          )}
          <div id="contact">
            {resume.basics?.email && (
              <div className="email">
                <span className="far fa-envelope"></span>
                <a className="hide-href-print" href={`mailto:${resume.basics.email}`}>
                  {' '}{resume.basics.email}
                </a>
              </div>
            )}
            {resume.basics?.phone && (
              <div className="phone">
                <span className="fas fa-mobile-alt"></span>
                <a className="hide-href-print" href={`tel:${resume.basics.phone}`}>
                  {' '}{resume.basics.phone}
                </a>
              </div>
            )}
          </div>
          {resume.basics?.profiles && (
            <div id="profiles">
              {resume.basics.profiles.map((profile, index) => (
                <div className="item" key={index}>
                  <div className="username">
                    <span className={`fab fa-${profile.network?.toLowerCase()} ${profile.network?.toLowerCase()} social`}></span>
                    <span className="url">
                      <a target="_blank" href={profile.url} rel="noreferrer">
                        {' '}
                      </a>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </header>
      </div>
      
      {resume.basics?.summary && (
        <section className="section">
          <section className="main-summary">
            <div>{resume.basics.summary}</div>
          </section>
        </section>
      )}
      {resume.skills && <Skills skills={resume.skills} />}
      {resume.work && <Work work={resume.work} />}
      {resume.projects && <Projects projects={resume.projects} />}
      {resume.volunteer && <Volunteer volunteer={resume.volunteer} />}
      {resume.education && <Education education={resume.education} />}
      {resume.awards && <Awards awards={resume.awards} />}
      {resume.certificates && <Certificates certificates={resume.certificates} />}
      {resume.publications && <Publications publications={resume.publications} />}
      {resume.languages && <Languages languages={resume.languages} />}
      {resume.interests && <Interests interests={resume.interests} />}
      {resume.references && <References references={resume.references} />}
    </div>
  );
};
