import "./MainLayout.scss"

import { Outlet } from "react-router"

import { Header } from "../../components"

export function MainLayout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  )
}
