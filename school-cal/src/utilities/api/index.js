import axios from "axios"

export const client = axios.create({
  baseURL: "http://school-calendar-makata.herokuapp.com",
  header: {
    "Content-Type": "application/json",
  },
})

export const clientWithAuth = axios.create({
  baseURL: "http://school-calendar-makata.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
})
