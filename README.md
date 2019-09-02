# Noteful 
Noteful lets users manage and organize their notes, which are stored on an external server. 

## Motivation
This was created to practice both developing in React and testing an app.

## Built With
JavaScript, React, CSS, Enzyme

## Future Enhancements
* Data loaded from sample file so app works without server setup
* Better formatting on mobile (app is responsive but not optimized for mobile - especially the Add Note / Add Folder windows)

## Screenshots
#### View notes within a given folder:
Note: This is similar to the inital home view, which shows all notes regardless of folder
<img src="https://github.com/omaiyea/noteful/blob/master/screenshots/notes-view.png?raw=true" alt="notes in folder screenshot">

#### Add a new note:
<img src="https://github.com/omaiyea/noteful/blob/master/screenshots/add-note.png?raw=true" alt="new note screenshot">

#### View the contents of a note:
<img src="https://github.com/omaiyea/noteful/blob/master/screenshots/note-details.png?raw=true" alt="note content screenshot">

#### Add a new folder to store notes: 
<img src="https://github.com/omaiyea/noteful/blob/master/screenshots/add-folder.png?raw=true" alt="new folder screenshot">

# Server setup
The project currently requires a local copy of a JSON server to run. To set this up: 

### `git clone https://github.com/tomatau/noteful-json-server`
### `cd ./noteful-json-server`
### `npm install`
### `npm start`

# Preview App (after server is set up)
## Preview with a live link
https://noteful.omaiyea.now.sh
## Or you can preview locally
### `git clone https://github.com/omaiyea/noteful`
### `cd ./noteful`
### `npm install`
### `npm start`
and to run the tests:
### `npm test`
