import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
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
    <>
      {isLoading && <div className="loading">Loading...</div>}
      <div className="editor-container">
        <div className="input-section">
          <textarea
            className="textarea"
            value={markdown}
            onChange={handleChange}
            placeholder="Enter your markdown here..."
          />
        </div>
        <div className="preview-section">
          <div className="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkdownEditor;
