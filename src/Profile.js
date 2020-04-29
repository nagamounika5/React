import React from 'react';
import './App.css';
import Data from './data/data.json';

class Profile extends React.Component{
    render(){
        var indexValue=this.props.location.data.id;
        var specificProfile=Data.profiles[indexValue];
        return(
            <section className="parent">
                <div className="card">
                    <div className="card-top">
        <h3> {specificProfile.basicInformation.name} </h3>
        <em> {specificProfile.basicInformation.email} </em>
                    </div>

                    <div className="card-bottom">
        <a href={"mailto:"+i.basicInformation.email}> {i.basicInformation.email}</a>
        <a href={"tel:"+i.basicInformation.mobile}> {i.basicInformation.mobile}</a>
                    </div>
                </div>

                <div className="card2">
                    <div className="card-bottom">
                        <h2> Educational Qualification</h2>
                    </div>

                    <div className="card-top">
                        {specificProfile.education.map((i,j)=>(
                            <li> {i.degree}</li>
                        <p>{i,institution}</p>
                        
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}


export default Profile;