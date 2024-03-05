const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const cfonts = require('cfonts');
// import connections

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// syncing sequelize models to the database, and turning on the server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () =>console.log(`App listening on port ${PORT}!`));
});

//Showing the name of the App
cfonts.say('CYBERMARKET', {
	font: 'block',              // define the font face
	align: 'center',              // define text alignment
	colors: ['white'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment cfonts is being executed in
});