import React, { Component } from 'react'
import { spaces, breakpoints, colors, textStyles } from '../styles'
import styled from 'styled-components'
import Media from 'react-media'

const Container = styled.div`
  background-color:${colors.white}
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  pading: 0;
`

const Title = styled.h1`
  font-family: Berkshire Swash, cursive;
  font-weight: 100;
  margin: 0;
  line-height: 60px;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  width: 33%;
  justify-content: space-around;
  ${textStyles.h5}
`

const SearchBar = styled.input`
  background-color: ${colors.green};
  width: 200px;
  padding: 10px;
  border-radius: 20px;
`

const SearchImage = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 7px;
  right: 10px;
`

class Navbar extends Component {
  render() {
    return (
      <div>
        <Media query={`(max-width: ${breakpoints.desktop}px)`}>
          {matches =>
            matches ? (
              <>
                <Container>
                  <img
                    alt='menu'
                    src='https://res.cloudinary.com/apomarn/image/upload/v1559164700/WeDo/menu.png'
                    width='24px'
                    height='24px'
                  />
                  <Logo>
                    <img
                      alt='logo'
                      src='https://res.cloudinary.com/apomarn/image/upload/v1559166413/WeDo/logo.png'
                      width='45px'
                      height='50px'
                    />
                    <Title>WeDo</Title>
                  </Logo>
                  <img
                    alt='search'
                    src='https://res.cloudinary.com/apomarn/image/upload/v1559164768/WeDo/search.png'
                    width='24px'
                    height='24px'
                  />
                </Container>
              </>
            ) : (
              <>
                <Container>
                  <Logo>
                    <img
                      alt='logo'
                      src='https://res.cloudinary.com/apomarn/image/upload/v1559166413/WeDo/logo.png'
                      width='45px'
                      height='50px'
                    />
                    <Title>WeDo</Title>
                  </Logo>
                  <Menu>
                    <p>Calendar</p>
                    <p>Stories</p>
                    <p>Questionary</p>
                    <p>Guest Lists</p>
                  </Menu>
                  <div style={{ position: 'relative' }}>
                    <form>
                      <SearchBar />
                      <SearchImage
                        alt='search'
                        src='https://res.cloudinary.com/apomarn/image/upload/v1559164768/WeDo/search.png'
                      />
                    </form>
                  </div>
                </Container>
              </>
            )
          }
        </Media>
      </div>
    )
  }
}

export default Navbar
