import React from 'react';
import styled from 'styled-components';

import banner from './assets/banner.jpg';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BiLogInCircle } from 'react-icons/bi';
import { RiShoppingBasketLine } from 'react-icons/ri';

const HeaderContainer = styled.header`
  @media (max-width: 768px) {
    display: none;
  }
`;

const TopBanner = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  /* position: relative;
  top: 0;
  width: 100%; */
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px solid #dbdbdb;
  cursor: pointer;

  img {
    width: 100%;
    vertical-align: top;
  }
`;

const GlobalSearch = styled.div`
  @media (max-width: 768px) {
    padding: 0 10px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  background-color: #fff;
  padding: 0 35px;
  overflow: hidden;

  .logo {
    @media (max-width: 768px) {
      display: none;
    }
    img {
      width: 100%;
      cursor: pointer;
    }
  }

  .top_search {
    @media (max-width: 768px) {
      display: none;
    }
    width: 420px;
    border-bottom: 2px solid #000;
  }

  .utility {
    @media (max-width: 768px) {
      display: none;
    }
    display: flex;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5px;
      cursor: pointer;
      span {
        font-size: 1.5rem;
      }
    }
  }
`;

const GlobalNav = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  background: #0b0b0d;
  display: flex;
  align-items: center;
  color: #fff;
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    li {
      cursor: pointer;

      span {
        text-transform: uppercase;
        color: #fff;
        padding: 0 16px;
        font-size: 14px;
        line-height: 12px;
        font-weight: bold;
        :hover {
          color: #04bd9e;
        }
      }
      .right-bolder {
        border-right: 1px solid #89898a;
        padding-right: 48px;
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  line-height: 33px;
  text-indent: 5px;
  font-family: 'yg740';
  font-size: 12px;
  background: none;
  width: 100%;
  height: 28px;
  outline: none;
  padding: 0;
`;

const Button = styled.button`
  font-size: 1.5rem;
  width: 10%;
  height: 28px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TopBanner>
        <img src={banner} alt='배너' />
      </TopBanner>

      <GlobalSearch>
        <div className='logo'>
          <img
            src='https://static.wconcept.co.kr/web/images/common/logo-dark.png'
            alt='로고'
          />
        </div>

        <div className='top_search'>
          <Form>
            <Input
              type='text'
              placeholder='2021 1st 클리어런스 세일 진행 중!'
            />
            <Button>
              <AiOutlineSearch />
            </Button>
          </Form>
        </div>

        <ul className='utility'>
          <li>
            <span>
              <BiUser />
            </span>
            <strong>JOIN</strong>
          </li>
          <li>
            <span>
              <BiLogInCircle />
            </span>
            <strong>LOGIN</strong>
          </li>
          <li>
            <span>
              <RiShoppingBasketLine />
            </span>
            <strong>0</strong>
          </li>
        </ul>
      </GlobalSearch>
      <GlobalNav>
        <ul>
          <li>
            <span>NEW</span>
          </li>
          <li>
            <span>WOMEN</span>
          </li>
          <li>
            <span>MEN</span>
          </li>
          <li>
            <span>LIFE</span>
          </li>
          <li>
            <span>BEAUTY&</span>
          </li>
          <li>
            <span>SALE</span>
          </li>
          <li>
            <span className='right-bolder'>DESIGNER</span>
          </li>

          <li>
            <span style={{ paddingLeft: '5px' }}>EXCLUSIVE</span>
          </li>
          <li>
            <span>WDNA</span>
          </li>
          <li>
            <span>EVENT</span>
          </li>
          <li>
            <span className='right-bolder'>BEST</span>
          </li>
        </ul>
      </GlobalNav>
    </HeaderContainer>
  );
};

export default Header;
