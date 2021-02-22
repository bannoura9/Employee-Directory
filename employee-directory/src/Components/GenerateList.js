import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm.js";
import ResultList from "./ResultList.js";
import Title from "./Title"

class GenerateList extends React.Component {
  state = {
    search: "",
    results: [],
    order: "descend",
    columnToSort: '',
    sortDirection: 'desc',
  };


  apiCall = () => {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.apiCall();
  }

  handleInputChange = (event) => {
    const search = event.target.name;
    const value = event.target.value;
    this.setState({
      [search]: value,
    });
  };

  nameArray = () => {
    const sorted = [...this.state.results].sort((a, b) =>
      a.name.last > b.name.last ? 1 : -1
    );
    this.setState({
      ...this.state,
      results: sorted,
    });
  };

  render() {
    return (
      <>
        <div>
          <Title>Employee Directory</Title>
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
          />
          <ResultList
            results={this.state.results}
            search={this.state.search}
            nameArray={this.nameArray}
            order={this.state.order}
          />
        </div>
      </>
    );
  }
}

export default GenerateList;
