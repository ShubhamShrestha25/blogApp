import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../feature/userSlice";

const Blog = () => {
    const searchInput = useSelector(selectUserInput)

    const blog_url =`https://gnews.io/api/v4/search?q=${searchInput}&token=787db4cf8b91a8f8ca1c8da68c5d6424`
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState();

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
          .get(blog_url)
          .then((response) => {
            dispatch(setBlogData(response.data));
            setBlogs(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [searchInput]);
    

    return (
        <div className="blog_page">
            <h1 className="blog_page_header"></h1>
        </div>
    )
}

export default Blog
