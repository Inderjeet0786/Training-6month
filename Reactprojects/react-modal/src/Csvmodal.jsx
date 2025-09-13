import React from 'react'
import { CSVLink } from 'react-csv';
function Csvmodal() {
    const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];
 var headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" }
];

var data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];


  return (
    <div>
      <CSVLink data={csvData}>Download me</CSVLink>;
      <CSVLink data={data} headers={headers}>
            Example 2
</CSVLink>;
    </div>
  )
}

export default Csvmodal
