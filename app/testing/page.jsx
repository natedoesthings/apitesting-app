'use client'

import { set } from "mongoose";
import "./style.css";
import TestJson from "./testjson";
import { useState, useEffect } from "react"

export const Testing = () => {

  const [recentRequests, setRecentRequests] = useState([])
  const [statusCode, setStatusCode] = useState("")
  const [loading, setLoading] = useState(false) // Add loading state
  const [url, setUrl] = useState("")

  useEffect(() => {
    const getRecentRequests = async () => {
      setLoading(true) // Set loading to true before fetching data
      const response = await fetch("/api/requests")
      const data = await response.json()
      setRecentRequests(data)
      setLoading(false) // Set loading to false after data is fetched
    }

    setUrl(document.getElementById("url").value)

    // getRecentRequests()
  }, [])

  const validURL = (str) => {
    try {
      new URL(str);
      return true;
    } catch (error) {
      return false;
    }
  }

  // const updateRecentRequests = () => {


  //   console.log({
  //     name: url,
  //     url: url,
  //     status: statusCode,
  //     id: recentRequests.length + 1,
  //     json: document.getElementById("jsonbody").innerHTML
  //   })

    

  // }

  const mainAPIRequest = async (url) => {
    if (url === "" || !validURL(url)) {
      alert("Please enter a valid URL")
      return
    }

    try {
      const response = await fetch(url)
      const data = await response.json()
      document.getElementById("jsonbody").innerHTML = JSON.stringify(data)
      setStatusCode(response.status)
      if (!recentRequests.some(request => request.url === url)) {
        setRecentRequests([...recentRequests, {
          name: "",
          url: url,
          status: response.status,
          id: recentRequests.length + 1,
          json: JSON.stringify(data)
        }])
      }
    } catch (error) {
      alert("An error occurred while fetching data")
    }

  

    // document.getElementById("jsonbody").innerHTML = JSON.stringify(data)
    // setStatusCode(response.status)


    // setRecentRequests([...recentRequests, {
    //   name: url,
    //   url: url,
    //   status: response.status,
    //   id: recentRequests.length + 1,
    //   json: JSON.stringify(data)
    // }])

  }

  const changeScreen = (request) => {
    document.getElementById("url").value = request.url
    document.getElementById("jsonbody").innerHTML = request.json
    setStatusCode(request.status)
  }

  const resetScreen = () => { 
    document.getElementById("url").value = ""
    document.getElementById("jsonbody").innerHTML = ""
    setStatusCode("")
  }

  const statusColor = (statusCode) => {
    if (statusCode === "") {
      return "black"
    }

    if (statusCode === 200) {
      return "lawngreen"
    } else {
      return "red"
    }
  }

  // const printUrl = () => {
  //   const url = document.getElementById("url").value
  //   console.log(url)
  // }

  return (
    <div className="testing">
      <div className="overlap-group">

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
                        <button className="request-button hover:bg-gray-100" onClick={() => changeScreen(request)}>
                          <input type="text" className="rounded-sm" style={{width: '238px'}} placeholder={request.url} value={request.name} onChange={(e) => {
                            const updatedRequests = [...recentRequests];
                            updatedRequests[index].name = e.target.value;
                            setRecentRequests(updatedRequests);
                          }}></input>
                        </button>
                      </li>
                    ))}
                    <li className="py-1">
                      <button className="request-button hover:bg-gray-300" onClick={resetScreen}>
                        <p className="text-center">+</p>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="url-placement">
          <div className="url-form flex">
            <div className="rectangle" />
            <input
              type="text"
              id="url"
              className="url-input flex"
              placeholder="Enter API Endpoint:"
            />
            <button onClick={() => mainAPIRequest(document.getElementById('url').value)} className="send-button" >
              <p className="font-inter font-bold text-xl">GET</p>
            </button>
            <button className="drop-down" >
              <p className="font-inter font-bold text-xl">↓</p>
            </button>
          </div>
        </div>

        <div className="body-group">
          <div div className="inside-body" style={{ overflowY: "scroll" }}>
            <p id="jsonbody" className="px-3 py-4" style={{ maxHeight: "420px" }}> </p>
          </div>
        </div>
        <div className="text-wrapper-4" style={{color: `${statusColor(statusCode)}`}}>STATUS CODE: {statusCode}</div>
      </div>
    </div>
  );
};

export default Testing;