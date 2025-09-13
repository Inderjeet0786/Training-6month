
import { CSVLink } from "react-csv";
import PageHeader from "../PageHeader";

export default function CsvData(){
  var   headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" }
];

var data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];
// const csvData = [
//   ["firstname", "lastname", "email"],
//   ["Ahmed", "Tomi", "ah@smthing.co.com"],
//   ["Raed", "Labes", "rl@smthing.co.com"],
//   ["Yezzi", "Min l3b", "ymin@cocococo.com"]
// ];
    return(
        <>
           <main className="main">
  {/* Page Title */}
        <PageHeader child={"Data Download"}></PageHeader>
  {/* End Page Title */}
  {/* About Us Section */}
  <section id="about-us" className="section about-us">
    <div className="container">
      <div className="row gy-4">
            <CSVLink data={data} headers={headers}>
  Download me
</CSVLink>;
{/* <CSVLink data={csvData}>Download me</CSVLink>; */}
      </div>
    </div>
  </section>
  {/* /About Us Section */}
  {/* Counts Section */}
 
  {/* /Counts Section */}
  {/* Testimonials Section */}

  {/* /Testimonials Section */}
</main>

        </>
    )
}