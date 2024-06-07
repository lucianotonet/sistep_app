// Armazenar dados no localStorage
export function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Recuperar dados do localStorage
export function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

export function removeFromLocalStorage(keys) {
    for (const key of keys) {
        localStorage.removeItem(key);
    }
}