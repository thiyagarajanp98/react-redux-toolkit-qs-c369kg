import {
  fetchMainStart,
  fetchMainSuccess,
  fetchMainFailure,
  fetchModuleStart,
  fetchModuleSuccess,
  fetchModuleFailure
} from './store';

// Action to fetch and save the main data
export const fetchMainData = () => async (dispatch) => {
  dispatch(fetchMainStart());

  try {
    const response = await fetch('https://api.example.com/main'); // Replace with your main API
    const data = await response.json();
    dispatch(fetchMainSuccess(data)); // Save the fetched data in 'main'
  } catch (error) {
    dispatch(fetchMainFailure(error.message)); // Dispatch failure if there's an error
  }
};

// Action to fetch and save the module data
export const fetchModuleData = () => async (dispatch) => {
  dispatch(fetchModuleStart());

  try {
    const response = await fetch('https://api.example.com/module'); // Replace with your module API
    const data = await response.json();
    dispatch(fetchModuleSuccess(data)); // Save the fetched data in 'modules'
  } catch (error) {
    dispatch(fetchModuleFailure(error.message)); // Dispatch failure if there's an error
  }
};
