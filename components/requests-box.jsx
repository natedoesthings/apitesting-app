'use client'

import { useState, useEffect } from "react"

const RequestsBox = () => {
  const [recentRequests, setRecentRequests] = useState([])
  const [loading, setLoading] = useState(true) // Add loading state

  useEffect(() => {
    const getRecentRequests = async () => {
      setLoading(true) // Set loading to true before fetching data
      const response = await fetch("/api/requests")
      const data = await response.json()
      setRecentRequests(data)
      setLoading(false) // Set loading to false after data is fetched
    }

    getRecentRequests()
  }, [])

  return (
    <div className="recent-group" style={{ overflowY: "scroll" }}>
      <div className="recent-header" >Recent Requests:
      {loading ? (
        <div className="loading-screen">...</div> // Render loading screen
      ) : (
        <div className="py-6">
          <div className="text-sm" style={{ maxHeight: "450px" }}>
            <ul>
              {recentRequests.map((request, index) => (
                <li key={index} className="py-1">
                  <button className="request-button hover:bg-gray-300">
                    {request.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default RequestsBox