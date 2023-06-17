import styled from 'styled-components';
import background from './faq.jpg';

const Wrapper = styled.section`
    margin: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    @media(max-width: 724px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    @media(max-width: 550px) {
        margin: 32px 5px;
    }
`;

const Helpers = styled.div`
    font-family: 'Iter', sans-serif;
    border-radius: 32px;
    background-color: white;
    padding: 64px 64px 140px 64px;
    background-repeat: no-repeat;

    @media(max-width: 1120px) {
        padding: 48px;
        background-position: ;
    }
    @media(max-width: 724px) {
        padding: 32px;
    }

    @media(max-width: 550px) {
       
    }
`;

const Description = styled.p`
    font-size: 36px;
    font-weight: 400;
    @media(max-width: 1120px) {
        font-size: 17px;
        line-height: 1.1;
    }

    
`;

const Title = styled.h4`
    font-weight: 700;
    font-size: 48px;
    @media(max-width: 1120px) {
        font-size: 36px;
        line-height: 1.1;
    }
    @media(max-width: 724px) {
       font-size: 20px;
    }
`;
function Faq() {
  return (
    <Wrapper>
      <Helpers style={{
        backgroundImage: `url(${background})`,
      }}>
        <Title>
            Чем я могу <span style={{
            textDecoration: 'underline',
          }}>вам</span> помочь?
        </Title>
       
      </Helpers>
      <Helpers>
        <Description>
        Мой подход к дизайну заключается в том, чтобы создавать 
        проекты, которые соответствуют вашим потребностям и  целям. 
        Я работаю над каждым проектом с учетом вашего бренда, 
        целевой аудитории и современных тенденций в дизайне.
        </Description>
      </Helpers>
    </Wrapper>
  );
}

export default Faq;