import React from "react";
import { BasicLayout } from "../layouts/basicLayout";
import myPhoto from "../assets/me.jpeg";

// If you want to keep your existing <SkillsBox /> / <ExperiencesBox />,
// you can still import and render them below the new sections.

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
          <div className="col-lg-6">
            <div className="section-heading mb-4">
              <h3 className="h3">Skills & Stack</h3>
              <p className="mt-2" style={{ maxWidth: 640, lineHeight: 1.7 }}>
                I design **automation-first** systems using n8n + OpenAI +
                Google Workspace. The goal: ship fast, keep it simple, and
                hand over something you can fully control—no lock-in, no fluff.
              </p>
            </div>

           <div className="mb-4">
            <h5 className="mb-2">Automation & Orchestration</h5>
            <div>
              {[
                "n8n",
                "Python Automation (APIs, scripts, schedulers)",
                "Webhooks",
                "Cron/Queues",
              ].map(tag)}
            </div>
          </div>


            <div className="mb-4">
              <h5 className="mb-2">AI & LLMs</h5>
              <div>
                {[
                  "OpenAI API",
                  "Prompt design",
                  "Function calling",
                  "Embeddings",
                  "RAG (basic)",
                ].map(tag)}
              </div>
            </div>

            <div className="mb-4">
              <h5 className="mb-2">Google Workspace</h5>
              <div>
                {[
                  "Google Sheets",
                  "Apps Script",
                  "Gmail/Calendar/Drive APIs",
                  "Apps Script Web Apps",
                ].map(tag)}
              </div>
            </div>

            <div className="mb-4">
              <h5 className="mb-2">Web & Integrations</h5>
              <div>
                {[
                  "Node.js",
                  "React",
                  "REST APIs",
                  "Web scraping (lightweight)",
                  "Stripe",
                  "Twilio/WhatsApp",
                ].map(tag)}
              </div>
            </div>

            <div className="mb-5">
              <h5 className="mb-2">Deploy & Ops</h5>
              <div>{["Vercel", "Docker (basic)", "Supabase/Firebase"].map(tag)}</div>
            </div>
          </div>

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

              {/* Optional: a brief “what I do” card */}
              <div className="mt-2" style={{ lineHeight: 1.6 }}>
                <strong>What I typically build</strong>
                <ul className="mt-2 mb-0">
                  <li>AI-assisted email inbox + smart triage</li>
                  <li>Booking & follow-up automations</li>
                  <li>Sheet-driven mini-CRMs and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* If you still want to keep your custom boxes, uncomment: */}
        {/* <div className="row mt-4">
          <div className="col-lg-6"><SkillsBox /></div>
          <div className="col-lg-6"><ExperiencesBox /></div>
        </div> */}
      </div>
    </BasicLayout>
  );
}
