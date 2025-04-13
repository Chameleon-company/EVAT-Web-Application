import { ConfigData } from "../data/config";
config = ConfigData();
const BASE_URL = `${config.backend.ipAddress}:${config.backend.port}`;

/*
 * Utility function to make API requests
 * @param {string} endpoint - The API endpoint to call
 * @param {object} options - Options for the request (method, headers, body, user, token)
 * @returns {Promise<object>} - The response data as JSON
 */
const request = async (endpoint, options = {}) => {
    const { method = 'GET', headers = {}, body, user, token } = options;

    const details = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...headers,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, details);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Something went wrong');
        }

        return await response.json();
    } catch (error) {
        console.error('Request failed:', error);
        throw error;
    }
};

export default request;