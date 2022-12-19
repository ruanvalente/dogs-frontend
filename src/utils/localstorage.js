export function retrieveStorage(key) {
  const hasStorageKey = window.localStorage.getItem(key)

  if (hasStorageKey) {
    return JSON.parse(hasStorageKey)
  }
}

export function saveStorageData(key, data) {
  const storage = JSON.stringify(data)
  window.localStorage.setItem(key, storage)
}

export function cleanStorageData(key) {
  window.localStorage.removeItem(key)
}
