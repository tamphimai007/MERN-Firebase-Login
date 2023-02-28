// axios
import axios from 'axios'

export const createAndUpdateUser = async (authtoken) => {
  return axios.post(`${process.env.REACT_APP_API}/auth`, {}
    , {
      headers: {
        authtoken
      }
    })
}
export const currentUser = async (authtoken) => {
  return axios.post(`${process.env.REACT_APP_API}/current-user`, {}
    , {
      headers: {
        authtoken
      }
    })
}
