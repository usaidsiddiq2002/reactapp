import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "complain",
});

app.post("/create", (req, res) => {
  const id = req.body.id;
  const Ticket_No = req.body.Ticket_No;
  const customer_name = req.body.customer_name;
  const complanier_address = req.body.complanier_address;
  const complanit_description = req.body.complanit_description;
  const complain_date = req.body.complain_date;
  const status = req.body.status;
  const wrantty_status = req.body.wrantty_status;
  const group = req.body.group;
  const closed_by = req.body.closed_by;
  const closing_date = req.body.closing_date;
  const remarks = req.body.remarks;
  const logg = req.body.logg;
  const mobile = req.body.mobile;
  const city = req.body.city;
  const parentclient = req.body.parentclient;
  const acknow = req.body.acknow;
  const dataforsearch = req.body.dataforsearch;
  const workdone = req.body.workdone;

  db.query(
    "INSERT INTO addcom (id,Ticket_No,customer_name,complanier_address,complanit_description,complain_date,status,wrantty_status,closed_by,closing_date,remarks,logg,mobile,city,parentclient,acknow,dateforsearch,workdone) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      id,
      Ticket_No,
      customer_name,
      complanier_address,
      complanit_description,
      complain_date,
      status,
      wrantty_status,
      closed_by,
      closing_date,
      remarks,
      logg,
      mobile,
      city,
      parentclient,
      acknow,
      dataforsearch,
      workdone,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values insert");
      }
    }
  );
});

app.get("/create", (req, res) => {
  db.query("SELECT * FROM addcom", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM addcom WHERE id = ? ", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/get/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM addcom  WHERE id = ? ", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/put/:id", (req, res) => {
  const id = req.params.id;
  const Ticket_No = req.body.Ticket_No;
  const customer_name = req.body.customer_name;
  const complanier_address = req.body.complanier_address;
  const complanit_description = req.body.complanit_description;
  const complain_date = req.body.complain_date;
  const status = req.body.status;
  const wrantty_status = req.body.wrantty_status;
  const group = req.body.group;
  const closed_by = req.body.closed_by;
  const closing_date = req.body.closing_date;
  const remarks = req.body.remarks;
  const logg = req.body.logg;
  const mobile = req.body.mobile;
  const city = req.body.city;
  const parentclient = req.body.parentclient;
  const acknow = req.body.acknow;
  const dataforsearch = req.body.dataforsearch;
  const workdone = req.body.workdone;

  db.query(
    "UPDATE addcom SET Ticket_No = ?,customer_name = ?,complanier_address = ?,complanit_description = ?,complain_date = ?,status = ?,wrantty_status = ? ,closed_by = ? ,closing_date = ?,remarks = ?,logg = ?,mobile = ?,city = ?,parentclient = ?,acknow = ?,dateforsearch = ?,workdone = ? WHERE id = ? ",
    [
      Ticket_No,
      customer_name,
      complanier_address,
      complanit_description,
      complain_date,
      status,
      wrantty_status,
      closed_by,
      closing_date,
      remarks,
      logg,
      mobile,
      city,
      parentclient,
      acknow,
      dataforsearch,
      workdone,
      id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/user", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO user(id,username,email,password) VALUES (?,?,?,?) ",
    [id, name, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/login", (req, res) => {
  db.query(
    "SELECT * FROM user WHERE username = ? AND password = ?",
    [req.body.username, req.body.password],
    (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data.length > 0) {
        const name = data[0].username;
        console.log(data[0].username)
        const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
          exiresIn: "id",
        });
        res.cookie("token", token);
        return res.json({ status: "success" });
      } else {
        return res.json({ Message: "No Record" });
      }
    }
  );
});

app.listen(8080, () => {
  console.log("hi");
});
