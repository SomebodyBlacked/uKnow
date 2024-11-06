import { db } from '@/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  try {
    const blogsCollection = collection(db, 'blogs');
    const blogsSnapshot = await getDocs(blogsCollection);
    const blogsList = blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return new Response(JSON.stringify(blogsList), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}