import { Link } from "react-router-dom"
import "./pengaturan.css"

function Laporan() {
  return (
    <>
      {/* NAVIGATION BAR */}
      <section className="navbar">
        <button className="kembali-button">
          <Link to="/">kembali</Link>
        </button>
        <h2>Rekap Transaksi Harian</h2>
      </section>
      {/* NAVIGATION BAR END */}

      {/* CONTENT */}
      <section className="content">
        <p>Isi laporan akan tampil di sini</p>
      </section>
      {/* CONTENT END */}

      {/* FOOTER */}
      <section className="footer">
        <p>Copyright &copy; 2026 BAQS. All rights reserved.</p>
      </section>
      {/* FOOTER END */}
    </>
  )
}

export default Laporan