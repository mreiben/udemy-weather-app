var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h3>Nav Bar</h3>
      <IndexLink to="/" activeClassNames="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassNames="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" activeClassNames="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
}

module.exports = Nav;
