import {baseUrl} from '/src/scripts/variables.js'

async function getUserEvents(username){
    const response = await fetch(`${baseUrl}/${username}/events`);
    return await response.json()
    
}
export { getUserEvents }




