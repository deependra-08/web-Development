import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async (pageNumber) => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=35`
    );
    setUserData(response.data);
    setPage(pageNumber);
    console.log(response.data);
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const response = await axios.get(
        "https://picsum.photos/v2/list?page=1&limit=35"
      );
      setUserData(response.data);
      setPage(1);
    };

    loadInitialData();
  }, []);

  let printUserData = "No User Available";

  if (userData.length > 0) {
    printUserData = userData.map((elem) => (
      <div key={elem.id} className="w-44 rounded bg-white overflow-hidden">
        <img
          className="h-40 w-full object-cover"
          src={elem.download_url}
          alt={elem.author}
        />

        <h2 className="text-black text-center text-lg font-semibold p-2">
          {elem.author}
        </h2>
      </div>
    ));
  }

  return (
    <div className="bg-gray-500 overflow-auto text-white text-3xl rounded p-10 gap-5 m-10">
      <button
        className="bg-green-400 px-5 py-2 rounded text-white m-2 active:bg-gray-200 active:scale-95"
        onClick={() => fetchData(1)}
      >
        Reload Page 1
      </button>

      <p className="text-lg mt-4">
        {userData.length > 0
          ? `Loaded ${userData.length} posts`
          : "No posts loaded yet"}
      </p>

      <div className="mt-4 flex flex-wrap gap-3">{printUserData}</div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          className="bg-gray-700 px-4 py-2 rounded text-white disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => fetchData(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <p className="text-lg">Page {page}</p>

        <button
          className="bg-blue-500 px-4 py-2 rounded text-white"
          onClick={() => fetchData(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;