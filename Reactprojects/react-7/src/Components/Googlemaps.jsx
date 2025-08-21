export default function Googlemaps(){
    return(
        <>
        <div className="container">
  <div className="page-inner">
    <div className="page-header mb-0">
      <h3 className="fw-bold mb-3">Google Maps</h3>
      <ul className="breadcrumbs mb-3">
        <li className="nav-home">
          <a href="#">
            <i className="icon-home" />
          </a>
        </li>
        <li className="separator">
          <i className="icon-arrow-right" />
        </li>
        <li className="nav-item">
          <a href="#">Maps</a>
        </li>
        <li className="separator">
          <i className="icon-arrow-right" />
        </li>
        <li className="nav-item">
          <a href="#">Google Maps</a>
        </li>
      </ul>
    </div>
    <div className="page-category">Help users find your address.</div>
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Our Location</div>
          </div>
          <div className="card-body">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63536.63871717301!2d95.32870249999999!3d5.5611019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040377ae63dbcdf%3A0x3039d80b220cb90!2sBanda%20Aceh%2C%20Kota%20Banda%20Aceh%2C%20Aceh!5e0!3m2!1sid!2sid!4v1701054428265!5m2!1sid!2sid"
              width={600}
              height={450}
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}