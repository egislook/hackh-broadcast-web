import React from 'react'
import Header from "../Header/Header"
import BottomNavigation from "../BottomNavigation/BottomNavigation"

const Layout = ({title, Children}) => {
  return (
    <div className="layout-container">
      <Header title={title}/>
        <React.Fragment>
          {
            Children
          }
        </React.Fragment>
      <BottomNavigation />
    </div>
  )
}

export default Layout
