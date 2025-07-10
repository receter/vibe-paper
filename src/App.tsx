import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Editor } from './components/Editor';
import { Sidebar } from './components/Sidebar';
import { useDebounce } from './hooks/useDebounce';
import { 
  saveNote, 
  loadNote, 
  getAllNotes, 
  deleteNote 
} from './utils/storage';
import { generateUniqueRandomName } from './utils/nameGenerator';
import './App.css';

/**
 * Main Paper application component
 * Manages state for notes, editor content, and sidebar visibility
 */
function App() {
  const [currentNoteTitle, setCurrentNoteTitle] = useState<string>('');
  const [noteContent, setNoteContent] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [allNotes, setAllNotes] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Debounce content changes for auto-save
  const debouncedContent = useDebounce(noteContent, 300);

  // Initialize app on mount
  useEffect(() => {
    const existingNotes = getAllNotes();
    setAllNotes(existingNotes);
    
    // Create a new note with random name
    const newNoteTitle = generateUniqueRandomName(existingNotes);
    setCurrentNoteTitle(newNoteTitle);
    setNoteContent('');
    setIsInitialized(true);
  }, []);

  // Auto-save functionality
  useEffect(() => {
    if (isInitialized && currentNoteTitle && debouncedContent.trim()) {
      saveNote(currentNoteTitle, debouncedContent);
      
      // Update notes list if this is a new note
      if (!allNotes.includes(currentNoteTitle)) {
        setAllNotes(prev => [...prev, currentNoteTitle].sort());
      }
    }
  }, [debouncedContent, currentNoteTitle, isInitialized, allNotes]);

  /**
   * Handle sidebar toggle
   */
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  /**
   * Handle note selection from sidebar
   */
  const handleSelectNote = (noteTitle: string) => {
    if (noteTitle === currentNoteTitle) {
      setIsSidebarOpen(false);
      return;
    }

    const content = loadNote(noteTitle) || '';
    setCurrentNoteTitle(noteTitle);
    setNoteContent(content);
    setIsSidebarOpen(false);
  };

  /**
   * Handle creating a new note
   */
  const handleNewNote = () => {
    const newNoteTitle = generateUniqueRandomName(allNotes);
    setCurrentNoteTitle(newNoteTitle);
    setNoteContent('');
    setIsSidebarOpen(false);
  };

  /**
   * Handle deleting a note
   */
  const handleDeleteNote = (noteTitle: string) => {
    deleteNote(noteTitle);
    const updatedNotes = allNotes.filter(title => title !== noteTitle);
    setAllNotes(updatedNotes);

    // If we deleted the current note, create a new one
    if (noteTitle === currentNoteTitle) {
      const newNoteTitle = generateUniqueRandomName(updatedNotes);
      setCurrentNoteTitle(newNoteTitle);
      setNoteContent('');
    }
  };

  /**
   * Handle editor content changes
   */
  const handleContentChange = (content: string) => {
    setNoteContent(content);
  };

  return (
    <div className="app">
      <Header
        title={currentNoteTitle}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={handleToggleSidebar}
      />
      
      <Editor
        content={noteContent}
        onChange={handleContentChange}
        isSidebarOpen={isSidebarOpen}
      />
      
      <Sidebar
        isOpen={isSidebarOpen}
        notes={allNotes}
        currentNote={currentNoteTitle}
        onSelectNote={handleSelectNote}
        onNewNote={handleNewNote}
        onDeleteNote={handleDeleteNote}
      />
    </div>
  );
}

export default App;
