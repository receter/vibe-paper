import "./Editor.css";

import React, { useEffect, useRef } from "react";

interface EditorProps {
  /** Current note content */
  content: string;
  /** Function called when content changes */
  onChange: (content: string) => void;
  /** Whether sidebar is open (affects editor width) */
  isSidebarOpen: boolean;
}

/**
 * Full-screen editor component
 */
export const Editor: React.FC<EditorProps> = ({
  content,
  onChange,
  isSidebarOpen,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Focus the textarea when component mounts
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`editor ${isSidebarOpen ? "editor--sidebar-open" : ""}`}>
      <textarea
        ref={textareaRef}
        className="editor__textarea"
        value={content}
        onChange={handleChange}
        placeholder="Start writing..."
        spellCheck={true}
        autoFocus
      />
    </div>
  );
};
