import React, { Component } from 'react';
import { Button, Container, Table } from 'reactstrap';

class Questions extends Component {

/* const setCurrentCity = (cityName) => {
  fetch(`http://localhost:8080/city/setcurrentcity/${cityName}`, {
    method: "POST",
  }).then((response) => response.json());
}; */

  async handleSubmit(event) {

/*     const {item} = this.state; */

    await fetch('game/createplayer/' + event, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
/*         body: JSON.stringify(item), */
    }).then((response) => response.json());;
    //this.props.history.push('game/createplayer/' + inputVal);
}

  render() {
    const {questions, isLoading} = this.state;

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const questionList = questions.map(question => {
      return(<div>{question.question}</div>)
      
    });

    return (
        <div className="container-bg">

            <Container fluid>
                <form>
          <input
            type="text"
            placeholder="name"
            id="input-name"
          ></input>
          <Button
          className="btn btn-secondary btn-lg"
            variant="primary"
            id="new-game"
            onClick={(e) => {
              this.handleSubmit(document.getElementById("input-name").value);

              window.location.href = `/newgamescreen`;
            }}
          >
            New Game
          </Button>{" "}
          <Button className="btn btn-secondary btn-lg" variant="primary">HighScore</Button>
        </form>
  
        <div id="temp">
          <button
            id="new-game"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/accomondations`;
            }}
          >
            Accomondations
          </button>
          <button
            id="new-game"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/attraction`;
            }}
          >
            Attraction
          </button>
          <button
            id="new-game"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/city`;
            }}
          >
            City
          </button>
          <button
            id="new-game"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/transportation`;
            }}
          >
            Transportation
          </button>
        </div>
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

/*     async componentDidMount() {
      if (this.props.match.params.id !== 'new') {
          const client = await (await fetch(`/clients/${this.props.match.params.id}`)).json();
          this.setState({item: client});
      }
  } */

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