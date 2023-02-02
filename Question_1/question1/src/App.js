import { useEffect, useState } from "react";
import CreateModal from "./components/CreateModal";

const URL = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="container">
      {err &&
        <h2>
          {err}
        </h2>}

      <div className="buttons mt-3" style={{ textAlign: "center" }}>
        <button onClick={fetchData} className="btn btn-success me-3">
          Fetch
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Create
        </button>

        <CreateModal url={URL}/>
      </div>

      {isLoading && <h2>Loading...</h2>}

      <div className="row">
        {data.map(post => {
          return (
            <div className="col-3">
              <div
                className="card mt-3"
                style={{ width: "18rem" }}
                key={post.id}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    {post.title}
                  </h5>
                  <h6 class="card-subtitle mb-2 text-muted pt-1">
                    User ID: {post.userId}
                  </h6>
                  <p className="card-text">
                    {post.body}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
