var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem in vitae quasi, omnis adipisci laudantium ea ducimus. Minus, placeat voluptatibus, aut, delectus repellat doloremque fuga modi quas dolorem porro iusto.</p>
      <p>
        Here are some of the tools used to create this site:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather 
        </li>
      </ul>
    </div>
  );
}



module.exports = About;