const API_BASE_URL = 'http://127.0.0.1:5555'; // Replace with your actual backend URL

//export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:5555';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

// Function to retrieve the authentication token from cookies
export const getAuthToken = () => {
  const cookies = document.cookie.split(';');
  const authTokenCookie = cookies.find(cookie => cookie.trim().startsWith('authToken='));
  return authTokenCookie ? authTokenCookie.split('=')[1] : null;
};

// Function to include the token in the request headers
const getRequestHeaders = () => {
  const authToken = getAuthToken();
  return {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
};

// Storing the token as an HttpOnly cookie
export const storeToken = (token) => {
  try {
    document.cookie = `authToken=${token}; path=/; HttpOnly; Secure`;
  } catch (error) {
    console.error('Token storage error:', error);
    throw new Error('Failed to store authentication token');
  }
};

// Function to check if the user is logged in
export const isLoggedIn = () => {
  return getAuthToken() !== null;
};

// Function to clear the authentication token (logout)
export const logout = () => {
  document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure';
};

// Login function
export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/login`, {
      method: 'POST',
      headers: getRequestHeaders(),
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during login request:', error);
    throw error;
  }
};

// Other API functions with token inclusion in headers

export const getDoctors = async () => {
  const response = await fetch(`${API_BASE_URL}/doctors`, {
    headers: getRequestHeaders(),
  });
  console.log(response)
  return handleResponse(response);
};

// Search doctors
export const searchDoctors = async (searchTerm) => {
  const response = await fetch(`${API_BASE_URL}/doctors?search=${searchTerm}`, {
    headers: getRequestHeaders(),
  });
  return handleResponse(response);
};

// Get all patients
export const getPatients = async () => {
  const response = await fetch(`${API_BASE_URL}/patients`, {
    headers: getRequestHeaders(),
  });
  return handleResponse(response);
};

// Change searchAppointments to getSearchAppointments
export const searchAppointments = async (searchTerm) => {
  const response = await fetch(`${API_BASE_URL}/appointments?search=${searchTerm}`, {
    headers: getRequestHeaders(),
  });
  return handleResponse(response);
};

// Get all diseases
export const getDiseases = async () => {
  const response = await fetch(`${API_BASE_URL}/diseases`, {
    headers: getRequestHeaders(),
  });
  return handleResponse(response);
};

// Search diseases
export const searchDiseases = async (searchTerm) => {
  const response = await fetch(`${API_BASE_URL}/diseases?search=${searchTerm}`, {
    headers: getRequestHeaders(),
  });
  return handleResponse(response);
};

// Get all appointments
export const getAppointments = async () => {
  const response = await fetch(`${API_BASE_URL}/appointments`, {
    headers: getRequestHeaders(),
  });
  return handleResponse(response);
};

// Add a doctor
export const addDoctor = async (doctorData) => {
  const response = await fetch(`${API_BASE_URL}/doctors`, {
    method: 'POST',
    headers: getRequestHeaders(),
    body: JSON.stringify(doctorData),
  });
  return handleResponse(response);
};

// Add a patient
export const addPatient = async (patientData) => {
  const response = await fetch(`${API_BASE_URL}/patients`, {
    method: 'POST',
    headers: getRequestHeaders(),
    body: JSON.stringify(patientData),
  });
  return handleResponse(response);
};

// Add a disease
export const addDisease = async (diseaseData) => {
  const response = await fetch(`${API_BASE_URL}/diseases`, {
    method: 'POST',
    headers: getRequestHeaders(),
    body: JSON.stringify(diseaseData),
  });
  return handleResponse(response);
};

// Update a doctor
export const updateDoctor = async (doctorId, updatedData) => {
  const response = await fetch(`${API_BASE_URL}/doctors/${doctorId}`, {
    method: 'PUT',
    headers: getRequestHeaders(),
    body: JSON.stringify(updatedData),
  });
  return handleResponse(response);
};

// Update a patient
export const updatePatient = async (patientId, updatedData) => {
  const response = await fetch(`${API_BASE_URL}/patients/${patientId}`, {
    method: 'PUT',
    headers: getRequestHeaders(),
    body: JSON.stringify(updatedData),
  });
  return handleResponse(response);
};

// Update a disease
export const updateDisease = async (diseaseId, updatedData) => {
  const response = await fetch(`${API_BASE_URL}/diseases/${diseaseId}`, {
    method: 'PUT',
    headers: getRequestHeaders(),
    body: JSON.stringify(updatedData),
  });
  return handleResponse(response);
};

// Delete a doctor
export const deleteDoctor = async (doctorId) => {
  const response = await fetch(`${API_BASE_URL}/doctors/${doctorId}`, {
    method: 'DELETE',
    headers: getRequestHeaders(),
  });
  return handleResponse(response);
};

// User registration
export const register = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: getRequestHeaders(),
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
};

// Delete an appointment
export const deleteAppointment = async (appointmentId) => {
  const response = await fetch(`${API_BASE_URL}/appointments/${appointmentId}`, {
    method: 'DELETE',
    headers: getRequestHeaders(),
  });
  return handleResponse(response);
};

// Add a function to submit appointments in api.jsx
export const submitAppointment = async (appointmentData) => {
  const response = await fetch(`${API_BASE_URL}/appointments`, {
    method: 'POST',
    headers: getRequestHeaders(),
    body: JSON.stringify(appointmentData),
  });
  return handleResponse(response);
};

// api.jsx
export const searchPatients = async (searchTerm) => {
  const response = await fetch(`${API_BASE_URL}/patients?search=${searchTerm}`, {
    headers: getRequestHeaders(),
  });
  return handleResponse(response);
};

// ... (other functions)

