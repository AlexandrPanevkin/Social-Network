import React, {memo, useState} from 'react';
import s from './Paginator.module.css';

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    setPage: (page: number) => void
    currentPage: number
    portionSize?: number
}

export const Paginator = memo(({
                                   totalItemsCount,
                                   pageSize,
                                   setPage,
                                   currentPage,
                                   portionSize = 10
                               }: PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    const onPageClickHandler = (page: number) => {
        setPage(page)
    }

    return <div className={s.pages}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {

            return <span key={p} onClick={() => onPageClickHandler(p)}
                         className={currentPage === p ? s.selectedPage : s.page}>{p}</span>
        })
        }
        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
        }
    </div>
})