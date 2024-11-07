import axios from "axios";
import { IPost } from "../types/types";

export const fetchCreatePosts = async (postData: Omit<IPost, 'id'>) => {
    try {
        return await axios.post("http://localhost:5000/api/add-post", postData);
    } catch (error) {
        console.error('Error in creating post!', error);
        throw error;
    }
}