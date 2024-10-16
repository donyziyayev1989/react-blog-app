import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ pageCount, pageRangeDisplayed = 3, onPageChange }) => {
  return (
    <nav aria-label="Page navigation example">
      <ReactPaginate
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        nextLabel={<FaAngleRight />}
        previousLabel={<FaAngleLeft />}
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        onPageChange={onPageChange}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
        renderOnZeroPageCount={null}
      />
    </nav>
  );
};

export default Pagination;
