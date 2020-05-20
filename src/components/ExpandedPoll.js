import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/users';

function ExpandedPoll(props) {
  const [isChecked, setIsChecked] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (isChecked !== "") {
      const { auth, question, handleSaveQuestionAnswer } = props;
      handleSaveQuestionAnswer(auth.value, question.id, isChecked)
    }
  }


  const handleChange = (e) => setIsChecked(e.target.value);
  const { question } = props;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Would you rather</Label>
          <br />
          <Label check>
            <Input 
              type="radio" 
              name="radio1" 
              value="optionOne" 
              checked={isChecked === "optionOne"}
              onChange={handleChange}
            />{' '}
            {question.optionOne.text}
          </Label>
          <div className="text-center muted">OR</div>
          <Label check>
            <Input 
              type="radio" 
              name="radio1" 
              value="optionTwo" 
              checked={isChecked === "optionTwo"}
              onChange={handleChange}
            />{' '}
            {question.optionTwo.text}
          </Label>
          <br/>
          <Button color="success" >Submit</Button>
        </FormGroup>
      </Form>
    </div>

  )

}

function mapStateToProps ({ auth}, {match}){
  return {
    auth
  }
}


export default connect(
  mapStateToProps,
  {handleSaveQuestionAnswer}
)(ExpandedPoll);