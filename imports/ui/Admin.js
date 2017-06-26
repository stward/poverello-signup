import Cookies from 'js-cookie'
import {createContainer}  from 'meteor/react-meteor-data'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {People} from '../api/people.js';

class Admin extends Component {
  deleteHandler(id) {
    People.update(
      {_id: id},
      {$set:{removed: true}}
    );
  }

  logOutHandler() {
    Cookies.remove("loggedIn")
    window.location.href = "/"
  }

  renderPeople() {
    let filteredPeople = this.props.people
    for (i in filteredPeople) {
      date = filteredPeople[i].createdAt
      year = date.getFullYear();
      month = date.getMonth()+1;
      dt = date.getDate();
      filteredPeople[i].createdAt = month + '/' + dt + '/' + year
    }
    return filteredPeople.map((person) => (
      <tr>
        <td>{person.createdAt.toString()}</td>
        <td>{person.name}</td>
        <td>{person.firstMealYear}</td>
        <td>{person.firstMealMonth}</td>
        <td>{person.gender}</td>
        <td>{person.seniorChild}</td>
        <td>{person.employed}</td>
        <td>{person.veteran}</td>
        <td>
          <button type="button" className="btn btn-default" onClick={(id) => this.deleteHandler(person._id)}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <h1>New Registers</h1>
        <a href="/adminArchive" className="btn btn-primary" role="button">Archive</a>
        <button className="btn btn-danger logOutBtn" onClick={() => this.logOutHandler()}>Log Out</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Registered</th>
              <th>Name</th>
              <th>First Meal This Year</th>
              <th>First Meal This Month</th>
              <th>Gender</th>
              <th>Age Group</th>
              <th>Employed</th>
              <th>Veteran</th>
              <th>Move To Archive</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPeople()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    people: People.find({removed:false}, {sort: {createdAt: -1}}).fetch()
  };
}, Admin);
