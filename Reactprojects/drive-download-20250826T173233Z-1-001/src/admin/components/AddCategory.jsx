import PageHeader from "../../PageHeader";

export default function AddCategory(){
    return(
        <>
           <main className="main">
  {/* Page Title */}
            <PageHeader child={"Add Category"}/>
  {/* End Page Title */}
  {/* About Us Section */}
  <section id="about-us" className="section about-us">
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-6 order-1 order-lg-2"
         
        >
          <img src="/assets/assets/img/about-2.jpg" className="img-fluid" alt="" />
        </div>
        <div
          className="col-lg-6 order-2 order-lg-1 content"
        
        >
          <h3>Voluptatem dignissimos provident quasi corporis</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              <i className="bi bi-check-circle" />{" "}
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </li>
            <li>
              <i className="bi bi-check-circle" />{" "}
              <span>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </span>
            </li>
            <li>
              <i className="bi bi-check-circle" />{" "}
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* /About Us Section */}
</main>

        </>
    )
}