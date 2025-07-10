# Paper - Minimalist Note-Taking App

A simple, distraction-free note-taking application that focuses on writing. Paper automatically saves your notes locally and provides a clean, full-screen writing experience.

## Features

- **Full-screen editor**: Distraction-free writing with a large textarea
- **Auto-save**: Notes are automatically saved as you type (300ms debounce)
- **Random note names**: New notes get memorable, randomly generated names
- **Local storage**: All notes are saved locally in your browser
- **Sidebar management**: View, switch between, and manage all your notes
- **Responsive design**: Works on desktop, tablet, and mobile devices

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

4. **Start writing!** The app will automatically create a new note with a random name.

## Usage

### Writing Notes
- Simply start typing in the editor
- Notes are automatically saved as you type
- The app starts with a new note each time you open it

### Managing Notes
- Click the menu button (≡) in the top-right to open the sidebar
- View all your saved notes in the sidebar
- Click on any note to switch to it
- Use the "+" button to create a new note
- Hover over notes to see the delete button (×)

### Note Names
- New notes get random names like "Dreamy Mountain" or "Mystic River"
- Notes are only saved when they contain text
- Empty notes are automatically cleaned up

## Architecture

The app follows a simple, clean architecture:

- **React + TypeScript**: Type-safe component-based UI
- **Vite**: Fast build tool and development server
- **localStorage**: Browser-based persistence
- **CSS**: Custom styling without external dependencies

For detailed architecture information, see [`architecture.md`](./architecture.md).

## Key Files

- `src/App.tsx` - Main application component
- `src/components/` - UI components (Header, Editor, Sidebar)
- `src/utils/` - Utility functions for storage and name generation
- `src/hooks/` - Custom React hooks
- `architecture.md` - Detailed architecture documentation
- `.cursorfile` - Cursor AI context file

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory and can be served by any static file server.

## Contributing

This is a simple, focused application. When making changes:

1. Read the `architecture.md` file to understand the design decisions
2. Keep the UI minimal and distraction-free
3. Maintain the auto-save functionality
4. Test across different screen sizes
5. Follow the existing code style and TypeScript practices

## License

MIT License - feel free to use this code however you'd like!
