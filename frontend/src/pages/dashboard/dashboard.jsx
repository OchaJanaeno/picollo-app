import { Link } from "react-router-dom"
import "./dashboard.css"

function Dashboard() {
  return (
    <div>
      {/* NAVIGATION BAR */}
      <section className="navbar">
        <img src="/logo.png" alt="Logo" className="logo" />
        <ul className="nav-button">
          <li><Link to="/laporan">Laporan</Link></li>
          <li><Link to="/pengaturan">Pengaturan</Link></li>
        </ul>
      </section>
      {/* NAVIGATION BAR END */}

      {/* CONTENT */}
      <section className="content">
        <div className="left">
          <h1>Welcome to the Cashier Dashboard</h1>
          <p>All of product of your outlet will be displayed here.</p>
        </div>

        <div className="right">
          <p>Add items to chart</p>
        </div>
      </section>
      {/* CONTENT END */}

      {/* FOOTER */}
      <section className="footer">
        <p>Copyright &copy; 2026 BAQS. All rights reserved.</p>
      </section>
      {/* FOOTER END */}
    </div>
  )
}

export default Dashboard