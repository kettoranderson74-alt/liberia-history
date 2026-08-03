"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";


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
    ],


    content: value,


    onUpdate({ editor }) {

      onChange(editor.getHTML());

    },


  });



  if (!editor) {
    return null;
  }



  return (

    <div className="border rounded-lg p-4">


      <div className="flex gap-2 mb-4">


        <button

          type="button"

          onClick={() =>
            editor.chain().focus().toggleBold().run()
          }

          className="bg-gray-200 px-3 py-1 rounded"

        >
          Bold
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




      <EditorContent

        editor={editor}

        className="min-h-[250px]"

      />


    </div>

  );

}