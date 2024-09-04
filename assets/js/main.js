

function updateProfileInfo(profileData) {
    
}
(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()