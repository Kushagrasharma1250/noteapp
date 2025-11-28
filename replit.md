# Notes Manager - React Application

## Overview
This is a simple Notes Manager application built with React. It allows users to create, edit, and delete notes with a clean and modern UI. The project was imported from GitHub and configured to run on Replit.

## Project Structure
```
exp07/
├── public/           # Static files (HTML, images, manifest)
├── src/
│   ├── components/   # React components
│   │   ├── NoteForm.js    # Form to add new notes
│   │   ├── NoteItem.js    # Individual note display with edit/delete
│   │   └── NoteList.js    # List container for all notes
│   ├── App.js        # Main application component
│   ├── index.js      # Application entry point
│   └── styles.css    # Global styles
├── package.json      # Project dependencies and scripts
└── .env             # Environment configuration for Replit
```

## Technology Stack
- **Frontend Framework**: React 19.2.0
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Styling**: Plain CSS with modern design
- **State Management**: React useState hooks

## Features
- ✅ Add new notes with a simple form
- ✅ Edit existing notes inline
- ✅ Delete notes instantly
- ✅ Responsive design for mobile and desktop
- ✅ Modern purple gradient background
- ✅ Smooth animations and transitions

## Recent Changes (November 28, 2025)
- Installed Node.js 20 and project dependencies
- Created missing component files (NoteForm, NoteList, NoteItem)
- Implemented complete styles.css with responsive design
- Configured Create React App for Replit environment:
  - Set port to 5000 (required for Replit webview)
  - Configured host as 0.0.0.0
  - Disabled host checking for Replit's proxy
- Set up workflow to run development server
- Configured deployment as static site (builds to exp07/build)

## Development

### Running the Application
The application runs automatically via the configured workflow:
- **Development Server**: `npm start` in the exp07 directory
- **Port**: 5000 (webview enabled)
- **Host**: 0.0.0.0 (allows Replit proxy access)

### Available Scripts
In the exp07 directory:
- `npm start` - Run development server on port 5000
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## Deployment
The project is configured for static deployment:
- **Build Command**: `npm run build`
- **Output Directory**: `exp07/build`
- **Deployment Type**: Static site hosting

When you publish this project, Replit will automatically build the production version and serve the static files.

## Environment Configuration
The `.env` file in exp07 directory contains:
- `PORT=5000` - Required port for Replit webview
- `HOST=0.0.0.0` - Binds to all interfaces
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` - Allows Replit's proxy
- `WDS_SOCKET_PORT=0` - WebSocket configuration for hot reload

## User Preferences
No specific user preferences documented yet.

## Notes
- The app uses in-memory state management (notes are lost on refresh)
- No backend or database - purely frontend application
- All styling is custom CSS, no UI frameworks used
- Components follow React functional component patterns with hooks
