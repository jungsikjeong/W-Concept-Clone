import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  padding-top: 90px;
`;

const FooterNav = styled.nav`
  background: rgb(132, 132, 132);
  margin-top: 70px;

  ul {
    display: flex;
    justify-content: space-between;
    color: #fff;
    flex-wrap: wrap;
    padding: 0 28px;

    li {
      font-size: 14px;
      padding: 20px 44.5px;
      cursor: pointer;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <ul>
          <li>회사소개</li>
          <li>입점상담</li>
          <li>제휴문의</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>고객센터</li>
          <li>채용정보</li>
          <li>GLOBAL</li>
        </ul>
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;
