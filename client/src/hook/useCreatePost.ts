import { useMutation } from "@tanstack/react-query";
import { fetchCreatePosts } from "../Sevices/createPost.service";


export function useCreatePost() {

    const { mutate, isPending } = useMutation({
        mutationKey: ['add post'],
        mutationFn: fetchCreatePosts,
    })
    
    return {mutate, isPending}
}