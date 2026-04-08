"use client";
import { useEffect, useState } from "react";
import { Post } from "@/types/post";
import { InputSearch } from "@/components/inputSearch";
import { get } from "http";

export default function Posts() {  

    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async () => {
        const res = await fetch("/api/get");
        const data = await res.json();
        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }else{
            setPosts(data);
        }
        console.log(data);
        return data;
    }

    const getPostsByUserId = async (userId: string) => {
        const res = await fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: userId })
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error("Failed to fetch posts by ID");
        }else{
            if(data && data.length > 0){
                setPosts(data);
            }else{
                getPosts();
            }
        }
        return data;
    };


    useEffect(() => {
        getPosts();
    }, []);

    return (
        <main className="w-full h-full flex flex-col gap-4 p-4">
            <div className="flex justify-center">
                <InputSearch placeholder="Search posts by userId..." onSearch={(query) => getPostsByUserId(query)} />
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