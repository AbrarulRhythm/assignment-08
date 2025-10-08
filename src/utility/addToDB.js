const getStoredApp = () => {

    const storedAppSTR = localStorage.getItem('apps');

    if (storedAppSTR) {
        const storedAppsData = JSON.parse(storedAppSTR);
        return storedAppsData;
    }
    else {
        return [];
    }
}

const addToStoredApps = (id) => {

    const storedAppsData = getStoredApp();

    if (!storedAppsData.includes(id)) {
        storedAppsData.push(id);
        const data = JSON.stringify(storedAppsData);
        localStorage.setItem('apps', data);
    }
}

const removeStoredApps = (id) => {

    const storedApps = getStoredApp();
    const filterdStoredApps = storedApps.filter(appId => parseInt(appId) !== parseInt(id));
    const data = JSON.stringify(filterdStoredApps);
    localStorage.setItem('apps', data);
}

export { getStoredApp, addToStoredApps, removeStoredApps }