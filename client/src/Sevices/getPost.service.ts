import axios from "axios";
import { IPost } from "../types/types";

export const fetchPosts = async () => {
    try {
        return await axios.get<IPost[]>("http://localhost:5000/api/posts");
    } catch (error) {
        console.error('Error in post fetch!', error);
        throw error;
    }
}