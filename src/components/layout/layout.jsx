import React from 'react'
import Header from '../header'
import {Container, SidebarContainer,Aside} from './styles'


import Sidebar from '../sidebar'
import GlobalStyles from '../../styles/globalStyles'


export default ({children, title}) => {
  return(
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <SidebarContainer>
        {children}
          <Aside>
            <Sidebar title='Moda na moda' description='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley'/>
            <Sidebar title='Moda na moda' description='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley'/>
          </Aside>
        </SidebarContainer>

      </Container>
    </>


    
  );
}