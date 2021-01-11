import React from 'react';
import styled from 'styled-components';

import pc_rarekind_01 from '../assets/pc_rarekind_01_1.jpg';
import pc_rarekind_02_1 from '../assets/pc_rarekind_02_1.jpg';
import pc_rarekind_03 from '../assets/pc_rarekind_03.jpg';

import m_rarekind_01_1 from '../assets/m_rarekind_01_1.jpg';
import m_rarekind_02_2 from '../assets/m_rarekind_02_2.jpg';
import m_rarekind_03 from '../assets/m_rarekind_03.jpg';

const Container = styled.div`
  /* overflow-x: hidden; */
`;

const Wrapper = styled.div``;

const Cycler = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr, auto));

  margin: 0 auto;
  img {
  }
`;

const CyclerMobile = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1fr, auto));

    margin: 0 auto;
    img {
    }
  }
`;

const CycleSection = () => {
  return (
    <Container>
      <Wrapper>
        <Cycler>
          <img src={pc_rarekind_01} alt='이미지' />
        </Cycler>

        {/* 모바일 버전 */}
        <CyclerMobile>
          <img src={m_rarekind_01_1} alt='모바일이미지' />
        </CyclerMobile>

        <Cycler>
          <img src={pc_rarekind_02_1} alt='이미지' />
        </Cycler>

        {/* 모바일 버전 */}
        <CyclerMobile>
          <img src={m_rarekind_02_2} alt='모바일이미지' />
        </CyclerMobile>

        <Cycler>
          <img src={pc_rarekind_03} alt='이미지' />
        </Cycler>

        {/* 모바일 버전 */}
        <CyclerMobile>
          <img src={m_rarekind_03} alt='모바일이미지' />
        </CyclerMobile>
      </Wrapper>
    </Container>
  );
};

export default CycleSection;
