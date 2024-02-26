import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [logg, setlogg] = useState("");
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [city, setcity] = useState("");
  const [parentClient, setparentClient] = useState("");
  const [status, setstatus] = useState("");
  const [remarts, setremarks] = useState("");
  const [compdes, setcompdes] = useState("");
  const [group, setgroup] = useState("");
  const [Cloesd, setCloesd] = useState("");
  const [wrantty, setwrantty] = useState("");
  const [acknowledge, setacknowledge] = useState("");
  const [date_for_serach, setdate_for_serach] = useState("");
  const [work_done, setwork_done] = useState("");

  const nav = useNavigate();

  const add = () => {
    const id = Math.round(Math.random() * 100);
    axios
      .post("http://localhost:8080/create", {
        id: id,
        Ticket_No: "CMP/021/23-24",
        customer_name: name,
        complanier_address: "2/3-karachi",
        complanit_description: compdes,
        complain_date: date_for_serach,
        status: status,
        wrantty_status: wrantty,
        group: group,
        closed_by: Cloesd,
        closing_date: date_for_serach,
        remarks: remarts,
        logg: logg,
        mobile: mobile,
        city: city,
        parentclient: parentClient,
        acknow: acknowledge,
        dataforsearch: date_for_serach,
        workdone: work_done,
      })
      .then(() => {
        console.log("success");
        nav("/complaint");
      });
  };

  return (
    <div className="for">
      <div className="ben">
        <h4> COMPLANIT FORM</h4>
      </div>
      <div
        className="container table-responsive"
        style={{
          boxShadow:
            "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
          paddingTop: "3%",
          paddingBottom: "3%",
        }}
      >
        <div className="row ">
          <div className="col-md-6 col-sm-12 ">
            <div className="f">
              <label>Tikect No </label>
              <label> CMP/021/23-24</label>
            </div>
            <div className="f">
              <label>Complaint Logged By </label>
              <select
                class="custom-select"
                onChange={(event) => {
                  setlogg(event.target.value);
                }}
              >
                <option selected>Select All</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
            </div>
            <div className="f">
              <label>Complaint Name </label>
              <input
                type="text"
                name="complaint-name"
                required
                onChange={(event) => {
                  setname(event.target.value);
                }}
              />
            </div>
            <div className="f">
              <label>Mobile No </label>
              <input
                type="number"
                name="mobile"
                required
                onChange={(event) => {
                  setmobile(event.target.value);
                }}
              />
            </div>
            <div className="f">
              <label>City </label>
              <select
                class="custom-select"
                onChange={(event) => {
                  setcity(event.target.value);
                }}
              >
                <option selected>Select</option>
                <option value="karachi">karachi</option>
                <option value="lahore">lahore</option>
                <option value="multan">multan</option>
              </select>
            </div>
            <div className="f">
              <label>Parent Client </label>
              <select
                class="custom-select"
                onChange={(event) => {
                  setparentClient(event.target.value);
                }}
              >
                <option selected>Select Parent Client </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="f">
              <label>Status </label>
              <select
                class="custom-select"
                onChange={(event) => {
                  setstatus(event.target.value);
                }}
              >
                <option selected>Select All</option>
                <option value="New">New</option>
                <option value="Assigned">Assigned</option>
                <option value="Close">Close</option>
              </select>
            </div>
            <div className="f">
              <label>Remarks </label>
              <textarea
                name="remarks"
                rows="3"
                required
                onChange={(event) => {
                  setremarks(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="f">
              <label>
                Complaint <br />
                Desceription
              </label>
              <textarea
                name="com-des"
                rows="3"
                required
                onChange={(event) => {
                  setcompdes(event.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <h4>Assigned BY</h4>
            <div className="u">
              <label>To Group </label>
              <select
                class="custom-select"
                onChange={(event) => {
                  setgroup(event.target.value);
                }}
              >
                <option selected>Select Group</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
            </div>
            <div className="u">
              <label>Cloesd By </label>
              <select
                onChange={(event) => {
                  setCloesd(event.target.value);
                }}
              >
                <option selected>Select</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
              <input
                style={{ marginLeft: "20px" }}
                type="date"
                name=""
                id=""
                onChange={(event) => {
                  setdate_for_serach(event.target.value);
                }}
              />
            </div>
            <div className="u">
              <label>Wrantty Status</label>
              <select
                class="custom-select"
                onChange={(event) => {
                  setwrantty(event.target.value);
                }}
              >
                <option selected>Select</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
            </div>
            <div className="u">
              <label>Acknowledge By</label>

              <select
                class="custom-select"
                onChange={(event) => {
                  setacknowledge(event.target.value);
                }}
              >
                <option selected>Select</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
            </div>
            <div className="u">
              <label>Date for Searching </label>
              <input type="date" name="search-date" />
            </div>
            <div className="u">
              <label>Work Done </label>
              <textarea
                name="work-done"
                rows="2"
                onChange={(event) => {
                  setwork_done(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="h">
              <label style={{ paddingRight: "10px" }}>From</label>
              <input type="date" name="f-date" />
              <label style={{ paddingRight: "10px", paddingLeft: "5%" }}>
                TO
              </label>
              <input
                type="date"
                name="to-date"
                style={{ marginRight: "20px" }}
              />
              <button className="btn btn-success">
                <i>Search</i>
              </button>
            </div>
            <div className="b">
              <button className="btn btn-success">
                <i></i>Export
              </button>
              <button className="btn btn-danger">
                <i></i>Reset
              </button>
              <button className="btn btn-success" onClick={add}>
                <i></i>Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
