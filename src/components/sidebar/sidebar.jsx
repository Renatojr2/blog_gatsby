import React from 'react'
import {Sidebar, SidebarTitle, SidebarDescription} from './styles'


export default ({title, description}) => (
  <Sidebar>
    <SidebarTitle>
      {title}
    </SidebarTitle>
    <SidebarDescription>
      {description}
    </SidebarDescription>
  </Sidebar>
)