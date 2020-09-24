import React, { Component } from 'react';
import './App.css';
import resume from './resume.json';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';
import Education from './Education';
import Language from './Language';


class App extends Component {

  renderExperiences() {
    let resultsArray = [];
    resume.experiences.map((item, i) => {
        resultsArray.push(<Experience item={item} key={i} />);
    });
    return resultsArray;
  }

  renderProjects() {
    let resultsArray = [];
    resume.projects.map((item, i) => {
        resultsArray.push(<Project item={item} key={i} />);
    });
    return resultsArray;
  }

  renderSkills() {
    let resultsArray = [];
    resume.skills.map((item, i) => {
        resultsArray.push(<Skill item={item} key={i} />);
    });
    return resultsArray;
  }

  renderEducations() {
    let resultsArray = [];
    resume.education.map((item, i) => {
        resultsArray.push(<Education item={item} key={i} />);
    });
    return resultsArray;
  }

  renderLanguages() {
    let resultsArray = [];
    resume.languages.map((item, i) => {
        resultsArray.push(<Language item={item} key={i} />);
    });
    return resultsArray;
  }

  renderInterests() {
    let resultsArray = [];
    resume.interests.map((item, i) => {
        resultsArray.push(<li key={i}>{item}</li>);
    });
    return resultsArray;
  }

  render() {
    console.log(resume);
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={resume.image}  alt="" />
                <h1 className="name">{resume.name}</h1>
                <h3 className="tagline">Front End Developer</h3>
            </div>
            
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fa fa-envelope"></i><a href="mailto: musastephen07@gmail.com">{resume.email}</a></li>
                    <li className="phone"><i className="fa fa-phone"></i><a href="tel:08066979178">{resume.phone}</a></li>
                    <li className="website"><i className="fa fa-globe"></i><a href={resume.website} target="_blank">{resume.website}</a></li>
                    <li className="twitter"><i className="fa fa-twitter"></i><a href={resume.twitterURL} target="_blank">{resume.twitter}</a></li>
                    
                    <li className="linkedin"><i class="fab fa-linkedin-in"></i><a href={resume.linkedinURL} target="_blank">{resume.linkedin}</a></li>
                </ul>
            </div>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education And Certification</h2>
                {this.renderEducations()}
            </div>
            
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                    {this.renderLanguages()}
                </ul>
            </div>
            
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    {this.renderInterests()}
                </ul>
            </div>
            
        </div>
        
        <div className="main-wrapper">
            
            <section className="section summary-section">
                <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                <div className="summary">
                <p>An energetic young, hardworking, and imaginative Computer scientist with the ability to learn and work alongside an IT base team, contributing ideas to create unique and high standard website.  
                    <p> Coupled with the awareness of current trend’s and high spirit of working right now, I seek for an entry level position with a company with exciting challenges for career advancement and development making a difference to web project and the company in general. </p>
                    </p>
                </div>
            </section>
            
            <section className="section experiences-section">
                <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

                {this.renderExperiences()}
                
            </section>
            
            <section className="section projects-section">
                <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                <div className="intro">
                    <p></p>
                </div>

                {this.renderProjects()}

            </section>
            
            <section className="skills-section section">
                <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                <div className="skillset"> 
                    {this.renderSkills()}
                    
                </div>  
            </section>
            
        </div>
    </div>
    );
  }
}

export default App;
