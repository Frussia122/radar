import styled from 'styled-components';



const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const Marquee = styled.div`
    position: relative;
    width: 100vw;
    max-width: 100%;
    height: 140px;
    overflow-x: hidden;

    @media(max-width: 584px) {
        font-size:61px;
        height: 80px;
    }
`;

const Track = styled.div`
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 15s linear infinite;
`;
const Content = styled.h1`
    font-size: 128px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;

    @media(max-width: 584px) {
        font-size:61px;
    }
`;

const SubTitle = styled.h2`
 
    margin-top: 10px;
    font-size: 24px;
    font-family: 'Inter', sans-serif;

    @media(max-width: 584px) {
        text-align: center;
        font-size: 20px;
    }

`;

const Button = styled.button`
    margin-top: 48px;
    width: 480px;
    padding: 24px 0;
    border-radius: 32px;
    background-color: transparent;
    border: 1px solid gray;
    outline: none;
    font-size:24px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all .2s linear;
    &:hover{
        background-color:black;
        color: white;
    }


    @media(max-width: 584px) {
        padding: 18px 0;
        width: 340px;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`;
function MainScreen() {
 
  return (   
    <Wrapper>
      <Marquee>
        <Track>
          <Content>&nbsp;
          Воплощаю ваши идеи в реальность. Оформление соц. сетей, разработка лендингов под ключ.
          Воплощаю ваши идеи в реальность. Оформление соц. сетей, разработка лендингов под ключ.
          </Content>
        </Track>
      </Marquee>
      <SubTitle>
      Разработка дизайна для вашего проекта: сайты, айдентика, соц. сети
      </SubTitle>

      <Link target="__blank" href="https://t.me/radar000">
        <Button>
          Связаться со мной
        </Button>
      </Link>
      

    </Wrapper>
  );
}

export default MainScreen;