import React from "react";
import "./style.css";

const PROJECTS = [
  {
    title: "Email Booking Automation",
    img: "/projects/email_booking.png",
    link: "/projects/email-booking",
  },
  {
    title: "Email Booking Automation",
    img: "/projects/email-booking.png",
    link: "/projects/email-booking",
  },
];

const LatestProjects = () => {
  return (
    <section className="projects-section container-fluid">
      <div className="py-4 text-start">
        <h3 className="fs-4 mb-3">My Projects</h3>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <a key={p.title} href={p.link} className="project-card">
            <div className="project-image">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
            <h4 className="project-title mt-3">{p.title}</h4>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
