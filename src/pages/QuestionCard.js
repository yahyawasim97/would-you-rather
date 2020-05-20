import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import '../App.css';
import ExpandedPoll from '../components/ExpandedPoll';
import InitialPoll from '../components/InitialPoll';
import PollResult from '../components/PollResults';

const questionTypes = {
  INITIAL: 'INITIAL',
  EXPANDED: 'EXPANDED',
  RESULTS: 'RESULTS',
};

const QuestionData = (props) => {
  const { questionType, question, isAnswered } = props;
  switch (questionType) {
    case questionTypes.INITIAL:
      return <InitialPoll question={question} isAnswered={isAnswered} />;
    case questionTypes.EXPANDED:
      return <ExpandedPoll question={question} />;
    case questionTypes.RESULTS:
      return <PollResult question={question} />;

    default:
      return null;
  }
};

function QuestionCard(props) {
  const {
    question,
    author,
    isAnswered = null,
    questionType,
    invalidId,
  } = props;

  if (invalidId) {
    return <Redirect to="/questions/invalid" />;
  }
  console.log(author)
  return (
    <div>
      <Row>
        <Col sm="12" md="12">
          <Card body>
            <CardHeader style={{ textAlign: 'left' }}>
              <span style={{ fontWeight: 'bold' }}>{author.name}</span> asks:
            </CardHeader>
            <CardBody>
              <Row>
                <Col sm="4" md="4">
                  <img src={author.avatarURL} alt="" width="150px" />
                </Col>
                <Col sm="8" md="8">
                  <QuestionData
                    question={question}
                    questionType={questionType}
                    isAnswered={isAnswered}
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function mapStateToProps({ users, questions, auth }, { match, questionId }) {
  let question,
    questionType,
    invalidId = false;
  let author;
  if (questionId) {
    question = questions[questionId];
    author = users[question.author];
    questionType = questionTypes.INITIAL;
  } else {
    const { questionId } = match.params;
    question = questions[questionId];
    const user = users[auth.value];

    if (question === undefined) {
      invalidId = true;
    } else {
      questionType = questionTypes.EXPANDED;

      if (Object.keys(user.answers).includes(questionId)) {
        questionType = questionTypes.RESULTS;
      }
      author = users[question.author];
    }
  }

  return {
    question,
    author,
    questionType,
    invalidId,
  };
}

export default connect(mapStateToProps)(QuestionCard);
