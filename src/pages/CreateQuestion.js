import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Form, Row, Spinner } from 'reactstrap';
import { addQuestion } from '../actions/questions';
import PoolInput from '../components/PoolInput';
class AddQuestion extends Component {
  state = {
    isSubmit: false,
    isLoading: false,
    option1: '',
    option2: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    const { auth, addQuestion } = this.props;
    const { option1, option2 } = this.state;

    new Promise((res, rej) => {
      this.setState({ isLoading: true });
      const data = {
        optionOneText: option1,
        optionTwoText: option2,
        author: auth.value,
      };
      addQuestion(data);
      setTimeout(() => res('success'), 1000);
    }).then(() => {
      this.setState({
        option1: '',
        option2: '',
        isSubmit: true,
      });
    });
  };

  checkdisabled = () => {
    return (
      this.state.option1 === '' ||
      this.state.option2 === '' ||
      this.state.isLoading
    );
  };

  render() {
    const disabled = this.checkdisabled();
    const { isLoading } = this.state;
    if (this.state.isSubmit) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Row>
          <Col sm="12" className="col-centered">
            <Card body>
              <CardHeader style={{ textAlign: 'left' }}>
                <span style={{ fontWeight: 'bold' }}>
                  Create a New Question
                </span>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <strong>Would you rather</strong>
                    <Form onSubmit={this.handleSubmit}>
                      <PoolInput
                        handleChange={this.handleChange}
                        id="option1"
                        placeholder="Enter first option"
                        option={this.state.option1}
                      />
                      <PoolInput
                        id="option2"
                        placeholder="Enter second option"
                        option={this.state.option2}
                        handleChange={this.handleChange}
                      />
                      <Button disabled={disabled} color="success">
                        {isLoading ? <Spinner color="white" /> : 'Submit'}
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps, { addQuestion })(AddQuestion);
