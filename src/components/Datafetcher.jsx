// components/DataFetcher.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchModuleData } from '../features/apiSlice';

const DataFetcher = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.api);

    const handleFetchData = () => {
        const apiUrl = 'https://api.example.com/data'; // Replace with your first API endpoint
        dispatch(fetchData(apiUrl));
    };

    const handleFetchModuleData = () => {
        const apiUrl = 'https://api.example.com/module'; // Replace with your second API endpoint
        dispatch(fetchModuleData(apiUrl));
    };

    return (
        <div>
            <button onClick={handleFetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Main Data'}
            </button>
            <button onClick={handleFetchModuleData} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Module Data'}
            </button>
            {error && <p>Error: {error}</p>}
            <h2>Main Data:</h2>
            <pre>{JSON.stringify(data.main, null, 2)}</pre>
            <h2>Module Data:</h2>
            <pre>{JSON.stringify(data.module, null, 2)}</pre>
        </div>
    );
};

export default DataFetcher;
