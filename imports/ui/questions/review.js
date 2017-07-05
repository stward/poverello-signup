import React from 'react'
import {Link} from 'react-router-dom'
import NextButtonStyle from '../NextButtonStyle'

const submitStyle = {
  margin: 40,
  fontSize: 100,
  padding: 40,
  background: '#5cff59',
  borderRadius: 20,
  border: 'solid white 5px',
  color: 'black',
  width: '70%'
}

const Review = (props) => {
return (
  <div className="review-row">
    <h1>Review your information. Does this all look right?</h1>
    <hr />
    <div>
        <p><b>Name:</b> {props.info.name} <Link to={'/questions/1'}><button onClick={() => props.editQuestion()}>[Change]</button></Link></p>
        <p><b>Is this your first meal this year:</b> {props.info.firstMealYear} <Link to={`/questions/2`}><button onClick={() => props.editQuestion()}>[Change]</button></Link></p>
        <p><b>Is this your first meal this month:</b> {props.info.firstMealMonth} <Link to={`/questions/3`}><button onClick={() => props.editQuestion()}>[Change]</button></Link></p>
        <p><b>Are you male or female:</b> {props.info.gender} <Link to={`/questions/4`}><button onClick={() => props.editQuestion()}>[Change]</button></Link></p>
        <p><b>How old are you:</b> {props.info.seniorChild} <Link to={`/questions/5`}><button onClick={() => props.editQuestion()}>[Change]</button></Link></p>
        <p><b>Are you currently employed:</b> {props.info.employed} <Link to={`/questions/6`}><button onClick={() => props.editQuestion()}>[Change]</button></Link></p>
        <p><b>Are you a veteran:</b> {props.info.veteran} <Link to={`/questions/7`}><button onClick={() => props.editQuestion()}>[Change]</button></Link></p>
    </div>
    <div className="review-button-group">
      <button style={submitStyle} onClick={(event) => props.handleSubmit()}>Submit</button>
    </div>
    <div className="next-button-group">

    </div>
  </div>
)
}
export default Review;
