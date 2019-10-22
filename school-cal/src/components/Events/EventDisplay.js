import React, { useContext, useEffect, useState } from "react"
import { db } from "../../firebase"
import { AuthContext } from "../../contexts/auth/authState"
import { Card, CardActions, CardContent } from "@material-ui/core"

const EventList = () => {
  const { currentUser } = useContext(AuthContext)

  const [events, setEvents] = useState([])

  useEffect(() => {}, [])

  return <div>{events}</div>
}

export default EventList
