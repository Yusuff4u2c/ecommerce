import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState();

    const callUrl = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(url);
            setData(response.data);

            setError(false);
        } catch (error) {
            toast.error(error.message);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        callUrl();
      }, []);

  return {isLoading, error, data}
}

export default useFetch