import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetShowData = () => {

       const {data: allShow, isLoading} = useQuery({
        queryKey:['all_show'],
        queryFn: async ()=> {
            const showData = await axios.get('https://api.tvmaze.com/search/shows?q=all')
            return showData.data;
        }
       })


    return [allShow,isLoading];
};

export default useGetShowData;