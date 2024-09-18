import axios from "./api/axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const handleAxios = async () => {
    const res = await axios.get("/");
    setData(res.data);
  };

  return (
    <>
      <button onClick={handleAxios}>Test Axios</button>
      <p>{data && data}</p>
    </>
  );
}

export default App;
