##NodeJS Against Humanity

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/2.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-sa/2.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/2.0/">Creative Commons Attribution-NonCommercial-ShareAlike 2.0 Generic License</a>.

NodeJS implementation of Cards Against Humanity. Here's a screenshot:

<img src="/nodejs-against-humanity.png" />

##Run Locally

Install all the dependencies:

    npm install (you may need to prefix this with sudo if you're on Mac)

Run the app:

    node server.js

Then navigate to `http://localhost:3000`


If you want the server to load up everytime you change the back end:

    npm install -g nodemone

Then run the following instead of `node server.js`:

    nodemon server.js