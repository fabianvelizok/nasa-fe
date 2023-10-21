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
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
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