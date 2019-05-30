/**
 *
 * NewsPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import useInjectSaga from "utils/injectSaga";
import useInjectReducer from "utils/injectReducer";
import makeSelectNewsPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

class NewsPage extends React.Component {

  state = {
    news: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
    currentPage: 1,
    newsPerPage: 5
  };

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { currentPage, newsPerPage } = this.state;
    const { news } = this.props;
    console.log(news);

    // Logic for displaying news
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.newsInfo.slice(indexOfFirstNews, indexOfLastNews);

    const renderNews = currentNews.map((itemNews, index) => {
      return <li key={index}>
        <h3>{itemNews.name}</h3>
        <p>{itemNews.description}</p>
      </li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(news.newsInfo.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <article>
        <ul>
          {renderNews}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </article>
    );
  }
}

NewsPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  news: makeSelectNewsPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = useInjectReducer({ key: "newsPage", reducer });
const withSaga = useInjectSaga({ key: "newsPage", saga });

export default compose(withConnect, withReducer, withSaga)(NewsPage);
