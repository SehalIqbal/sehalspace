import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BasicLayout } from "../../layouts/basicLayout";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const images = [
  "/projects/food-del_chatbot.png",
  
];

export default function ProjectChatBot() {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <BasicLayout paddingTop>
      <div className="container py-5">
        {/* ===== Title Section ===== */}
        <div className="mb-5 text-center">
          <h2 className="fw-bold">Food Restaurant Chatbot</h2>
          <p
            className="text-muted mt-2"
            style={{ maxWidth: 720, margin: "0 auto", lineHeight: 1.7 }}
          >
            This project demonstrates an <strong>AI-powered restaurant chatbot</strong> built using
            <strong> n8n, OpenAI, and MongoDB</strong>. It automates live chat support on a food
            ordering website — answering menu questions, checking order status, fetching promo codes,
            and managing basic customer interactions automatically.
            <br />
            <br />
            The chatbot connects directly to <strong>real-time MongoDB databases</strong> for live
            data such as menu items, promotions, and order tracking. The system completely removes
            manual effort, providing instant responses while maintaining a natural conversational
            experience for customers.
          </p>
        </div>

        {/* ===== Workflow Image Carousel ===== */}
        <div className="position-relative mb-5 text-center">
          <img
            src={images[index]}
            alt="Workflow step"
            onClick={() => setFullscreen(true)}
            className="img-fluid rounded shadow-sm"
            style={{
              cursor: "zoom-in",
              borderRadius: "16px",
              transition: "transform 0.3s ease",
            }}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
                style={{ borderRadius: "50%" }}
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={next}
                className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
                style={{ borderRadius: "50%" }}
              >
                <FiChevronRight />
              </button>
            </>
          )}
        </div>

        {/* ===== Fullscreen Lightbox ===== */}
        {fullscreen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ background: "rgba(0,0,0,0.8)", zIndex: 9999 }}
            onClick={() => setFullscreen(false)}
          >
            <FiX
              size={30}
              style={{
                position: "absolute",
                top: 30,
                right: 40,
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={() => setFullscreen(false)}
            />
            <img
              src={images[index]}
              alt="Full view"
              className="img-fluid"
              style={{
                maxHeight: "90%",
                maxWidth: "90%",
                borderRadius: "12px",
              }}
            />
          </div>
        )}

        {/* ===== Chatbot Explanation Sections ===== */}
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* --- Overview --- */}
          <h4 className="mt-5 mb-4">Project Overview</h4>
          <p style={{ lineHeight: 1.8 }}>
            The chatbot is embedded directly on the restaurant’s website and interacts with users in
            real time. Each customer message triggers a sequence in n8n, which uses OpenAI for natural
            understanding and MongoDB for fetching or updating live data — making it both
            conversational and functional.
          </p>

          {/* --- Menu Query --- */}
          <div className="row align-items-center my-5">
            <div className="col-md-6">
              <h5 className="text-success">🍔 Menu Queries</h5>
              <p style={{ lineHeight: 1.8 }}>
                When users ask about food items or prices, the chatbot pulls real-time data from the{" "}
                <strong>Menu database</strong>, returning accurate descriptions, pricing, and
                availability — helping customers make instant decisions without human help.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/projects/menu.png"
                alt="Menu Query Example"
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: "90%" }}
              />
            </div>
          </div>

          {/* --- Order Status --- */}
          <div className="row align-items-center flex-md-row-reverse my-5">
            <div className="col-md-6">
              <h5 className="text-primary">📦 Order Status Tracking</h5>
              <p style={{ lineHeight: 1.8 }}>
                When a user asks about their order, the system connects to the{" "}
                <strong>Orders collection</strong> in MongoDB. It checks the order ID, verifies its
                current state (e.g., preparing, out for delivery, or completed), and sends a
                personalized update in natural language.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/projects/order_status.png"
                alt="Order Tracking"
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: "90%" }}
              />
            </div>
          </div>

          {/* --- Promo Codes --- */}
          <div className="row align-items-center my-5">
            <div className="col-md-12 text-center">
              <h5 className="text-warning">🎟 Promo Codes & Offers</h5>
              <p style={{ lineHeight: 1.8, maxWidth: 800, margin: "0 auto" }}>
                The chatbot can also provide information on <strong>active promo codes</strong> and
                discounts by reading from a dedicated <strong>Promo database</strong>. If a user asks
                “Do you have any offers today?”, it fetches the latest promotions and responds
                conversationally — keeping the experience both helpful and engaging.
              </p>
            </div>
          </div>

          {/* --- Complaint or Off-topic --- */}
          <div className="row align-items-center flex-md-row-reverse my-5">
            <div className="col-md-6">
              <h5 className="text-danger">🚫 Complaint or Off-topic Queries</h5>
              <p style={{ lineHeight: 1.8 }}>
                The chatbot identifies irrelevant or unrelated questions and handles them gracefully.
                If the message is off-topic, it replies politely or redirects the user to a support
                channel — maintaining professional and consistent communication.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/projects/irrelevant.png"
                alt="Complaint Handling"
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: "90%" }}
              />
            </div>
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
