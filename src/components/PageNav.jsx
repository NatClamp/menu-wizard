import React from 'react';

const PageNav = props => {
  const { currentPage, pageNums, handlePageChange } = props;
  return (
    <div>
      {pageNums.map(num => {
        return (
          <button key={num} id={num} onClick={handlePageChange}>
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default PageNav;
