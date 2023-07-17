  import React, { useState } from 'react';
  import PinterestIcon from '@mui/icons-material/Pinterest';
  import { IconButton } from '@mui/material';
  import styled from '@emotion/styled';
  import SearchIcon from '@mui/icons-material/Search';
  import NotificationsIcon from '@mui/icons-material/Notifications';
  import TextsmsIcon from '@mui/icons-material/Textsms';
  import { AccountCircle, KeyboardArrowDown } from '@mui/icons-material';
  // props:
  // {
  //   onSubmit: onSearchSubmit()
  // }
  
  function Header(props) {
    const [input, setInput] = useState("");

    const onSearchSubmit = (e) => {
      e.preventDefault();
      props.onSubmit(input);
      console.log("you searched ", input);
    }
    
    return (
        <Wrapper>
            <LogoWrapper>
              <IconButton>
               <PinterestIcon />
              </IconButton>
            </LogoWrapper>
            <HomePageButton>
                <a href="/">Homepage</a>
            </HomePageButton>

             <FollowingWrapper>
                <a href="#">Following</a>
            </FollowingWrapper>

            
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton> 
                    <form>
                      <input type="text" onChange={(e) => setInput (e.target.value)} />
                      <button type="submit" onClick={onSearchSubmit} >Search</button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>

            <IconWrapper>
              <IconButton>
                <NotificationsIcon />
              </IconButton>

              {/* <IconButton>
                <TextsmsIcon />
              </IconButton>

              <IconButton>
                <NotificationsIcon />
              </IconButton> */}

              <LogoWrapper>
                <IconButton>
                  <AccountCircle />
                </IconButton>
              </LogoWrapper>

              <IconButton>
                <KeyboardArrowDown />
              </IconButton>
            </IconWrapper>  

        </Wrapper> 
    )
  }
  
  export default Header
  

  const Home=styled.div`
  display:flex;
  height:48px;
  min-width:123px;
  align-items:center
  justify-content:center;
  border-radius:24px;
  cursor:pointer;
  ` 
  const Wrapper=styled.div`
    display:flex;
    align-items:center;
    height:56px;
    padding:12px 4px 4px 16px;
    background-color:white;
    color:black;

  `

  const LogoWrapper=styled.div`
    .MuiSvgIcon-root{
      color:#e60023;
      font-size:32px;
      cursor:pointer;

    }
  `

  const HomePageButton= styled(Home)`
  background-color:rgb(17,17,17);

  a{
    text-decoration:none;
    color:white;
    font-weight:700;
    margin:10px 18px;  //different from the video
  }
  `

  const FollowingWrapper=styled(Home)`
  background-color:white;

  a{
    text-decoration:none;
    color:black;
    font-weight:700;
    margin:10px 18px;  //different from the video
  }

  :hover{
    background-color:#e1e1e1;
  }
  `

  const SearchWrapper = styled.div`
    flex:1;
  `

  const SearchBarWrapper=styled.div`
    background-color:#efefef;
    display:flex;
    height:48px;
    width:95%;
    border-radius:50px;
    border:none;
    padding-left:10px;

    form{
      display:flex;
      flex:1;
    }

    form > input{
      background-color:transparent;
      border:none;
      width:100%;
      margin-left:5px;
      font-size:16px;
    }

    form > button{
      display:none;
    }

    input:focus{
      outline:none;
    }
  `
  const IconWrapper=styled.div`
    display:flex;
  `