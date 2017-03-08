var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About!</h1>
      <p>This is a weather app built on React.  This was built as a part of the Complete React Developer.</p>
      <p>Here are some of the tools used in this project:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - the JavaScript framework</li>
        <li><a href="http://openweathermap.org">Open Weather Map</a> - this searches for weather data for each city</li>
      </ul>
    </div>
  );
}

module.exports = About;
