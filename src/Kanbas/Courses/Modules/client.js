import axios from "axios";
const COURSES_URL = "http://localhost:4000/api/courses";
const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/modules`;
// const MODULES_URL = "http://localhost:4000/api/modules";

export const updateModule = async (module) => {
    const response = await axios.put(`${MODULES_URL}/${module.id}`, module);
    return response.data;
};

export const deleteModule = async (moduleId) => {
    const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
};

export const createModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
};

export const findModulesForCourse = async (courseId) => {
    try {
        const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
        return response.data;
    } catch (error) {
        // Handle the error appropriately, e.g., log it or throw a custom error
        console.error('Error fetching modules for course:', error);
        throw error; // You may choose to rethrow the error or handle it differently
    }
};

