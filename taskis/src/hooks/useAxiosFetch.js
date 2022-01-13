import { useEffect, useState } from "react";
import axios from "axios";

function useAxiosFetch(dataUrl) {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
        // For testing purposes
        // isMounted && setTimeout(() => setIsLoading(false), 2000);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      console.log("CleanUp function");
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
}

export default useAxiosFetch;

// IN DATACONTEXT
// const { data, fetchError, isLoading } = useAxiosFetch(
//   "http://localhost:3010/tasks"
// );

// useEffect(() => {
//   setTasks(data);
// }, [data]);
