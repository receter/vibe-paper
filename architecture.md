# Paper App Architecture

## Overview
Paper is a minimalist note-taking application that provides a distraction-free writing experience. The app focuses on simplicity with a full-screen editor and local storage persistence.

## Core Features
- **Full-screen editor**: Textarea that covers the entire viewport
- **Auto-save**: Notes are saved to localStorage on every change
- **Note management**: Sidebar with list of all saved notes
- **Random note names**: New notes start with randomly generated names
- **Local storage**: All notes persist in browser localStorage

## Technology Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS (minimal, custom styles)
- **Storage**: Browser localStorage API

## Architecture Decisions

### 1. Local Storage Strategy
- **Decision**: Use localStorage with document titles as keys
- **Rationale**: Simple persistence without backend complexity
- **Implementation**: Each note is stored as `localStorage.setItem(title, content)`

### 2. State Management
- **Decision**: React state with hooks (useState, useEffect)
- **Rationale**: App is simple enough to not require external state management
- **Implementation**: Single App component manages all state

### 3. Auto-save Implementation
- **Decision**: Save on every keystroke with debouncing
- **Rationale**: Prevents data loss while maintaining performance
- **Implementation**: useEffect hook watches content changes

### 4. Random Name Generation
- **Decision**: Generate random names using adjective + noun combinations
- **Rationale**: Creates memorable, unique note names
- **Implementation**: Simple word arrays with random selection

### 5. UI/UX Design
- **Decision**: Minimal, distraction-free interface
- **Rationale**: Focus on writing without UI clutter
- **Implementation**: Full-screen textarea with minimal chrome

## Component Structure

```
App
├── Header (title + sidebar toggle)
├── Editor (full-screen textarea)
└── Sidebar (notes list, conditionally rendered)
```

## Data Flow

1. **App Load**: Check for existing notes, create new random note
2. **User Types**: Auto-save content to localStorage on change
3. **Sidebar Open**: Display all localStorage keys as note list
4. **Note Switch**: Load selected note content into editor
5. **New Note**: Generate random name, clear editor

## Storage Format

```javascript
// localStorage structure
{
  "Dreamy Elephant": "Note content here...",
  "Mystic River": "Another note...",
  "Golden Mountain": "Third note..."
}
```

## Performance Considerations
- Debounced auto-save (300ms delay)
- Minimal re-renders with React.memo if needed
- Efficient localStorage operations

## Implementation Details

### Key Implementation Decisions Made

1. **Component Structure Implemented**:
   - `Header`: Fixed header with title and sidebar toggle button
   - `Editor`: Full-screen textarea with responsive sidebar accommodation
   - `Sidebar`: Slide-out panel with notes list and management
   - `useDebounce`: Custom hook for performance optimization

2. **Auto-save Strategy**:
   - 300ms debounce delay implemented
   - Only saves when content is not empty (prevents empty notes)
   - Updates notes list dynamically when new notes are created

3. **Storage Implementation**:
   - Prefix-based localStorage keys: `paper_note_${title}`
   - Automatic cleanup and synchronization
   - Sorted notes list for consistent UI

4. **Random Name Generation**:
   - 25 adjectives + 28 nouns = 700 unique combinations
   - Collision detection with fallback numbering
   - Memorable, human-readable names

5. **Responsive Design**:
   - Mobile-first approach with breakpoints at 768px and 480px
   - Sidebar becomes full-width on mobile
   - Optimized font sizes and padding for different screen sizes

6. **User Experience**:
   - Auto-focus on textarea for immediate writing
   - Confirmation dialog for note deletion
   - Visual feedback for active notes
   - Smooth transitions for all UI changes

## Future Enhancements
- Export/import functionality
- Search within notes
- Markdown rendering
- Dark/light theme toggle
- Note categories/tags
- Keyboard shortcuts
- Note templates