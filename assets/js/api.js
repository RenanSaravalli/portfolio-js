async function fetchProfileData() {
    const url = 'https://github.com/RenanSaravalli/portfolio-js/blob/main/data/profile.json';
    const response = await fetch(url);
    const profileData = await response.json(); 
    return profileData;
}