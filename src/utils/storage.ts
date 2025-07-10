/**
 * Utilities for localStorage operations
 */

export const STORAGE_PREFIX = 'paper_note_';

/**
 * Save a note to localStorage
 */
export const saveNote = (title: string, content: string): void => {
  localStorage.setItem(`${STORAGE_PREFIX}${title}`, content);
};

/**
 * Load a note from localStorage
 */
export const loadNote = (title: string): string | null => {
  return localStorage.getItem(`${STORAGE_PREFIX}${title}`);
};

/**
 * Get all note titles from localStorage
 */
export const getAllNotes = (): string[] => {
  const notes: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(STORAGE_PREFIX)) {
      notes.push(key.replace(STORAGE_PREFIX, ''));
    }
  }
  return notes.sort();
};

/**
 * Delete a note from localStorage
 */
export const deleteNote = (title: string): void => {
  localStorage.removeItem(`${STORAGE_PREFIX}${title}`);
};