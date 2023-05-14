import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTopic = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nim, setNim] = useState("");
  const [nohp, setNohp] = useState("");
  const [topic, setTopic] = useState("Reset Password");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/topics', {
        name,
        email,
        nim,
        nohp,
        topic
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email (@gmail.com)"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nim</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="Nim"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nomor HP</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nohp}
                onChange={(e) => setNohp(e.target.value)}
                placeholder="Nomor HP"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Topic</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  <option value="Reset Password">Reset Pasword</option>
                  <option value="Pembuatan Email">Pembuatan Email</option>
                </select>
              </div>
            </div>
          </div>

             <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTopic;