import styled from 'styled-components'
import telegram from './telega.svg';
import vk from './vk.svg';


const Wrapper = styled.section`
    background-color: white;
    margin: 32px;
    padding: 64px;
    border-radius: 32px;

    @media(max-width: 550px) {
        margin: 0 5px;
        padding: 32px;
    }
`;


const Head = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 120%;

    @media(max-width: 768px) {
        font-size: 24px;
    }
`;

const ButtonsList = styled.ul`
    width: 100%;
`;

const ButtonItem = styled.li`
    width: 100%;
`;

const Button = styled.button`
    width: 100%;
    padding: 64px 0;
    border:1px solid gray;
    border-radius: 32px;
    background-color: transparent;
    margin-top: 32px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    cursor: pointer;
    transition: all 0.2s linear;
    display:flex;
    align-items: center;
    justify-content: center;

   &:hover{
    background-color: #08c;
   }

    @media(max-width: 768px) {
        padding: 69px 0;
        font-size: 15px;
        margin-top: 10px;
    }
`;

function Communication() {
  return (
    <Wrapper id="communication">
      <Head>
            Свяжитесь со мной
      </Head>
      <ButtonsList>
        <ButtonItem>
          <Button>
            <a target="__blank" href="https://t.me/radar000">
                Telegram
            </a>
            <img src={telegram} alt="" />
          </Button>
        </ButtonItem>
        <ButtonItem>
          <Button className="blue">
            <a target="__blank" 
              href="https://vk.com/raaadar">
            VK 
            </a>
            <img src={vk} alt="" />
          </Button>
        </ButtonItem>
      </ButtonsList>

    </Wrapper>
  );
}

export default Communication;