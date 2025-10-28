import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BasicLayout } from "../../layouts/basicLayout";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import "./ProjectEmailBooking.css";

const images = [
  "/projects/email_booking.png",
  "/projects/email_booking2.png",
];

export default function ProjectEmailBooking() {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <BasicLayout paddingTop>
      <div className="project-container">
        {/* ===== Title Section ===== */}
        <div className="title-section text-center">
          <h2>Email Booking Automation</h2>
          <p>
            This project showcases a fully autonomous <strong>email-based booking system</strong> built with
            <strong> n8n</strong> and using <strong>OpenAI</strong>. It manages the entire process — from receiving a
            service inquiry to confirming an appointment — including data collection, time-slot verification through
            <strong> Google Calendar</strong>, and automated follow-up communication.
            <br /><br />
            By automating these steps, it removes the need for manual coordination, back-and-forth emails, and
            spreadsheet tracking, turning the scheduling workflow into a <strong>fully self-managing system</strong>.
          </p>
        </div>

        {/* ===== Workflow Image Carousel ===== */}
        <div className="carousel-container">
          <img
            src={images[index]}
            alt="Workflow step"
            onClick={() => setFullscreen(true)}
            className="carousel-image"
          />
          {images.length > 1 && (
            <>
              <button onClick={prev} className="carousel-btn left"><FiChevronLeft /></button>
              <button onClick={next} className="carousel-btn right"><FiChevronRight /></button>
            </>
          )}
        </div>

        {/* ===== Fullscreen Lightbox ===== */}
        {fullscreen && (
          <div className="lightbox" onClick={() => setFullscreen(false)}>
            <FiX className="lightbox-close" onClick={() => setFullscreen(false)} />
            <img src={images[index]} alt="Full view" className="lightbox-img" />
          </div>
        )}

        {/* ===== Project Overview ===== */}
        <div className="content-section">
          <h4>Project Overview</h4>
          <ul>
            <li>User fills out a simple form (name, email, inquiry message) on the website.</li>
            <li>n8n instantly sends an <strong>AI-generated email</strong> thanking them and requesting address, phone number, and preferred time slot.</li>
          </ul>

          {/* Website Form */}
          <div className="image-row">
            <img src="/projects/lets_repair.png" alt="Let's Repair Home" />
            <img src="/projects/lets_repair_contact.png" alt="Let's Repair Contact" />
          </div>

          {/* Automated Follow-up Email */}
          <div className="text-img-row">
            <div className="text">
              <h5>✉️ Automated Follow-up Email</h5>
              <p>
                After the form submission, n8n triggers an AI-generated email requesting
                <strong> Address, Contact Number, and Preferred Day/Time</strong>.
              </p>
            </div>
            <div className="image">
              <img src="/projects/send_details.png" alt="Follow-up email" />
            </div>
          </div>

          {/* Confirmation */}
          <div className="text-img-row">
            <div className="text">
              <h5 className="text-success">✅ Automatic Confirmation</h5>
              <p>
                If all details are correct and available, n8n confirms the booking automatically
                with a professional email reply.
              </p>
            </div>
            <div className="image">
              <img src="/projects/booking_confirmed.png" alt="Booking confirmed" />
            </div>
          </div>

          {/* Alternate Slot */}
          <div className="text-img-row reverse">
            <div className="text">
              <h5 className="text-warning">⚠️ Alternate Slot Suggestion</h5>
              <p>
                If the chosen slot is unavailable, the AI suggests new times based on Google Calendar availability.
              </p>
            </div>
            <div className="image">
              <img src="/projects/choose_slot.png" alt="Alternate slot email" />
            </div>
          </div>

          {/* Missing Info */}
          <div className="text-img-row">
            <div className="text">
              <h5 className="text-info">🔁 Missing Information</h5>
              <p>
                If details like address or contact are missing, n8n identifies and requests only
                the missing part — keeping communication concise.
              </p>
            </div>
            <div className="image">
              <img src="/projects/missing_details.png" alt="Missing details email" />
            </div>
          </div>

          {/* Data Logging */}
          <div className="data-logging">
            <h5>Data Logging & Scheduling</h5>
            <p>
              Each confirmed or pending inquiry is stored in <strong>Google Sheets</strong>,
              while <strong>Google Calendar</strong> prevents overlapping bookings.
            </p>
            <div className="image-row">
              <img src="/projects/google_sheets.png" alt="Google Sheets Data" />
              <img src="/projects/google_calendar.png" alt="Google Calendar Integration" />
            </div>
          </div>

          {/* Back Button */}
          <div className="back-btn">
            <Link to="/" className="btn btn-dark px-4 py-2">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
