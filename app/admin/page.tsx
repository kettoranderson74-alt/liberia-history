"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Editor from "../components/Editor";

export default function AdminPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [articles, setArticles] = useState<any[]>([]);

  const [editingTitle, setEditingTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);


  async function loadArticles() {
    const { data } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setArticles(data);
    }
  }


  useEffect(() => {

    async function checkUser() {

      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
        return;
      }

      loadArticles();

    }

    checkUser();

  }, []);



  function editArticle(article: any) {

    setTitle(article.title);
    setContent(article.content);

    setEditingTitle(article.title);
    setIsEditing(true);

    setMessage("Editing article...");

  }



  async function updateArticle() {

    const { error } = await supabase
      .from("articles")
      .update({
        title,
        content,
      })
      .eq("title", editingTitle);


    if (error) {
      setMessage("Update error: " + error.message);
      return;
    }


    setMessage("✅ Article updated successfully!");

    setTitle("");
    setContent("");
    setIsEditing(false);

    loadArticles();

  }



  async function deleteArticle(id: number) {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this article?"
  );

  if (!confirmDelete) return;


  const { error } = await supabase
    .from("articles")
    .delete()
    .eq("id", id);


  if (error) {

    setMessage("Delete error: " + error.message);
    return;

  }


  setMessage("✅ Article deleted successfully!");

  loadArticles();

}



  async function addArticle() {


    if (!title || !content) {

      setMessage("Please enter title and content.");
      return;

    }


    setMessage("Publishing...");



    const slug = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");



    const { error } = await supabase
      .from("articles")
      .insert([
        {
          title,
          slug,
          category: "Liberia History",
          image_url: "",
          content,
          published: true,
        },
      ]);



    if (error) {

      setMessage("Database error: " + error.message);
      return;

    }


    setMessage("✅ Article published successfully!");


    setTitle("");
    setContent("");

    loadArticles();

  }  return (

    <main className="min-h-screen bg-gray-50 p-10">

      <div className="max-w-5xl mx-auto">


        <div className="bg-white p-8 rounded-xl shadow">


          <h1 className="text-3xl font-bold text-green-700 mb-6">
            Liberia History Admin Dashboard 🇱🇷
          </h1>


          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/login");
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg mb-6"
          >
            Logout
          </button>



          <div className="mb-4">

            <input

              className="border p-3 w-full rounded mb-4"

              placeholder="Article title"

              value={title}

              onChange={(e)=>setTitle(e.target.value)}

            />


            <Editor
              value={content}
              onChange={setContent}
            />

          </div>




          <button

            onClick={
              isEditing ? updateArticle : addArticle
            }

            className="bg-green-700 text-white px-6 py-3 rounded-lg"

          >

            {
              isEditing
              ? "Update Article"
              : "Publish Article"
            }

          </button>



          <p className="mt-5 font-semibold">
            {message}
          </p>


        </div>





        <div className="bg-white mt-10 p-8 rounded-xl shadow">


          <h2 className="text-2xl font-bold mb-6">
            Published Articles
          </h2>



          <table className="w-full border-collapse">


            <thead>

              <tr className="bg-gray-100">

                <th className="border p-3 text-left">
                  Title
                </th>

                <th className="border p-3 text-left">
                  Category
                </th>

                <th className="border p-3 text-left">
                  Actions
                </th>

              </tr>

            </thead>




            <tbody>


              {articles.map((article)=>(


                <tr key={article.id}>


                  <td className="border p-3">

                    {article.title}

                  </td>



                  <td className="border p-3">

                    {article.category}

                  </td>




                  <td className="border p-3">


                    <button

                      onClick={() => editArticle(article)}

                      className="bg-blue-600 text-white px-3 py-1 rounded mr-2"

                    >
                      Edit

                    </button>



                    <button

                      onClick={() => deleteArticle(article.id)}

                      className="bg-red-600 text-white px-3 py-1 rounded"

                    >
                      Delete

                    </button>


                  </td>


                </tr>


              ))}



            </tbody>


          </table>


        </div>


      </div>


    </main>

  );

}