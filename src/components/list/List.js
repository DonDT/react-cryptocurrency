import React, { Component } from "react";
import { handleResponse } from "../../helpers";
import { API_URL } from "../../config";
import Loading from "../common/Loading";
import Table from "./Table";
import Pagination from "./pagination";

class List extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      currencies: [],
      error: null,
      totalPages: 0,
      page: 1
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies = () => {
    this.setState({ loading: true });
    const { page } = this.state;
    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
      .then(handleResponse)
      .then(data => {
        const { currencies, totalPages } = data;

        this.setState({
          currencies,
          loading: false,
          totalPages
        });
      })
      .catch(error => {
        this.setState({
          error: error.errorMessage,
          loading: false
        });
        console.log("Error", error);
      });
  };

  handlePaginationclick = direction => {
    let nextpage = this.state.page;

    direction === "next" ? nextpage++ : nextpage--;

    this.setState({ page: nextpage }, () => {
      this.fetchCurrencies();
    });
  };

  render() {
    const { loading, error, currencies, page, totalPages } = this.state;

    /* The above is the same as const loading = this.state.loading ... same for the others.*/

    if (loading) {
      return (
        <div className="loading-container">
          <Loading />{" "}
        </div>
      );
    }
    if (error) {
      return <div className="error">{error}</div>;
    }

    return (
      <div>
        <Table currencies={currencies} />
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePaginationclick={this.handlePaginationclick}
        />
      </div>
    );
  }
}

export default List;
