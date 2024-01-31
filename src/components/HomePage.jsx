import useGetShowData from "../api/useGetShowData";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


const HomePage = () => {
    const [allShow, isLoading] = useGetShowData();

    return (
        <div className="py-10 bg-gradient-to-t to-purple-900 from-gray-900 min-h-screen">
            <h1 className="uppercase text-center w-fit bg-gray-200 text-2xl md:text-5xl font-bold py-4 shadow-inner shadow-blue-500  px-10 rounded-md mx-auto"><span className="text-pink-500">TV</span> Shows</h1>

            <div className="mt-20 grid md:grid-cols-2 md:px-12 lg:px-0 px-6  grid-cols-1 lg:grid-cols-4 gap-x-24 gap-y-14 container mx-auto">
                {isLoading ? <div>Loading...</div> :
                    allShow.map(sh => <div key={sh?.score}>

                        <div className="border-2 border-gray-500 rounded">
                            <img className="w-full rounded-tr rounded-tl" src={sh?.show?.image?.medium ? sh?.show?.image?.medium : 'https://static.tvmaze.com/uploads/images/medium_portrait/494/1235114.jpg'} alt="" />
                            <div className="bg-gradient-to-b to-gray-500 from-gray-200">
                                <h1 className="text-center  text-xl font-semibold">{sh?.show?.name}</h1>
                                <div className="flex gap-2 items-center px-2 border-t border-gray-400">
                                    <p className="text-base font-semibold ">Rating:</p>
                                    <ReactStars
                                        count={sh?.show?.rating?.average ? sh?.show?.rating?.average / 2 : 1}
                                        size={25}
                                        color="red"
                                    />
                                </div>
                                <div className="flex px-2 pb-3 items-center justify-between">
                                <h1 className="text-base font-semibold ">Type: {sh?.show?.type}</h1>
                                <button className="bg-blue-600 text-gray-100 rounded hover:bg-blue-800 px-3">
                                      <Link to={`/id${sh?.show?.id}id`}>summary</Link>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomePage;