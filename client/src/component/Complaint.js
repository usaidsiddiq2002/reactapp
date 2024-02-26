import React, { useEffect, useState } from "react";
import axios from "axios";
import del from "../img/remove.png";
import edit from "../img/edit.png";
import Modal from "./modal";

const Complaint = () => {
  const [modal, setmodal] = useState(false);
  const [list, setlist] = useState([]);

  const colesModal = () => setmodal(false);

  const get = () => {
    axios.get("http://localhost:8080/create").then((respon) => {
      setlist(respon.data);
      // console.log(respon.data);
    });
  };

  const deleteComplain = (id) => {
    if (window.confirm("are you sure?")) {
      axios.delete(`http://localhost:8080/remove/${id}`);
    }
  };

  useEffect(() => {
    get();
  });

  const id = (id) => {
    return id;
  };

  return (
    <>
      {modal && <Modal colesModal={colesModal} idi={id} />}
      <div className="table-responsive">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Ticket No</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Complainer Address</th>
              <th scope="col">Complaint Description</th>
              <th scope="col">Complain Date</th>
              <th scope="col">Status</th>
              <th scope="col">Wrantty Status</th>
              <th scope="col">Group</th>
              <th scope="col">Closed By</th>
              <th scope="col">Closing date </th>
              <th scope="col">Remarks</th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {list.map((val, key) => {
              return (
                <tr>
                  <td>{val.Ticket_No}</td>
                  <td>{val.customer_name}</td>
                  <td>{val.complanier_address}</td>
                  <td>{val.complanit_description}</td>
                  <td>{val.complain_date}</td>
                  <td>{val.status}</td>
                  <td>{val.wrantty_status}</td>
                  <td>{val.group}</td>
                  <td>{val.closed_by}</td>
                  <td>{val.closing_date}</td>
                  <td>{val.remarks}</td>
                  <td>
                    <a className="icon">
                      <img
                        src={del}
                        width={20}
                        onClick={() => {
                          deleteComplain(val.id);
                        }}
                      />
                    </a>
                    <a className="icon">
                      <img
                        src={edit}
                        width={25}
                        style={{ paddingLeft: "5px" }}
                        onClick={() => {
                          setmodal(true);
                          id(val.id)
                        }}
                      />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Complaint;
