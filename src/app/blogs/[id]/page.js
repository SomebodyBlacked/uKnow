'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '@/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function BlogPage() {
  const { id: blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, 'blogs', blogId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  if (!blog) {
    return (
      <article className="max-w-3xl mx-auto">
        <div className="text-center">
          Loading...
        </div>
      </article>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-1 text-center">{blog.title}</h1>
      <h2 className="text-lg font-semibold mb-4 text-center opacity-90">{new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}</h2>
      <div>
        <div
          className="prose lg:prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </article>
  );
}