"use client";

import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center">Welcome to uKnow</h1>
      <ul>
        {blogs.map(blog => (
          <Link href={`/blogs/${blog.id}`} key={blog.title}>
            <li className="text-lg font-semibold">
              {blog.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
