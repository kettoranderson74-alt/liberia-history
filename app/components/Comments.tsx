"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function Comments({
  articleSlug,
}: {
  articleSlug: string;
}) {

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);


  async function loadComments() {

    const { data, error } = await supabase
      .from("Comment")
      .select("*")
      .eq("article_slug", articleSlug)
      .order("created_at", { ascending: false });


    if (error) {
      console.log(error.message);
      return;
    }


    if (data) {
      setComments(data);
    }

  }


  useEffect(() => {
    loadComments();
  }, [articleSlug]);



  async function submitComment() {

    if (!name || !comment) {
      alert("Please enter your name and comment");
      return;
    }


    const { error } = await supabase
      .from("Comment")
      .insert([
        {
          article_slug: articleSlug,
          name: name,
          comment: comment,
        },
      ]);


    if (error) {
      alert(error.message);
      return;
    }


    setName("");
    setComment("");

    loadComments();

  }



  return (
    <section className="max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow p-6">

      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Visitor Comments 🇱🇷
      </h2>


      <input
        className="border p-3 w-full rounded mb-4"
        placeholder="Your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />


      <textarea
        className="border p-3 w-full rounded mb-4"
        placeholder="Write your comment..."
        rows={4}
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
      />


      <button
        onClick={submitComment}
        className="bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Post Comment
      </button>


      <div className="mt-8 space-y-4">

        {comments.map((item)=>(

          <div
            key={item.id}
            className="border-b pb-4"
          >

            <h3 className="font-bold">
              {item.name}
            </h3>


            <p className="text-gray-700">
              {item.comment}
            </p>


            <p className="text-sm text-gray-400 mt-2">
              {new Date(item.created_at).toDateString()}
            </p>

          </div>

        ))}

      </div>


    </section>
  );
}