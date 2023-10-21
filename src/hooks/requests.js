import { API_URL } from '../constants'

async function httpGetPlanets() {
  try {
    const response = await fetch(`${API_URL}/planets`)
    return response.json()
  } catch (e) {
    console.error('Error getting planets!')
  }
}

async function httpGetLaunches() {
  try {
    const response = await fetch(`${API_URL}/launches?sortByFlightNumber=true`)
    return response.json()
  } catch (e) {
    console.error('Error getting launches!')
  }
}

async function httpSubmitLaunch(launch) {
  try {
    const response = await fetch(`${API_URL}/launches`, {
      method: 'POST',
      body: JSON.stringify(launch),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.json()
  } catch (error) {
    console.error('Error adding new launch!', error)
    return { error }
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};