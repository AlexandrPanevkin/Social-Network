import React, {memo} from 'react';
import s from './Paginator.module.css';

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    setPage: (page: number) => void
    currentPage: number
}

export const Paginator = memo(({totalUsersCount, pageSize, setPage, currentPage}: PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageClickHandler = (page: number) => {
        setPage(page)
    }

    return <div className={s.pages}>
        {pages.map(p => {
            return <span key={p} onClick={() => onPageClickHandler(p)}
                         className={currentPage === p ? s.selectedPage : s.page}>{p}</span>
        })
        }
    </div>
})