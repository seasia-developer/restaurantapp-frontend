'use client'
export function saveDataToLocalStorage(key: any, data: any) {
  try {
    const serializedData = JSON.stringify(data);``
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error(`Error saving data to local storage (${key}):`, error);
  }
}

export function getDataFromLocalStorage(key: any) {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : null;
  } catch (error) {
    console.error(`Error getting data from local storage (${key}):`, error);
    return null;
  }
}
