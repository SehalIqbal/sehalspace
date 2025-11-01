import React from "react";
import "./style.css";

const PROJECTS = [
  {
    title: "Email Booking Automation",
    img: "/projects/email_booking.png",
    link: "/projects/email-booking",
  },
  {
    title: "Food Restaurant Chatbot",
    img: "/projects/food-del_chatbot.png",
    link: "/projects/chat-bot",
  },
  {
  title: "LinkedIn Auto-Poster",
  img: "/projects/linkedin_workflow.png",
  link: "/projects/linkedin-poster",
},

];

const LatestProjects = () => {
  return (
    <section className="projects-section container-fluid">
      <div className="py-4 text-start">
        <h3 className="fs-4 mb-1">My Projects</h3>
        <p className="projects-subtext">
          Click any project to explore its workflow and details
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <a key={p.title} href={p.link} className="project-card">
            <h4 className="project-title">{p.title}</h4>
            <div className="project-image">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
