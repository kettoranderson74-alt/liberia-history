"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

export default function Editor({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {

  const editor = useEditor({

    extensions: [
      StarterKit,
      Image,
    ],

    content: value,

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },

  });



  useEffect(() => {

    if (editor && value === "") {
      editor.commands.clearContent();
    }

  }, [value, editor]);



  const fileInputRef = useRef<HTMLInputElement>(null);


function addImage() {

  fileInputRef.current?.click();

}
async function uploadImage(
  e: React.ChangeEvent<HTMLInputElement>
) {

  const file = e.target.files?.[0];

  if (!file || !editor) return;


  const fileName = `${uuidv4()}-${file.name}`;


  const { error } = await supabase.storage
    .from("article-images")
    .upload(fileName, file);


  if (error) {

    alert(error.message);
    return;

  }


  const { data } = supabase.storage
    .from("article-images")
    .getPublicUrl(fileName);


  editor
    .chain()
    .focus()
    .setImage({
      src: data.publicUrl,
    })
    .run();

}
  if (!editor) {
    return null;
  }



  return (

    <div className="border rounded-lg p-4">


      <div className="flex gap-2 mb-4 flex-wrap">


      <button
  type="button"
  onClick={() => fileInputRef.current?.click()}
  className="bg-green-700 text-white px-3 py-1 rounded"
>
  Add Image
</button>



        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({
              level: 2
            }).run()
          }
          className="bg-gray-200 px-3 py-1 rounded"
        >
          Heading
        </button>



        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          className="bg-gray-200 px-3 py-1 rounded"
        >
          List
        </button>



        


      </div>


<input
  type="file"
  accept="image/*"
  ref={fileInputRef}
  onChange={uploadImage}
  hidden
/>

<EditorContent
  editor={editor}
  className="min-h-[250px]"
/>
      


    </div>

  );

}