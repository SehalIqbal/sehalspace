import React from "react";
import { BasicLayout } from "../layouts/basicLayout";
import myPhoto from "../assets/me.jpeg";
import "./about.css";

const tag = (t) => (
  <span
    key={t}
    style={{
      display: "inline-block",
      padding: "6px 10px",
      border: "1px solid rgba(0,0,0,.12)",
      borderRadius: "999px",
      margin: "4px 6px 0 0",
      fontSize: "0.9rem",
    }}
  >
    {t}
  </span>
);

export default function Skills() {
  return (
    <BasicLayout paddingTop>
      <div className="container">
        <div className="row align-items-start">
          {/* LEFT SIDE */}
          <div className="col-lg-6">
            <div className="section-heading mb-4">
              <h3 className="h3">Skills & Tech Stack</h3>
              <p className="text-muted" style={{ maxWidth: 600, lineHeight: 1.7 }}>
                I focus on building <strong>AI-driven automation systems</strong> — connecting APIs,
                workflows, and cloud tools into reliable, human-friendly solutions that actually ship.
              </p>
            </div>

            {/* AUTOMATION */}
            <div className="mb-4">
              <h5 className="mb-2">Automation & Orchestration</h5>
              <div>
                {[
                  "n8n",
                  "Vapi",
                  "Twilio",
                  "Python Automation (scripts, schedulers)",
                  "Webhooks",
                  "Google Workspace",
                  "Cron / Queues",
                ].map(tag)}
              </div>
            </div>

            {/* AI */}
            <div className="mb-4">
              <h5 className="mb-2">AI & LLMs</h5>
              <div>
                {[
                  "OpenAI API",
                  "Prompt Design",
                  "Function Calling",
                  "Embeddings",
                  "RAG",
                  "Pinecone (Vector Database)",
                ].map(tag)}
              </div>
            </div>

            {/* PROGRAMMING */}
            <div className="mb-4">
              <h5 className="mb-2">Programming & Databases</h5>
              <div>
                {["Python", "Java", "C++", "SQL (MySQL / PostgreSQL)", "MongoDB"].map(tag)}
              </div>
            </div>

            {/* WEB */}
            <div className="mb-4">
              <h5 className="mb-2">Web & Integrations</h5>
              <div>{["React", "REST APIs"].map(tag)}</div>
            </div>

            {/* DEPLOY */}
            <div className="mb-5">
              <h5 className="mb-2">Deploy & Ops</h5>
              <div>{["Vercel / Netlify", "Docker", "Git / GitHub"].map(tag)}</div>
            </div>

               {/* EDUCATION */}
            <div className="mt-5">
              <h5 className="mb-2">Education</h5>
              <p className="mb-1">
                <strong>BS Artificial Intelligence</strong> – FAST-NUCES, Karachi (2022–2026)
              </p>
              <p className="text-muted small mb-0">
                Key Courses: Machine Learning, Deep Learning, Computer Vision, OOP, SQL, Data Structures
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 col-xl-5 mx-auto pt-4 pt-lg-0 mb-5">
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <div
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.30 * 100% )" }}
              >
                <img
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                  src={myPhoto}
                  alt="Sehal Iqbal"
                />
              </div>

              <div className="text-center my-3">
                <a
                  href="mailto:sehaliqbal27@gmail.com"
                  className="btn btn-dark px-4 py-2"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
