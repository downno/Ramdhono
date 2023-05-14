import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const TopicList = () => {
  const [topics, setTopic] = useState([]);

  useEffect(() => {
    getTopics();
  }, []);

  const getTopics = async () => {
    const response = await axios.get("http://localhost:5000/topics");
    setTopic(response.data);
  };

  // const deleteTopic = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/topics/${id}`);
  //     getTopics();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
          <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Nim</th>
              <th>Nomor HP</th>
              <th>Topic</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((topic, index) => (
              <tr key={topic.id}>
                <td>{index + 1}</td>
                <td>{topic.name}</td>
                <td>{topic.email}</td>
                <td>{topic.nim}</td>
                <td>{topic.nohp}</td>
                <td>{topic.topic}</td>
               <td>
             <button>Proses</button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopicList;
