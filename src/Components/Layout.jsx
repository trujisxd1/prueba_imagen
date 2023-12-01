import { Link, Outlet } from "react-router-dom"




const Layout = () => {
  return (
    <>
    <nav className="level">
    
  <p className="level-item has-text-centered">
    <a className="link is-info" >Home</a>
  </p>

  <p className="level-item has-text-centered">
   <Link to={"/pruebas"} className="link is-info">  prueba</Link>
  </p>
  <p className="level-item has-text-centered">
   
  </p>
  <p className="level-item has-text-centered">
    <Link to={"/front"} className="link is-info">front</Link>
  </p>
  <p className="level-item has-text-centered">
    <Link to={"/img"} className="link is-info">Img</Link>
  </p>
 
</nav>


    </>
  )
}

export default Layout