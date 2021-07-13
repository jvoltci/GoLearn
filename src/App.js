import React from "react";
import Register from "./components/Register";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const initialState = {
  name: "",
  email: "",
  interests: [],
  autoSuggestWords: [],
  isRegisterPage: true,
  isValidInput: {
    name: true,
    email: true,
    interests: true,
  }
};

class App extends React.Component {
  state = initialState;
  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleRegister = () => {
    const {name , email, interests} = this.state;
    if (
      this.validateEmail(email) &&
      (name.length > 2 && !/[^a-z]/i.test(name)) &&
      interests.length
    ) {
      fetch("https://testpostapi1.p.rapidapi.com/testBatmanApi/name/batman", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          accept: "success",
          "x-rapidapi-key":
            "722b936843mshaeeab34eb6eb260p1776acjsn7d7f722eb105",
          "x-rapidapi-host": "testpostapi1.p.rapidapi.com",
        },
        body: {
          name: name,
          email: email,
          interest: JSON.stringify(interests),
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            console.log([name, email, interests], " Registered!")
            this.setState({ isRegisterPage: false });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
    else {
      this.setState({isValidInput: {name: (name.length > 2 && !/[^a-z]/i.test(name)), email: this.validateEmail(email), interests: this.state.interests.length}})
    }
  };

  updateAutoSuggestWords = (e) => {
    if (e.target.value.length > 0)
      fetch(
        `https://webit-keyword-search.p.rapidapi.com/autosuggest?q=${e.target.value}&language=en`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "722b936843mshaeeab34eb6eb260p1776acjsn7d7f722eb105",
            "x-rapidapi-host": "webit-keyword-search.p.rapidapi.com",
          },
        }
      )
        .then((response) => response.json())
        .then((result) =>
          this.setState({
            autoSuggestWords: result.data.results,
          })
        )
        .catch((err) => {
          console.error(err);
        });
    else
      this.setState({
        autoSuggestWords: [],
      });
  };
  updateInterest = (interest) => {
    this.setState({
      interests: interest,
      autoSuggestWords: [],
    });
  };
  updateInputValue = (type, value) => {
    if (type === "name") this.setState({ name: value });
    else if (type === "email") this.setState({ email: value });
  };
  returnToHome = () => {
    this.setState(initialState);
  };
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Register
            autoSuggestWords={this.state.autoSuggestWords}
            interests={this.state.interests}
            isRegisterPage={this.state.isRegisterPage}
            isValidInput={this.state.isValidInput}
            updateAutoSuggestWords={this.updateAutoSuggestWords}
            updateInterest={this.updateInterest}
            handleRegister={this.handleRegister}
            returnToHome={this.returnToHome}
            updateInputValue={this.updateInputValue}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
