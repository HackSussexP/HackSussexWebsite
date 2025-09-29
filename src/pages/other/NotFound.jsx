import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container-fluid gradient opacity-75">
      <div className="row align-items-center me-auto ms-auto vh-100">
        <div className="col-12 text-center">
          <h1 className="display-1 text-dark">404 Error</h1>
          <h2 className="display-6 text-dark row align-items-center text-center justify-content-center">
            <div className="col-auto p-0 m-0 text-end">
              <i className="fas fa-coffee text-dark"> </i>
            </div>
            <div className="col-8 col-md-4 p-0 m-0">
              This page is taking a coffee break.
            </div>
            <div className="col-auto p-0 m-0">
              <i className="fas fa-coffee text-dark"> </i>
            </div>
          </h2>
          <h4 className="text-dark">
            In the meantime, grab your favourite mug and explore our other pages
            while this one takes a break.
          </h4>
          <Link
            to="/"
            type="button"
            className="btn text-dark fs-3 mt-5"
          >
            <i className="fas fa-arrow-left"></i> Go back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;