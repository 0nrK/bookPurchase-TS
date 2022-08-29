import React, { /* useEffect, */ useState } from 'react'
import Books from '../components/Books'
import Nav from '../components/Nav'
import { useGetBooksQuery } from '../redux/bookApi'

const Home = () => {
    const [page, setPage] = useState<number>(1)
/*     const [searchInput, setSearchInput] = useState<string>('')
 */
    const { data, error, isLoading } = useGetBooksQuery(page)

   /*  let handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(() => e.target.value);
    }; */

if (isLoading) return <p>Loading...</p>
if (error) return <p>Something went wrong...</p>

    return (
        <>
            <Nav />

            <div className='max-w-5xl mt-12 mx-auto'>

                <div>
                    {data && <Books props={data.data} />}
                </div>


                <div className='flex justify-end text-2xl space-x-3 items-center py-3'>

                    <button
                    data-testid='prevButton'
                        onClick={() => setPage((prev) => prev > 1 ? prev - 1 : 1)}
                        className='rounded-full p-3 border-2 shadow-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <span
                    data-testid='pageNumber'
                        className='border-2 w-12 h-12 flex  justify-center  items-center 
                        rounded-md p-3'>
                        {page}
                    </span>

                    <button
                        onClick={() => setPage((prev) => prev + 1)}
                        data-testid='nextButton'
                        className='rounded-full p-3 border-2 shadow-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                </div>
            </div>
        </>
    )
}

export default Home