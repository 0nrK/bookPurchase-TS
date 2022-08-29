import React from 'react'
import { IBook } from 'types/book';
import Book from './Book'


export type IProps = {
    props: Array<IBook>
}

const Books  = ({ props } : IProps ) => {


    return (
        <div className="flex mt-3 flex-wrap  ">
            {props.map((book:any) => {
                console.log(book);
                return <Book key={book.id} props={book} />
            })}
        </div>
    )
}

export default Books