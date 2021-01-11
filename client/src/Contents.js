import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

import Footer from './Footer';

const ContentContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;

  height: 100vh;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  h5 {
    grid-column: 1 / 4;
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
    padding: 12px 0;
    font-weight: normal;
    color: #666;
    font-size: 18px;
  }
`;

const ThumbnailListWrapper = styled.div`
  grid-column: 1 / 4;
  margin-top: 22px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Item = styled.li`
  @media (min-width: 1024px) {
    width: 24%;
  }
  width: 45%;
  margin: 0 auto;

  margin-bottom: 50px;
`;

const TextWrapper = styled.div`
  padding: 5px 0px;
  line-height: 100%;
  h3 {
    font-weight: 400;
    margin-bottom: 10px;
    font-family: 'yg750';
  }

  .text-wrap {
    line-height: 15px;
    color: #555;
    font-size: 13px;
    height: 75px;

    .front {
      margin-bottom: 9px;
      padding-top: 3px;
    }

    .product {
      margin-bottom: 16px;
    }
  }

  .price {
    width: 100%;
    margin-bottom: 10px;
    display: flex;

    .discount_price {
      font-size: 16px;
      color: #333;
      margin-right: 8px;
    }
    .base_price {
      font-size: 12px;
      color: #808080;
      text-decoration: line-through;
      margin-right: auto;
    }
    .discount_rate {
      font-size: 16px;
      color: #ff4000;
    }
  }
  .review_box {
    display: flex;
    .review_graph {
      color: #666;
      /* font-size: 13px; */
    }
    .review_count {
      font-family: 'ProximaNova-Regular';
      font-size: 12px;
      margin-left: 5px;
      color: #808080;
    }
  }
`;

const contentsInfo = [
  {
    url: 'https://image.wconcept.co.kr/productimg/image/img1/75/300845675.jpg',
    front: 2021,
    product: '페이드 매트 립스틱 2종 SET',
    discount_price: '23,400',
    base_price: '36,000',
    discount_rate: '20%',
    review_count: '240',
  },
  {
    url: 'https://image.wconcept.co.kr/productimg/image/img1/71/300962171.jpg',
    front: 2021,
    product: '레어카인드 미니 앨범 투고 쉐딩(2종 택1)',
    discount_price: '12,800',
    base_price: '16,000',
    discount_rate: '20%',
    review_count: '19',
  },
  {
    url: 'https://image.wconcept.co.kr/productimg/image/img1/82/300960782.jpg',
    front: 2021,
    product: '미니앨범 투고 블러셔&하이라이트(4종 택1)',
    discount_price: '12,800',
    base_price: '16,000',
    discount_rate: '20%',
    review_count: '4',
  },
  {
    url: 'https://image.wconcept.co.kr/productimg/image/img1/74/300845474.jpg',
    front: 2021,
    product: '페이드 매트 립스틱(10종 택1)',
    discount_price: '12,600',
    base_price: '18,000',
    discount_rate: '30%',
    review_count: '116',
  },
  {
    url: 'https://image.wconcept.co.kr/productimg/image/img1/30/300785730.jpg',
    front: 2021,
    product: '오버스머지 립 틴트(07 테이크 오프)',
    discount_price: '12,600',
    base_price: '18,000',
    discount_rate: '30%',
    review_count: '26',
  },
  {
    url: 'https://image.wconcept.co.kr/productimg/image/img1/14/300785714.jpg',
    front: 2021,
    product: '오버스머지 립 틴트(03 로즈어썸)',
    discount_price: '12,600',
    base_price: '18,000',
    discount_rate: '30%',
    review_count: '23',
  },
  {
    url: 'https://image.wconcept.co.kr/productimg/image/img1/88/300787188.jpg',
    front: 2021,
    product: '오버스머지 립 틴트(09 칠리 질리)',
    discount_price: '12,600',
    base_price: '18,000',
    discount_rate: '30%',
    review_count: '2',
  },
  {
    url: 'https://image.wconcept.co.kr/productimg/image/img1/07/300785707.jpg',
    front: 2021,
    product: '오버스머지 립 틴트(01 토스트베이지)',
    discount_price: '12,600',
    base_price: '18,000',
    discount_rate: '30%',
    review_count: '42',
  },
];

const Contents = () => {
  return (
    <ContentContainer>
      <Wrapper>
        <h5>MD'S PICK</h5>
        <ThumbnailListWrapper>
          <List>
            {contentsInfo &&
              contentsInfo.map((item, index) => (
                <Item key={index}>
                  <div>
                    <img src={item.url} alt='이미지' />
                  </div>
                  <TextWrapper>
                    <h3>RAREKIND</h3>
                    <div className='text-wrap'>
                      <div className='front'>[{item.front}]</div>
                      <div className='product'>{item.product}</div>
                    </div>

                    <div className='price'>
                      <div className='discount_price'>
                        {item.discount_price}
                      </div>
                      <div className='base_price'>{item.base_price}</div>
                      <div className='discount_rate'>{item.discount_rate}</div>
                    </div>

                    <div className='review_box'>
                      <div className='review_graph'>★★★★★</div>
                      <div className='review_count'>{item.review_count}</div>
                    </div>
                  </TextWrapper>
                </Item>
              ))}
          </List>
        </ThumbnailListWrapper>
      </Wrapper>
      <Footer />
    </ContentContainer>
  );
};

export default Contents;
