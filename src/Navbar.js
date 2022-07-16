import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './image/logo.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo-title">
        <div className="logo">
          <img src={logo} alt=''/>
        </div>
        <Link to="/" className="site-title">
          Mỹ Phẩm
        </Link>

      </div>

      <ul>
        <CustomLink to="/Gioithieu">Giới thiệu</CustomLink>
        <CustomLink to="/Tintuc">Tin tức</CustomLink>
        <CustomLink to="/Sanpham">Sản phẩm</CustomLink>
        <CustomLink to="/Hotro">Hỗ trợ</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}