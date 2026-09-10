"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

type Person = {
  id: string;
  name: string;
  slug: string;
    leadership_years: string | null;
  profile_url: string | null;
  short_bio: string | null;
  biography: string | null;
  birth_date: string | null;
  death_date: string | null;
  birthplace: string | null;
  county: string | null;
  role: string | null;
  era: string | null;
  image_url: string | null;
  published: boolean;
};

export default function PeopleManager() {
  const [people, setPeople] = useState<Person[]>([]);

  const [name, setName] = useState("");
const [leadershipYears, setLeadershipYears] = useState("");
const [profileUrl, setProfileUrl] = useState("");
const [shortBio, setShortBio] = useState("");
  const [biography, setBiography] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [deathDate, setDeathDate] = useState("");
  const [birthplace, setBirthplace] = useState("");
  const [county, setCounty] = useState("");
  const [role, setRole] = useState("");
  const [era, setEra] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [published, setPublished] = useState(true);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
const imageInputRef = useRef<HTMLInputElement>(null);
  async function loadPeople() {
    const { data, error } = await supabase
      .from("people")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      setMessage("Error loading people: " + error.message);
      return;
    }

    setPeople(data || []);
  }

  useEffect(() => {
    loadPeople();
  }, []);

  function createSlug(text: string) {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  }

  function resetForm() {
  setEditingId(null);
  setName("");
  setLeadershipYears("");
  setProfileUrl("");
  setShortBio("");
    setBirthDate("");
    setDeathDate("");
    setBirthplace("");
    setCounty("");
    setRole("");
    setEra("");
    setImageUrl("");
    setPublished(true);
    setEditingId(null);
    setMessage("");
  }

 function editPerson(person: Person) {
  setEditingId(person.id);
  setName(person.name);
  setLeadershipYears(person.leadership_years || "");
  setProfileUrl(person.profile_url || "");
  setShortBio(person.short_bio || "");
    setShortBio(person.short_bio || "");
    setBiography(person.biography || "");
    setBirthDate(person.birth_date || "");
    setDeathDate(person.death_date || "");
    setBirthplace(person.birthplace || "");
    setCounty(person.county || "");
    setRole(person.role || "");
    setEra(person.era || "");
    setImageUrl(person.image_url || "");
    setPublished(person.published);

    setMessage("Editing person...");
  }
async function uploadProfileImage(
  e: React.ChangeEvent<HTMLInputElement>
) {
  const file = e.target.files?.[0];

  if (!file) return;

  setUploadingImage(true);

  const fileName = `${crypto.randomUUID()}-${file.name}`;

  const { error } = await supabase.storage
    .from("article-images")
    .upload(fileName, file);

  if (error) {
    setMessage("Image upload error: " + error.message);
    setUploadingImage(false);
    return;
  }

  const { data } = supabase.storage
    .from("article-images")
    .getPublicUrl(fileName);

  setImageUrl(data.publicUrl);
  setUploadingImage(false);

  setMessage("✅ Profile image uploaded successfully!");

  e.target.value = "";
}
  async function savePerson() {
    if (!name.trim()) {
      setMessage("Please enter a person's name.");
      return;
    }

    setLoading(true);

    setMessage(
      editingId ? "Updating person..." : "Adding person..."
    );

    const personData = {
      name: name.trim(),
      leadership_years: leadershipYears,
profile_url: `/leaders/${createSlug(name)}`,
      slug: createSlug(name),
      short_bio: shortBio.trim() || null,
      biography: biography.trim() || null,
      birth_date: birthDate || null,
      death_date: deathDate || null,
      birthplace: birthplace.trim() || null,
      county: county.trim() || null,
      role: role.trim() || null,
      era: era.trim() || null,
      image_url: imageUrl.trim() || null,
      published,
    };

    let error;

    if (editingId) {
      const result = await supabase
        .from("people")
        .update(personData)
        .eq("id", editingId);

      error = result.error;
    } else {
      const result = await supabase
        .from("people")
        .insert([personData]);

      error = result.error;
    }

    if (error) {
      setMessage("Database error: " + error.message);
      setLoading(false);
      return;
    }

    setMessage(
      editingId
        ? "✅ Person updated successfully!"
        : "✅ Person added successfully!"
    );

    resetForm();
    await loadPeople();

    setLoading(false);
  }

  async function deletePerson(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this person?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("people")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage("Delete error: " + error.message);
      return;
    }

    setMessage("✅ Person deleted successfully!");

    await loadPeople();
  }

  async function togglePublished(person: Person) {
    const { error } = await supabase
      .from("people")
      .update({
        published: !person.published,
      })
      .eq("id", person.id);

    if (error) {
      setMessage("Update error: " + error.message);
      return;
    }

    setMessage(
      person.published
        ? "Person unpublished."
        : "Person published."
    );

    await loadPeople();
  }

  return (
    <div className="space-y-8">

      {/* Form */}
      <div className="bg-white rounded-xl shadow-sm border p-6">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-green-800">
              {editingId ? "Edit Person" : "Add Person"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Create and manage important people in Liberian history.
            </p>
          </div>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel Edit
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Name */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Example: Joseph Jenkins Roberts"
              className="w-full border rounded-lg p-3"
            />
          </div>
<div>
  <label className="block font-semibold mb-1">
    Leadership Years
  </label>
  <input
    type="text"
    value={leadershipYears}
    onChange={(e) => setLeadershipYears(e.target.value)}
    placeholder="Example: 2006–2018"
    className="border p-3 w-full rounded"
  />
</div>

<div>
  <label className="block font-semibold mb-1">
    Profile URL
  </label>

  <input
    type="text"
    value={profileUrl || `/leaders/${createSlug(name)}`}
    readOnly
    className="border p-3 w-full rounded bg-gray-100 text-gray-600"
  />

  <p className="text-xs text-gray-500 mt-1">
    Automatically generated from the person's name.
  </p>
</div>
          {/* Short Bio */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Short Bio
            </label>

            <textarea
              value={shortBio}
              onChange={(e) => setShortBio(e.target.value)}
              placeholder="Write a short introduction..."
              rows={3}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Biography */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Full Biography
            </label>

            <textarea
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
              placeholder="Write the person's full biography..."
              rows={8}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Birth Date */}
          <div>
            <label className="block font-semibold mb-2">
              Birth Date
            </label>

            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Death Date */}
          <div>
            <label className="block font-semibold mb-2">
              Death Date
            </label>

            <input
              type="date"
              value={deathDate}
              onChange={(e) => setDeathDate(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Birthplace */}
          <div>
            <label className="block font-semibold mb-2">
              Birthplace
            </label>

            <input
              type="text"
              value={birthplace}
              onChange={(e) => setBirthplace(e.target.value)}
              placeholder="Example: Monrovia, Liberia"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* County */}
          <div>
            <label className="block font-semibold mb-2">
              County
            </label>

            <input
              type="text"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              placeholder="Example: Montserrado"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block font-semibold mb-2">
              Role
            </label>

            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Example: President of Liberia"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Era */}
          <div>
            <label className="block font-semibold mb-2">
              Era
            </label>

            <input
              type="text"
              value={era}
              onChange={(e) => setEra(e.target.value)}
              placeholder="Example: 19th Century"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Image */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
  Profile Image
</label>

<input
  ref={imageInputRef}
  type="file"
  accept="image/*"
  onChange={uploadProfileImage}
  hidden
/>

<button
  type="button"
  onClick={() => imageInputRef.current?.click()}
  disabled={uploadingImage}
  className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800 disabled:opacity-50"
>
  {uploadingImage ? "Uploading..." : "📷 Add Image"}
</button>

{imageUrl && (
  <div className="mt-3">
    <img
      src={imageUrl}
      alt="Profile preview"
      className="w-32 h-32 object-cover rounded-lg border"
    />
  </div>
)}
          </div>

          {/* Publish */}
          <div className="md:col-span-2 flex items-center gap-3">
            <input
              id="person-published"
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-5 h-5"
            />

            <label
              htmlFor="person-published"
              className="font-semibold"
            >
              Publish this person on the website
            </label>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

          <button
            type="button"
            onClick={savePerson}
            disabled={loading}
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : editingId
              ? "Update Person"
              : "Add Person"}
          </button>

          {!editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
            >
              Clear
            </button>
          )}

        </div>

        {message && (
          <p className="mt-5 font-semibold">
            {message}
          </p>
        )}

      </div>

      {/* People List */}
      <div className="bg-white rounded-xl shadow-sm border p-6">

        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              People
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {people.length}{" "}
              {people.length === 1 ? "person" : "people"} in the database
            </p>
          </div>

        </div>

        {people.length === 0 ? (
          <div className="border border-dashed rounded-xl p-10 text-center">
            <p className="text-gray-500">
              No people have been added yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {people.map((person) => (
              <div
                key={person.id}
                className="border rounded-xl p-5"
              >

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                  <div className="min-w-0">

                    <h3 className="text-xl font-bold text-green-800">
                      {person.name}
                    </h3>

                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-2">

                      {person.role && (
                        <span>👑 {person.role}</span>
                      )}

                      {person.era && (
                        <span>🕰️ {person.era}</span>
                      )}

                      <span>
                        {person.published
                          ? "🟢 Published"
                          : "⚪ Draft"}
                      </span>

                    </div>

                    {person.short_bio && (
                      <p className="text-gray-600 mt-3">
                        {person.short_bio}
                      </p>
                    )}

                  </div>

                  <div className="flex flex-wrap gap-2">

                    <button
                      type="button"
                      onClick={() => editPerson(person)}
                      className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => togglePublished(person)}
                      className="bg-yellow-500 text-black px-3 py-2 rounded-lg hover:bg-yellow-600"
                    >
                      {person.published
                        ? "Unpublish"
                        : "Publish"}
                    </button>

                    <button
                      type="button"
                      onClick={() => deletePerson(person.id)}
                      className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}