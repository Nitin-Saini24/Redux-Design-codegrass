import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleChange = (content) => {
    setEditorContent(content);
  };

  const handleSave = () => {
    // Here you can send the content to your backend or save it locally
    console.log("Saved content:", editorContent);

    // Example: Save to local storage
    localStorage.setItem("savedDocument", editorContent);

    // You can also trigger a download (as an HTML file, for example)
    const blob = new Blob([editorContent], { type: "docx" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "document.html");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const savedContent = localStorage.getItem("savedDocument");
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  return (
    <div className="text-editor">
      <ReactQuill
        value={editorContent}
        onChange={handleChange}
        modules={TextEditor.modules}
        formats={TextEditor.formats}
        theme="snow"
      />
      <button onClick={handleSave} className="save-button">
        Save Document
      </button>
    </div>
  );
};

// Quill modules and formats configuration
TextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default TextEditor;

// const handleSave = async () => {
//   const response = await fetch("/api/saveDocument", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ content: editorContent }),
//   });

//   if (response.ok) {
//     console.log("Document saved successfully");
//   } else {
//     console.error("Error saving document");
//   }
// };
