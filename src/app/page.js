"use client";

import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center">Welcome to uKnow</h1>
      <div className="my-3"></div>
      {loading ? (
        <p className="text-center">Cargando blogs...</p>
      ) : (
        <ul>
          {blogs.map(blog => (
            <Link href={`/blogs/${blog.id}`} key={blog.title}>
              <li className="border rounded-3xl text-lg font-semibold hover:bg-gray-800 p-4 shadow-md">
                {blog.title}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
