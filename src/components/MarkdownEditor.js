import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello Markdown!\n\nStart typing to see the preview...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state for initial render
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // This effect runs whenever markdown changes
    // Demonstrates real-time update capability
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      {isLoading && <div className="loading">Loading...</div>}
      <div style={{ display: "flex", width: "100%", height: "100vh" }}>
        <div style={{ flex: 1, padding: "20px" }}>
          <h2>Markdown Input</h2>
          <textarea
            className="textarea"
            value={markdown}
            onChange={handleChange}
            placeholder="Enter your markdown here..."
            style={{
              width: "100%",
              height: "calc(100% - 60px)",
              padding: "10px",
              fontSize: "16px",
              fontFamily: "monospace",
              border: "1px solid #ccc",
              borderRadius: "4px",
              resize: "none"
            }}
          />
        </div>
        <div style={{ flex: 1, padding: "20px", backgroundColor: "#f9f9f9" }}>
          <h2>Markdown Preview</h2>
          <div
            className="preview"
            style={{
              width: "100%",
              height: "calc(100% - 60px)",
              padding: "10px",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              overflowY: "auto"
            }}
          >
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
