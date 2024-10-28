import React from 'react'

export default function PagePagination({currentPage, setCurrentPage, totalPages}) {

  const handlePrev = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePageClick = (n) => {
    setCurrentPage(n)
  }

  const pageNumbers =[...Array(totalPages).keys()].map(num => num + 1);

  const isActive = (page) => {
    return page === currentPage;
  }

  return (
    <div className='flex flex-wrap justify-center items-center gap-1'>
      <button className={`pages-pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <div className='flex gap-1'>
        {pageNumbers.map(page => (
          <button className={`pages-pagination-btn ${isActive(page) ? "active" : ""}`}
            key={page}
            onClick={() => handlePageClick(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
      </div>
      <button className={`pages-pagination-btn ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}
