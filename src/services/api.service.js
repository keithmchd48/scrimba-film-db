export {
    apiCall
}

const apiCall = async (APIUrl) => {
    const resp = await fetch(APIUrl)
    return  await resp.json()
}
