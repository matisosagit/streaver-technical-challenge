"use client";
import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import { InputSearch } from "@/components/inputSearch";
import useSWR from "swr";
import { toast } from "sonner";

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
        setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

export default function Posts() {  
    const [userId, setUserId] = useState<number | null>(null);
    const debouncedSearch = useDebounce(userId, 500);
    const fetcher = (url: string) => fetch(url).then(res => res.json());

    /* const { data: allPosts = [], error: errorAll, isLoading: loadingAll } = useSWR("/api/get", fetcher,{
        loadingTimeout: 3000,
        onLoadingSlow: () => {
            toast.warning("bad connction, waiting for response...")
        }
    }); */
    const { data: userPosts = [], error: errorUser, isLoading: loadingUser } = useSWR(debouncedSearch ? `/api/getbyid?userId=${debouncedSearch}` : `/api/get`, fetcher, {
        loadingTimeout: 3000,
        onLoadingSlow: () => {
            toast.warning("bad connction, waiting for response...")
        }
    });

    const posts: Post[] = userPosts ;

    if(errorUser) {
        return <div className="w-full min-h-screen flex justify-center items-center"><p>Failed to load posts</p></div>
    }

    if(loadingUser) {
        return <div className="w-full min-h-screen flex justify-center items-center"><p>Loading...</p></div>
    }

    return (
        <main className="w-full h-full flex flex-col gap-4 p-4">
            <h1 className="text-3xl font-bold text-heading text-center">Posts</h1>
            <div className="flex justify-center">
                <InputSearch 
                    placeholder="Search posts by userId..." 
                    onValueChange={(value : string) => setUserId(parseInt(value))}
                    onSearch={()=> setUserId(null)}
                />
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                {posts.map((post) => (
                    <div className="bg-neutral-primary-soft block flex-column max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium" key={post.id} >
                        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{post.title}</h2>
                        <p className="text-body">{post.body}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}