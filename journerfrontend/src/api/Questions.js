import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../components/AppNavbar';
import { Link } from 'react-router-dom';

class Questions extends Component {

  render() {
    const {questions, isLoading} = this.state;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const questionList = questions.map(question => {
        return <tr key={question.id}>
            <td style={{whiteSpace: 'nowrap'}}>{question.question}</td>
            <td>{question.answerList.map(Answer => <div>{Answer.answer}</div>)}</td>
            <td style={{whiteSpace: 'nowrap'}}>{question.question}</td>
            <td>
{/*                 <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/question/" + question.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => this.remove(question.id)}>Delete</Button>
                </ButtonGroup> */}
            </td>
        </tr>
    });

    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/question/">Add Client</Button>
                </div>
                <h3>Questions</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="30%">Name</th>
                        <th width="30%">Email</th>
                        <th width="40%">Category</th>
                    </tr>
                    </thead>
                    <tbody>
                    {questionList}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

    constructor(props) {
        super(props);
        this.state = {questions: []};
/*         this.remove = this.remove.bind(this); */
    }

    componentDidMount() {
        fetch('/question/')
            .then(response => response.json())
            .then(data => this.setState({questions: data}));
    }

    /* async remove(id) {
      await fetch(`/question/${id}`, {
          method: 'DELETE',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      }).then(() => {
          let updatedClients = [...this.state.questions].filter(i => i.id !== id);
          this.setState({clients: updatedClients});
      });
  } */
}
export default Questions;