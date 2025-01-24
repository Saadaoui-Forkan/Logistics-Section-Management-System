import { Link } from "react-router-dom";

const Pagination = ({ pages, route, pageNumber }) => {
    const pageLimit = 2;
    const startPage = Math.max(1, pageNumber - Math.floor(pageLimit / 2));
    const endPage = Math.min(pages, startPage + pageLimit - 1);

    const prev = pageNumber - 1;
    const next = pageNumber + 1;
    return (
        <div className="flex flex-wrap items-center justify-center mt-5 mb-10 space-x-1">
            {pageNumber !== 1 && (
                <Link
                    to={`${route}?pageNumber=${prev}`}
                    className="text-sm mx-1 p-2 w-6 h-6 border border-gray-600 rounded-full cursor-pointer text-gray-600 hover:text-blue-500 flex items-center justify-center"
                >
                    {`<`}
                </Link>
            )}

            {startPage > 1 && (
                <>
                    <Link
                        to={`${route}?pageNumber=1`}
                        className="mx-1 p-2 w-6 h-6 rounded-full cursor-pointer text-md flex items-center justify-center"
                    >
                        1
                    </Link>
                    {startPage > 2 && <span className="mx-2 text-gray-600">...</span>}
                </>
            )}

            {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
                <Link
                    to={`${route}?pageNumber=${page}`}
                    key={page}
                    className={`mx-1 p-2 w-6 h-6 cursor-pointer text-md flex items-center justify-center
                                    ${pageNumber === page
                            ? "border border-blue-500 rounded-full text-blue-500"
                            : "text-gray-600"
                        }`}
                >
                    {page}
                </Link>
            ))}

            {endPage < pages && (
                <>
                    {endPage < pages - 1 && <span className="mx-2 text-gray-600">...</span>}
                    <Link
                        to={`${route}?pageNumber=${pages}`}
                        className="mx-1 p-2 w-6 h-6 rounded-full cursor-pointer text-md flex items-center justify-center"
                    >
                        {pages}
                    </Link>
                </>
            )}

            {pageNumber !== pages && (
                <Link
                    to={`${route}?pageNumber=${next}`}
                    className="text-sm mx-1 p-2 w-6 h-6 border border-gray-600 rounded-full cursor-pointer text-gray-600 hover:text-blue-500 flex items-center justify-center"
                >
                    {`>`}
                </Link>
            )}
        </div> 
    )
};

export default Pagination;