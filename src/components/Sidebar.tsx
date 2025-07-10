import "./Sidebar.css";

import { FC } from "react";

interface SidebarProps {
  /** Whether sidebar is open */
  isOpen: boolean;
  /** List of all note titles */
  notes: string[];
  /** Currently selected note title */
  currentNote: string;
  /** Function called when a note is selected */
  onSelectNote: (title: string) => void;
  /** Function called when new note is requested */
  onNewNote: () => void;
  /** Function called when a note is deleted */
  onDeleteNote: (title: string) => void;
}

/**
 * Sidebar component with notes list
 */
export const Sidebar: FC<SidebarProps> = ({
  isOpen,
  notes,
  currentNote,
  onSelectNote,
  onNewNote,
  onDeleteNote,
}) => {
  const handleDeleteNote = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    if (window.confirm(`Delete "${title}"?`)) {
      onDeleteNote(title);
    }
  };

  return (
    <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="sidebar__header">
        <h2 className="sidebar__title">Notes</h2>
        <button
          className="sidebar__new-note-btn"
          onClick={onNewNote}
          title="New Note"
        >
          +
        </button>
      </div>

      <div className="sidebar__notes-list">
        {notes.length === 0 ? (
          <div className="sidebar__empty-state">
            No notes yet. Start writing!
          </div>
        ) : (
          notes.map((noteTitle) => (
            <div
              key={noteTitle}
              className={`sidebar__note-item ${
                noteTitle === currentNote ? "sidebar__note-item--active" : ""
              }`}
              onClick={() => onSelectNote(noteTitle)}
            >
              <span className="sidebar__note-title">{noteTitle}</span>
              <button
                className="sidebar__delete-btn"
                onClick={(e) => handleDeleteNote(e, noteTitle)}
                title="Delete Note"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
