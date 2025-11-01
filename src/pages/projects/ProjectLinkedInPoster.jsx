import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BasicLayout } from "../../layouts/basicLayout";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const gallery = [
  "/projects/linkedin_workflow.png", // n8n workflow
];

export default function ProjectLinkedInPoster() {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const next = () => setIndex((i) => (i + 1) % gallery.length);
  const prev = () => setIndex((i) => (i - 1 + gallery.length) % gallery.length);

  return (
    <BasicLayout paddingTop>
      <div className="container py-5">
        {/* ===== Title & Summary ===== */}
        <div className="mb-5 text-center">
          <h2 className="fw-bold">LinkedIn Auto-Poster (Sheets → AI → LinkedIn)</h2>
          <p
            className="text-muted mt-2"
            style={{ maxWidth: 780, margin: "0 auto", lineHeight: 1.7 }}
          >
            A fully automated LinkedIn posting system built with <strong>n8n</strong>,
            <strong> OpenAI</strong>, and <strong>Google Sheets</strong>. You draft a title in a sheet,
            the workflow generates a well-formatted post (hook, body, CTA, hashtags), and then publishes it
            to the LinkedIn profile. Once posted, the sheet
            updates the status so the same item isn’t processed twice.
          </p>
        </div>

        {/* ===== Workflow Gallery (click to fullscreen) ===== */}
        <div className="position-relative mb-5 text-center">
          <img
            src={gallery[index]}
            alt="Workflow / result"
            onClick={() => setFullscreen(true)}
            className="img-fluid rounded shadow-sm"
            style={{ cursor: "zoom-in", borderRadius: "16px", maxHeight: 520, objectFit: "contain" }}
          />

          {gallery.length > 1 && (
            <>
              <button
                onClick={prev}
                className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
                style={{ borderRadius: "50%" }}
                aria-label="Previous image"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={next}
                className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
                style={{ borderRadius: "50%" }}
                aria-label="Next image"
              >
                <FiChevronRight />
              </button>
            </>
          )}
        </div>

        {/* ===== Lightbox ===== */}
        {fullscreen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ background: "rgba(0,0,0,0.85)", zIndex: 9999 }}
            onClick={() => setFullscreen(false)}
          >
            <FiX
              size={30}
              style={{ position: "absolute", top: 30, right: 40, cursor: "pointer", color: "#fff" }}
              onClick={() => setFullscreen(false)}
            />
            <img
              src={gallery[index]}
              alt="Fullscreen"
              className="img-fluid"
              style={{ maxHeight: "92%", maxWidth: "92%", borderRadius: "12px" }}
            />
          </div>
        )}

        {/* ===== How it works ===== */}
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h4 className="mt-4 mb-3">How it works</h4>
          <ul style={{ lineHeight: 1.8 }}>
            <li>
              <strong>Trigger:</strong> A Google Sheets row marked <em>Pending</em> kicks off the flow.
            </li>
            <li>
              <strong>AI Post Generation:</strong> Title goes to OpenAI with a structured prompt (hook → 3–4
              paragraphs → question → 4–6 hashtags; emojis allowed; newlines preserved).
            </li>
            <li>
              <strong>Publish to LinkedIn:</strong> The generated text is posted to the individual profile via
              LinkedIn API. Optional loop: post to one or more groups.
            </li>
            <li>
              <strong>Avoid Duplicates:</strong> Status in the sheet flips from <em>Pending</em> →{" "}
              <em>Posted</em> after success.
            </li>
          </ul>
        </div>

        {/* ===== Screenshot: Individual LinkedIn Post ===== */}
        <div className="row align-items-center my-5">
          <div className="col-md-6">
            <h5>Published on your LinkedIn profile</h5>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>
              The system publishes to a personal profile using a valid access token. It preserves spacing,
              emojis, and hashtags for better readability and engagement. Format rules ensure a clear hook,
              concise body, and a closing question to invite comments.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/projects/linkedin_post.png"
              alt="LinkedIn individual post"
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "95%" }}
            />
          </div>
        </div>

        {/* ===== Screenshot: Google Sheets Control ===== */}
        <div className="row align-items-center flex-md-row-reverse my-5">
          <div className="col-md-6">
            <h5>Controlled from Google Sheets</h5>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>
              Draft titles and manage status in a simple sheet. The workflow picks rows with{" "}
              <strong>Pending</strong>, posts them, and writes back <strong>Posted</strong> to prevent
              duplicates. You can also store group IDs here to loop through communities.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/projects/google_sheets_linkedin.png"
              alt="Google Sheets source"
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "95%" }}
            />
          </div>
        </div>

        {/* ===== Back Button ===== */}
        <div className="text-center mt-5">
          <Link to="/" className="btn btn-dark px-4 py-2">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </BasicLayout>
  );
}
