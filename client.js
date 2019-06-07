// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Location} from 'react-360-web';


function init(bundle, parent, options = {}) {

  // initialise instant game
  if (FBInstant) {
    FBInstant.initializeAsync()
    .then(function() {
      FBInstant.setLoadingProgress(100);
      FBInstant.startGameAsync();
    });
  }

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // const location = new Location([0, -1, -5.3]);
  const location = new Location([-25, -35, 0]);


  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('BasicAppTemplate', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  r360.renderToSurface(
    r360.createRoot('BackButton', { /* initial props */ }),
    location
  );

  // //BIG FAT MAYBE
  // r360.renderToLocation(
  //   r360.createRoot('BackButton'),
  //   location,
  // );


  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('homepage.jpg'));
}

window.React360 = {init};