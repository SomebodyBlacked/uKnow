"use client";

import { useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Button from "@/components/Button";

export default function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setMessage("Please fill in all fields");
      return;
    }

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        createdAt: new Date(),
      });
      setTitle("");
      setContent("");
      setMessage("Blog published successfully");
    } catch (error) {
      console.error("Error: ", error);
      setMessage("Error publishing blog");
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Create Blog</h1>
        {message && (
          <div className="p-4 rounded mb-4 bg-indigo-600">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
              id="content"
              placeholder="Blog content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <Button type="submit">
              Publish
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}