import React from "react";

export const Pagination = ({ page, pagesAmount, setPage, pagesToSee = 10 }) => {
  const halfPagesToSee = pagesToSee / 2;
  const arrPages = (pagesAmount) => {
    let arr = [];
    for (let index = 0; index < pagesAmount; index++) {
      arr.push(index + 1);
    }
    return arr;
  };
  const activePage = (p) => (page === p ? "active" : "");

  const iniIdx =
    pagesAmount > pagesToSee && page > halfPagesToSee
      ? page > pagesAmount - halfPagesToSee
        ? pagesAmount - pagesToSee
        : page - halfPagesToSee
      : 0;

  const finIdx = page > halfPagesToSee ? page + halfPagesToSee : pagesToSee;

  const pages = arrPages(pagesAmount)
    .slice(iniIdx, finIdx)
    .map((p) => (
      <li className={`page-item ${activePage(p)}`} key={p}>
        <button className="page-link" onClick={() => setPage(p)}>
          {p}
        </button>
      </li>
    ));

  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination pagination-sm justify-content-end">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => setPage(1)}
            aria-disabled="true"
          >
            &laquo;
          </button>
        </li>

        {pages}

        <li className="page-item">
          <button
            className="page-link"
            onClick={() => setPage(pagesAmount)}
            aria-disabled="true"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};
