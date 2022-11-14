# TV Shows App

## [ Functionality ]
- view popular shows (shows are sorted by 'weight' parameter provided by API)
- view popular shows in different genres
- search for show's name 
- view detailed show info

## [ Technologies ]
- VueJS 3
- Vue Router 4
- API is provided by TVmaze https://www.tvmaze.com/api

## [ Browser support ]
Support for modern JavaScript is assumed.
- Chrome >=87
- Firefox >=78
- Edge >=88

## [ App structure ]
- `src/main.js` creates main application instance with `createApp()`
- `src/App.vue` is the root component
- router configuration `src/router/index.js`
- api layer `src/utils/api.js`
- simple state management `src/utils/store.js`
- Views are located in `src/views`
- Components are located in `src/components`

## [ How to run ]
You can clone this repo or download ZIP with the source code. Make sure you have updated versions of node and npm installed.

- Go to the project's root directory and install dependencies
```bash
  cd <tv-shows-app>
  npm install
```

- To run in development mode and start dev server:

```bash
  npm run dev
```
Then go to the provided dev server link (http://127.0.0.1:5173/)

- To run tests:

```bash
  npm run test
```

- To generate tests coverage:

```bash
  npm run coverage
```
Then open `coverage/index.html` file to see generated file

- To build and run built folder:

```bash
  npm run build
  npm run preview
```
Then go to the provided link (http://127.0.0.1:4173/)