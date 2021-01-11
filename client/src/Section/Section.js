import React from 'react';
import styled from 'styled-components';

import CycleSection from './CycleSection';
import Contents from '../Contents';

import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { SiPinterest } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';

const SectionContainer = styled.section``;

const SubTitleWrapper = styled.div`
  @media (max-width: 768px) {
    height: 50px;
    width: 100%;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 10px;
    z-index: 35;
    background-color: #fff;
  }
  padding-top: 81px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #767676;

  h2 {
    @media (max-width: 768px) {
      font-size: 1rem;
      color: #000;
      line-height: 52px;
      font-weight: bold;
      margin: 0 auto;
    }
    font-size: 44px;
    text-align: center;
    line-height: 100%;
    font-weight: normal;
    margin-bottom: 10px;
  }

  ol {
    @media (max-width: 768px) {
      display: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 44px;
    li {
      font-size: 11px;
      :last-child {
        color: #000;
      }

      :not(:last-child)::after {
        content: '>';
        width: 3px;
        height: 5px;
        vertical-align: top;
        margin: 5px 6px 0 10px;
        font-size: 5px;
      }
    }
  }
`;

const MainSection = styled.section`
  min-height: 400px;
`;

const MainTitleWrapper = styled.div`
  height: 120px;
  background-color: #f2f2f2;
  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Inner = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 10px 18px;
  }
  display: flex;
  align-items: center;
  width: 1240px;
  height: 100%;
  margin: 0 auto;

  h3 {
    @media (max-width: 768px) {
      font-size: 1rem;
      color: #000;
      font-weight: bold;
    }
    font-size: 26px;
    font-weight: normal;
    color: #767676;
    margin-right: auto;
  }
  .util-wrap {
    .sns {
      @media (max-width: 768px) {
        display: none;
      }
      display: flex;
      align-items: center;

      li {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
        font-size: 1.5rem;
        color: white;
        background: gray;
        padding: 5px;
        border-radius: 50%;
      }

      select {
        width: 295px;
        padding: 9px 10px;
        color: #a4a4a4;
        border: 1px solid #fff;
      }
    }
  }
`;

const Section = () => {
  return (
    <SectionContainer>
      <SubTitleWrapper>
        <h2>EVENT</h2>
        <ol>
          <li>home</li>
          <li>event</li>
          <li>RAREKIND SUMMER</li>
        </ol>
      </SubTitleWrapper>

      <MainSection>
        <MainTitleWrapper>
          <Inner>
            <h3>RAREKIND SUMMER</h3>
            <div className='util-wrap'>
              <ul className='sns'>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <AiFillTwitterCircle />
                </li>
                <li>
                  <SiPinterest />
                </li>
                <li style={{ marginRight: '15px' }}>
                  <FiInstagram />
                </li>

                <select>
                  <option value=''>다른 기획전 보기</option>
                </select>
              </ul>
            </div>
          </Inner>
        </MainTitleWrapper>

        {/* 주기적으로 사진이 돌아가는 컴포넌트 */}
        <CycleSection />
        <Contents />
      </MainSection>
    </SectionContainer>
  );
};

export default Section;
