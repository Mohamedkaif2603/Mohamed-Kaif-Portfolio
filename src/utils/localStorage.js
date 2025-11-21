// LocalStorage utility functions for CRUD operations

export const saveToLocalStorage = (key, data) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
    return true;
  } catch (error) {
    console.error(`Error saving to localStorage (${key}):`, error);
    return false;
  }
};

export const getFromLocalStorage = (key, defaultValue = []) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error getting from localStorage (${key}):`, error);
    return defaultValue;
  }
};

export const deleteFromLocalStorage = (key, id) => {
  try {
    const items = getFromLocalStorage(key, []);
    const filteredItems = items.filter(item => item.id !== id);
    saveToLocalStorage(key, filteredItems);
    return true;
  } catch (error) {
    console.error(`Error deleting from localStorage (${key}):`, error);
    return false;
  }
};

export const updateInLocalStorage = (key, id, updatedItem) => {
  try {
    const items = getFromLocalStorage(key, []);
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...updatedItem };
      saveToLocalStorage(key, items);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error updating in localStorage (${key}):`, error);
    return false;
  }
};

// Storage keys
export const STORAGE_KEYS = {
  PROJECTS: 'portfolio_projects',
  BLOG_POSTS: 'portfolio_blog_posts'
};
