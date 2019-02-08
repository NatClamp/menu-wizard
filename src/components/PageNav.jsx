import React, { Component } from 'react';
import './PageNav.css';

class PageNav extends Component {
  render() {
    console.log('rendering...');
    const { currentPage, pageNums, handlePageChange } = this.props;

    return (
      <nav className="pageNav">
        {pageNums.map(num => {
          return (
            <button
              key={num}
              id={num}
              onClick={handlePageChange}
              className={
                num === Number(currentPage)
                  ? 'pageNav__button pageNav__button--current'
                  : 'pageNav__button'
              }
            >
              {num}
            </button>
          );
        })}
      </nav>
    );
  }
}

export default PageNav;
