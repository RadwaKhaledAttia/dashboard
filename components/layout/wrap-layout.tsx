import React, { ComponentType } from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'

const AddLayout = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const LayoutComponent: React.FC<P> = props => {
    return (
      <>
        <Sidebar>
          <Navbar />
          <WrappedComponent {...(props as P)} />
        </Sidebar>
      </>
    )
  }

  return LayoutComponent
}

export default AddLayout
