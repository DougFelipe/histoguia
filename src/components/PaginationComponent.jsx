import React from "react";
import { Pagination, PaginationItemType } from "@nextui-org/react";
import ChevronIcon from "./ChevronIcon";
import cn from 'classnames';  // Certifique-se de que classnames está instalado: npm install classnames
import styles from '../css/PaginationComponent.module.css';

const PaginationComponent = ({ total, currentPage, onPageChange }) => {
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button key={key} className={cn(className, styles.navButton)} onClick={onNext}>
          <ChevronIcon className={styles.chevronIcon} style={{ transform: "rotate(180deg)" }} />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button key={key} className={cn(className, styles.navButton)} onClick={onPrevious}>
          <ChevronIcon className={styles.chevronIcon} />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return <button key={key} className={className}>...</button>;
    }

    return (
      <button
        key={key}
        ref={ref}
        className={cn(
          className,
          styles.pageButton,
          isActive && styles.activePageButton,
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={total}
      initialPage={currentPage}
      className={styles.pagination}
      radius="full"
      renderItem={renderItem}
      variant="light"
      onChange={onPageChange}
    />
  );
};

export default PaginationComponent;
