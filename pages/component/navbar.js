import { useRouter } from "next/router"
import Link from "next/link";

const Navbar = () =>{
    const router = useRouter();
    return(<>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Fohor Byasthapan</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href="/" legacyBehavior><a className={router.asPath == '/' ? "nav-link active" : "nav-link"} aria-current="page" href="#">Home</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/upload" legacyBehavior><a className={router.asPath == '/upload' ? "nav-link active" : "nav-link"} href="#">Upload</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/about" legacyBehavior><a className={router.asPath == '/about' ? "nav-link active" : "nav-link"} href="#">About</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/contact" legacyBehavior><a className={router.asPath == '/contact' ? "nav-link active" : "nav-link"} href="#">Contact</a></Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>)
}

export default Navbar