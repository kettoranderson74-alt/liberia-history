
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

export default function Editor({
  value,
  onChange,
  featuredImage: externalFeaturedImage = "",
  onFeaturedImageChange,
}: {
  value: string;
  onChange: (value: string) => void;
  featuredImage?: string;
  onFeaturedImageChange?: (url: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Image,
    ],

    content: value,

    editorProps: {
      attributes: {
        class:
          "ProseMirror min-h-[300px] w-full outline-none cursor-text leading-8",
      },
    },

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [featuredImage, setFeaturedImage] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  /*
   * Load existing article content and images whenever
   * the article being edited changes.
   */
  useEffect(() => {
    if (!editor) return;

    if (value) {
      const currentContent = editor.getHTML();

      if (currentContent !== value) {
        editor.commands.setContent(value);
      }

      const imageUrls: string[] = [];

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = value;

      const images = tempDiv.querySelectorAll("img");

      images.forEach((img) => {
        const src = img.getAttribute("src");

        if (src && !imageUrls.includes(src)) {
          imageUrls.push(src);
        }
      });

      setUploadedImages(imageUrls);

      /*
       * Restore the article's existing featured image.
       * If there is no saved featured image, use the first
       * image from the article as a fallback.
       */
      if (externalFeaturedImage) {
        setFeaturedImage(externalFeaturedImage);
      } else if (imageUrls.length > 0) {
        setFeaturedImage(imageUrls[0]);
      } else {
        setFeaturedImage("");
      }
    } else {
      editor.commands.clearContent();
      setUploadedImages([]);
      setFeaturedImage("");
    }
  }, [editor, value, externalFeaturedImage]);

  /*
   * Upload a new article image.
   */
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

    const imageUrl = data.publicUrl;

    /*
     * Add the image directly into the article.
     */
    editor
      .chain()
      .focus()
      .setImage({
        src: imageUrl,
      })
      .run();

    /*
     * Add it to the available article images.
     */
    setUploadedImages((prev) => {
      if (prev.includes(imageUrl)) {
        return prev;
      }

      return [...prev, imageUrl];
    });

    /*
     * Automatically make the first uploaded image
     * the featured image.
     */
    if (!featuredImage) {
      setFeaturedImage(imageUrl);
      onFeaturedImageChange?.(imageUrl);
    }

    /*
     * Allow the same file to be selected again.
     */
    e.target.value = "";
  }

  function selectFeaturedImage(url: string) {
    setFeaturedImage(url);
    onFeaturedImageChange?.(url);
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

      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={uploadImage}
        hidden
      />

      {uploadedImages.length > 0 && (
        <div className="mb-5">

          <h3 className="font-bold mb-3">
            Choose Featured Image
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {uploadedImages.map((url, index) => (
              <div
                key={url}
                className={`border rounded-lg p-2 ${
                  featuredImage === url
                    ? "border-yellow-500 border-4"
                    : "border-gray-200"
                }`}
              >

                <img
                  src={url}
                  alt={`Article image ${index + 1}`}
                  className="w-full h-28 object-cover rounded"
                />

                <button
                  type="button"
                  onClick={() => selectFeaturedImage(url)}
                  className={`w-full mt-2 px-2 py-1 rounded text-sm ${
                    featuredImage === url
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {featuredImage === url
                    ? "Featured"
                    : "Set as Featured"}
                </button>

              </div>
            ))}

          </div>
        </div>
      )}

      <div className="border rounded-lg p-4 min-h-[350px]">

        <EditorContent
          editor={editor}
          className="culture-editor"
        />

        <style jsx global>{`
          .culture-editor .ProseMirror {
            min-height: 300px;
            outline: none;
            font-size: 1.125rem;
            line-height: 1.8;
          }

          .culture-editor .ProseMirror p {
            margin-top: 0;
            margin-bottom: 1.25rem;
          }

          .culture-editor .ProseMirror p:last-child {
            margin-bottom: 0;
          }

          .culture-editor .ProseMirror h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-top: 2rem;
            margin-bottom: 1rem;
            line-height: 1.3;
          }

          .culture-editor .ProseMirror h2 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            line-height: 1.4;
          }

          .culture-editor .ProseMirror h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            line-height: 1.4;
          }

          .culture-editor .ProseMirror ul,
          .culture-editor .ProseMirror ol {
            margin-top: 0.75rem;
            margin-bottom: 1.25rem;
            padding-left: 1.5rem;
          }

          .culture-editor .ProseMirror li {
            margin-bottom: 0.4rem;
          }

          .culture-editor .ProseMirror blockquote {
            margin: 1.5rem 0;
            padding-left: 1rem;
            border-left: 4px solid #d1d5db;
          }

          .culture-editor .ProseMirror img {
            display: block;
            max-width: 100%;
            height: auto;
            margin: 1.5rem auto;
            border-radius: 0.5rem;
          }

          .culture-editor .ProseMirror > *:first-child {
            margin-top: 0;
          }
        `}</style>

      </div>

    </div>
  );
}

