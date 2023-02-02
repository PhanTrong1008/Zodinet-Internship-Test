import { useEffect, useState } from "react";
import CreateModal from "./components/CreateModal";

const URL = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [posts, setPosts] = useState([]);
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

      setPosts(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addData = (post) => {
    console.log('Add Post');

    let newPost = {
      userId: post.userId,
      title: post.title,
      body: post.body,
    };

    setPosts([...posts, newPost]);

    console.log(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="buttons mt-3" style={{ textAlign: "center" }}>
        <button onClick={fetchData} className="btn btn-success me-3">
          Fetch
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#createModal"
        >
          Create
        </button>

        <CreateModal url={URL} addData={addData}/>
      </div>

      {err &&
        <h2>
          {err}
        </h2>}

      {isLoading
        ? <h2>Loading...</h2>
        : <div className="row mb-5">
              {posts.map(post => {
                return (
                  <div className="col-lg-3 col-md-2">
                    <div
                      className="card mt-3"
                      style={{ width: "18rem" }}
                      key={post.id}
                    >
                      <div className="card-body">
                        <h5 className="card-title">
                          {post.title}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted pt-1">
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
            </div>}
    </div>
  );
};

export default App;
