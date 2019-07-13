import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Home extends React.Component{
    render() {
        return (
            <div>
                <h1>Jeremy Rudman website</h1>
                <div className="photo"><img  src={require('./photo.jpg')} alt=""/></div>
                <p>I am a third year computer science student. This is a site to host my web projects.</p>
                <ul>
                    <li><a href="./weather">Weather app</a></li>
                    <li><a href="./ISS">International Space Station tracker</a></li>
                </ul>
            </div>
        );
    }
}




ReactDOM.render(<Home />, document.getElementById('root'));

