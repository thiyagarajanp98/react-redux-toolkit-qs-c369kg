import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMainData, fetchModuleData } from '../redux/dataActions';

const MyComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  // Fetch main data when the component mounts
  useEffect(() => {
    dispatch(fetchMainData());
  }, [dispatch]);

  // Button click handler to fetch module data
  const handleFetchModule = () => {
    dispatch(fetchModuleData());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>API Data</h1>

      {/* Display Main Data */}
      <h2>Main Data</h2>
      {Object.keys(data.main).length > 0 ? (
        <pre>{JSON.stringify(data.main, null, 2)}</pre>
      ) : (
        <p>No main data available</p>
      )}

      {/* Button to Fetch Module Data */}
      <button onClick={handleFetchModule}>Fetch Module Data</button>

      {/* Display Module Data */}
      <h2>Module Data</h2>
      {Object.keys(data.modules).length > 0 ? (
        <pre>{JSON.stringify(data.modules, null, 2)}</pre>
      ) : (
        <p>No module data available</p>
      )}
    </div>
  );
};

export default MyComponent;
