import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import useGetShowData from '../api/useGetShowData';
import TicketForm from './TicketForm';

const Summery = () => {
    const paramId = useParams();
    const [allShow, isLoading] = useGetShowData();
    const [show, setShow] = useState({})

    useEffect(() => {

        return () => {
            if (!isLoading) {
                const IdData = allShow.find(data => data.show.id == paramId?.id)
                setShow(IdData)
            }
        }
    }, [allShow, paramId])


    return (
       
            <div className='flex justify-center items-center bg-gradient-to-t to-purple-900 from-gray-900 py-5 min-h-screen'>
                <div className='md:h-[80vh] container mx-auto'>
                    <div className='lg:w-[80%] w-[90%] mx-auto bg-gray-400 py-5 md:px-16 px-5 rounded'>
                        <h1 className='text-3xl font-bold text-center pb-5'>{show?.show?.name}</h1>
                        <div className='md:h-[60vh] md:flex items-center gap-x-10'>
                            <img className='h-full rounded' src={show?.show?.image?.original ? show?.show?.image?.original : 'https://static.tvmaze.com/uploads/images/original_untouched/494/1235114.jpg'} alt="" />
                            <div className='flex-1 my-2'>
                                <p className='lg:pb-10 pb-3 text-sm lg:text-base'>{show?.show?.summary}</p>
                                <TicketForm show={show}></TicketForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Summery;