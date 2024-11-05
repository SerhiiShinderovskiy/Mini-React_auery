import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchPosts } from "../Sevices/getPost.service";

export function usePosts() {
    const { data, isLoading, isSuccess, isError} = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        select: (data) => data.data,
      })
    
      useEffect(() => {
        if (isSuccess) console.log("Data fetched successfully");
      }, [isSuccess, data])
    
      useEffect(() => {
        if (isError) console.log("Error fetching data");
      }, [isError])

    return {data, isLoading, isSuccess, isError}
}