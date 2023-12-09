import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container py-3">
          <Link to="/" className="navbar-brand">
            <img src="/logo.png" alt="logo" width={210} height={35} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item ${location.pathname === '/job' ? 'active' : ''}`}>
                <Link to="/job" className="nav-link">
                  Cari Lowongan
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
                <Link to="/profile" className="nav-link">
                  Profile Perusahaan
                </Link>
              </li>
            </ul>
            <Link to="/login" className={`btn btn-outline-primary ${location.pathname === '/login' ? 'active' : ''}`}>
              Masuk
            </Link>
            <Link to="/register" className={`btn btn-outline-primary m-2 ${location.pathname === '/register' ? 'active' : ''}`}>
              Registrasi
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
