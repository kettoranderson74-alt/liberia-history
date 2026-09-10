"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

type County = {
  id: string;
  name: string;
  slug: string;
  capital: string | null;
  region: string | null;
  description: string | null;
  history: string | null;
  geography: string | null;
  culture: string | null;
  population: string | null;
  languages: string | null;
  image_url: string | null;
  quick_facts: string | null;
  mining_economy: string | null;
  economy: string | null;
  people: string | null;
  natural_resources: string | null;
  education: string | null;
  important_places: string | null;
  civil_war_history: string | null;
  development: string | null;
  historical_importance: string | null;
  key_facts: string | null;
  published: boolean;
};

function createSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function CountyManager() {
  const [counties, setCounties] = useState<County[]>([]);

  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [region, setRegion] = useState("");
  const [description, setDescription] = useState("");
  const [history, setHistory] = useState("");
  const [geography, setGeography] = useState("");
  const [culture, setCulture] = useState("");
  const [population, setPopulation] = useState("");
  const [languages, setLanguages] = useState("");

  const [quickFacts, setQuickFacts] = useState("");
  const [miningEconomy, setMiningEconomy] = useState("");
  const [economy, setEconomy] = useState("");
  const [people, setPeople] = useState("");
  const [naturalResources, setNaturalResources] = useState("");
  const [education, setEducation] = useState("");
  const [importantPlaces, setImportantPlaces] = useState("");
  const [civilWarHistory, setCivilWarHistory] = useState("");
  const [development, setDevelopment] = useState("");
  const [historicalImportance, setHistoricalImportance] = useState("");
  const [keyFacts, setKeyFacts] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);

  const [published, setPublished] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const imageInputRef = useRef<HTMLInputElement>(null);

  async function loadCounties() {
    const { data, error } = await supabase
      .from("counties")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      setMessage("Error loading counties: " + error.message);
      return;
    }

    setCounties(data || []);
  }

  useEffect(() => {
    loadCounties();
  }, []);

  function resetForm() {
    setName("");
    setCapital("");
    setRegion("");
    setDescription("");
    setHistory("");
    setGeography("");
    setCulture("");
    setPopulation("");
    setLanguages("");

    setQuickFacts("");
    setMiningEconomy("");
    setEconomy("");
    setPeople("");
    setNaturalResources("");
    setEducation("");
    setImportantPlaces("");
    setCivilWarHistory("");
    setDevelopment("");
    setHistoricalImportance("");
    setKeyFacts("");

    setImageUrl("");
    setPublished(true);
    setEditingId(null);
    setMessage("");
  }

  function editCounty(county: County) {
    setEditingId(county.id);

    setName(county.name);
    setCapital(county.capital || "");
    setRegion(county.region || "");
    setDescription(county.description || "");
    setHistory(county.history || "");
    setGeography(county.geography || "");
    setCulture(county.culture || "");
    setPopulation(county.population || "");
    setLanguages(county.languages || "");

    setQuickFacts(county.quick_facts || "");
    setMiningEconomy(county.mining_economy || "");
    setEconomy(county.economy || "");
    setPeople(county.people || "");
    setNaturalResources(county.natural_resources || "");
    setEducation(county.education || "");
    setImportantPlaces(county.important_places || "");
    setCivilWarHistory(county.civil_war_history || "");
    setDevelopment(county.development || "");
    setHistoricalImportance(county.historical_importance || "");
    setKeyFacts(county.key_facts || "");

    setImageUrl(county.image_url || "");
    setPublished(county.published);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function uploadCountyImage(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploadingImage(true);
    setMessage("");

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

    setMessage("✅ County image uploaded successfully!");

    e.target.value = "";
  }

  async function saveCounty() {
    if (!name.trim()) {
      setMessage("County name is required.");
      return;
    }

    setLoading(true);
    setMessage("");

    const countyData = {
      name: name.trim(),
      slug: createSlug(name),
      capital: capital.trim() || null,
      region: region.trim() || null,
      description: description.trim() || null,
      history: history.trim() || null,
      geography: geography.trim() || null,
      culture: culture.trim() || null,
      population: population.trim() || null,
      languages: languages.trim() || null,

      quick_facts: quickFacts.trim() || null,
      mining_economy: miningEconomy.trim() || null,
      economy: economy.trim() || null,
      people: people.trim() || null,
      natural_resources: naturalResources.trim() || null,
      education: education.trim() || null,
      important_places: importantPlaces.trim() || null,
      civil_war_history: civilWarHistory.trim() || null,
      development: development.trim() || null,
      historical_importance: historicalImportance.trim() || null,
      key_facts: keyFacts.trim() || null,

      image_url: imageUrl.trim() || null,
      published,
    };

    if (editingId) {
      const { error } = await supabase
        .from("counties")
        .update(countyData)
        .eq("id", editingId);

      if (error) {
        setMessage("Error updating county: " + error.message);
        setLoading(false);
        return;
      }

      setMessage("✅ County updated successfully!");
    } else {
      const { error } = await supabase
        .from("counties")
        .insert(countyData);

      if (error) {
        setMessage("Error adding county: " + error.message);
        setLoading(false);
        return;
      }

      setMessage("✅ County added successfully!");
    }

    resetForm();
    await loadCounties();

    setLoading(false);
  }

  async function deleteCounty(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this county?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("counties")
      .delete()
      .eq("id", id);

    if (error) {
      setMessage("Error deleting county: " + error.message);
      return;
    }

    setMessage("✅ County deleted successfully!");

    await loadCounties();
  }

  async function togglePublished(
    id: string,
    currentStatus: boolean
  ) {
    const { error } = await supabase
      .from("counties")
      .update({
        published: !currentStatus,
      })
      .eq("id", id);

    if (error) {
      setMessage(
        "Error changing publish status: " + error.message
      );
      return;
    }

    setMessage(
      !currentStatus
        ? "✅ County published successfully!"
        : "✅ County unpublished successfully!"
    );

    await loadCounties();
  }

  function renderTextarea(
    label: string,
    value: string,
    setValue: (value: string) => void,
    placeholder: string
  ) {
    return (
      <div>
        <label className="block font-semibold mb-2">
          {label}
        </label>

        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          rows={5}
          className="border p-3 w-full rounded-lg"
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* FORM */}

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">
              {editingId ? "Edit County" : "Add County"}
            </h2>

            <p className="text-gray-500 mt-1">
              Manage detailed county information from Supabase.
            </p>
          </div>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
            >
              Cancel Edit
            </button>
          )}
        </div>

        {message && (
          <div className="mb-6 bg-gray-100 border rounded-lg p-4">
            {message}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block font-semibold mb-2">
              County Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Example: Bong County"
              className="border p-3 w-full rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Slug
            </label>

            <input
              type="text"
              value={createSlug(name)}
              readOnly
              className="border p-3 w-full rounded-lg bg-gray-100 text-gray-600"
            />

            <p className="text-xs text-gray-500 mt-1">
              Automatically generated from the county name.
            </p>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Capital
            </label>

            <input
              type="text"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              placeholder="Example: Gbarnga"
              className="border p-3 w-full rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Region
            </label>

            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="Example: Central Liberia"
              className="border p-3 w-full rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Population
            </label>

            <input
              type="text"
              value={population}
              onChange={(e) => setPopulation(e.target.value)}
              placeholder="Example: 467,561 (2022 Census)"
              className="border p-3 w-full rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Languages
            </label>

            <input
              type="text"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              placeholder="Example: English, Kpelle"
              className="border p-3 w-full rounded-lg"
            />
          </div>
        </div>

        <div className="mt-6 space-y-5">
          {renderTextarea(
            "Description",
            description,
            setDescription,
            "Short introduction to the county..."
          )}

          {renderTextarea(
            "Quick Facts",
            quickFacts,
            setQuickFacts,
            "Put each fact on a separate line."
          )}

          {renderTextarea(
            "Geography and Location",
            geography,
            setGeography,
            "Describe the county's location, landscape, towns, rivers, etc."
          )}

          {renderTextarea(
            "History",
            history,
            setHistory,
            "Detailed historical background..."
          )}

          {renderTextarea(
            "Mining and Mineral Economy",
            miningEconomy,
            setMiningEconomy,
            "Mining history and mineral-related economic activity..."
          )}

          {renderTextarea(
            "Agriculture and Economy",
            economy,
            setEconomy,
            "Agriculture, commerce, transportation, businesses and other economic activities..."
          )}

          {renderTextarea(
            "People, Ethnic Groups and Languages",
            people,
            setPeople,
            "People, ethnic communities and languages..."
          )}

          {renderTextarea(
            "Natural Resources",
            naturalResources,
            setNaturalResources,
            "Natural resources found in the county..."
          )}

          {renderTextarea(
            "Education",
            education,
            setEducation,
            "Schools, universities and educational history..."
          )}

          {renderTextarea(
            "Culture and Traditions",
            culture,
            setCulture,
            "Culture, traditions, music, food, clothing, ceremonies, etc."
          )}

          {renderTextarea(
            "Important Places",
            importantPlaces,
            setImportantPlaces,
            "Put each important place on a separate line."
          )}

          {renderTextarea(
            "Civil War History",
            civilWarHistory,
            setCivilWarHistory,
            "How Liberia's civil wars affected the county..."
          )}

          {renderTextarea(
            "Development and Present-Day Importance",
            development,
            setDevelopment,
            "Development, infrastructure and present-day importance..."
          )}

          {renderTextarea(
            "Historical Importance",
            historicalImportance,
            setHistoricalImportance,
            "Why this county is historically important..."
          )}

          {renderTextarea(
            "Key Facts",
            keyFacts,
            setKeyFacts,
            "Put each key fact on a separate line."
          )}
        </div>

        {/* IMAGE */}

        <div className="mt-6">
          <label className="block font-semibold mb-2">
            County Image
          </label>

          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            onChange={uploadCountyImage}
            hidden
          />

          <button
            type="button"
            onClick={() => imageInputRef.current?.click()}
            disabled={uploadingImage}
            className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800 disabled:opacity-50"
          >
            {uploadingImage
              ? "Uploading..."
              : "📷 Add County Image"}
          </button>

          {imageUrl && (
            <div className="mt-4">
              <img
                src={imageUrl}
                alt="County preview"
                className="w-full max-w-md h-56 object-cover rounded-lg border"
              />
            </div>
          )}
        </div>

        {/* PUBLISH */}

        <div className="mt-6 flex items-center gap-3">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-5 h-5"
          />

          <label className="font-semibold">
            Publish this county
          </label>
        </div>

        {/* SAVE */}

        <button
          type="button"
          onClick={saveCounty}
          disabled={loading || uploadingImage}
          className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : editingId
            ? "💾 Update County"
            : "➕ Add County"}
        </button>
      </div>

      {/* COUNTY LIST */}

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold mb-6">
          Counties
        </h2>

        {counties.length === 0 ? (
          <p className="text-gray-500">
            No counties have been added yet.
          </p>
        ) : (
          <div className="space-y-4">
            {counties.map((county) => (
              <div
                key={county.id}
                className="border rounded-xl p-5"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {county.image_url && (
                      <img
                        src={county.image_url}
                        alt={county.name}
                        className="w-24 h-20 object-cover rounded-lg"
                      />
                    )}

                    <div>
                      <h3 className="text-xl font-bold">
                        {county.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {county.capital || "No capital set"}
                      </p>

                      <p className="text-sm mt-1">
                        {county.published ? (
                          <span className="text-green-700 font-semibold">
                            🟢 Published
                          </span>
                        ) : (
                          <span className="text-gray-500 font-semibold">
                            ⚪ Unpublished
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => editCounty(county)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        togglePublished(
                          county.id,
                          county.published
                        )
                      }
                      className="bg-yellow-500 text-black px-4 py-2 rounded-lg"
                    >
                      {county.published
                        ? "Unpublish"
                        : "Publish"}
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteCounty(county.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      🗑️ Delete
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