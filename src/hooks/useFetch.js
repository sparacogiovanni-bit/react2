import {
    useState,
    useEffect,
} from "react";

export default function useFetch(
    url,
    ...dependencies
) {
    
    const [data, setData] =
    useState(null);
    
    const [loading, setLoading] =
    useState(true);
    
    async function getData() {
        
        setLoading(true);

        const response =
        await fetch(url);
        
        const json =
        await response.json();
        
        setData(json);
        
        setLoading(false);
    }
    
    useEffect(() => {
        
        if (url) {
            getData();
        }
        
    }, [url, ...dependencies]);
    
    return {
        data,
        loading,
    };
}