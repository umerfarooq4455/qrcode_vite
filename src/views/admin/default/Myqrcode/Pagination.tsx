import React, { useState } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import MyqrHeader from './MyqrHeader';

interface PaginatedItemsProps {
  itemsPerPage: number;
  items: any[]; // Replace 'any[]' with the actual type of your items
}

const PaginatedItems: React.FC<PaginatedItemsProps> = ({ itemsPerPage, items }) => {
  const [itemOffset, setItemOffset] = useState<number>(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick: ReactPaginateProps['onPageChange'] = (selectedItem) => {
    const newOffset = selectedItem.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      <MyqrHeader currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginatedItems;
