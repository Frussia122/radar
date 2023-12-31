import styled from 'styled-components';
import Intranet from './Intranet.jpg';
import Melonity from './Melonity.jpg';
import Ocw from './Ocw.jpg';
import dropfile from './dprofile.svg';

const works = [
  {
    name: 'Intranet',
    categories: ['ui/ux', 'web', 'corp style' ],
    styleList: { 
      gridColumn: '1 / span 2',
      backgroundImage: `url(${Intranet})`,
      color: 'white',
    },
    link: 'https://dprofile.ru/case/16608/lending-intranetboy',

  },
  {
    name: 'Melonity',
    categories: ['ui/ux', 'web'],
    styleList: { 
      gridColumn: 'span 1',
      backgroundImage: `url(${Melonity})`,
      color: 'black',
    },
    link: 'https://dprofile.ru/case/14670/pervyi-ekran-saita-melonitygg',
  },
  {
    name: 'OCW',
    categories: ['ui/ux', 'web', 'corp style' ],
    styleList: { 
      gridColumn: 'span 1',
      backgroundImage: `url(${Ocw})`,
      color: 'black',
    },
    link: 'https://dprofile.ru/case/14669/lending-i-aidentika-ourcarwash',
  },
];




const Wrapper = styled.section` 
    background-color: white;
    border-radius: 32px;
    margin: 64px 32px 32px 32px;  
    padding : 64px;

    @media(max-width: 931px) {
        padding: 32px;
    }

    @media(max-width: 550px) {
        margin: 24px 8px;
        padding: 32px 24px;
        
    }
`;
const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 550px) {
       display:block;
        
    }
`;

const Title = styled.h2`
    font-size: 48px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;

    @media(max-width: 900px) {
        font-size: 32px;
    }

     @media(max-width: 550px) {
        font-size: 20px;
    }
`;

const SubTitle = styled.h3`
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    line-height: 120%;

    @media(max-width: 900px) {
        font-size: 18px;
    }

    @media(max-width: 550px) {
        font-size: 12px;
        text-align: left;
        margin-top: 10px;
    }
`;


const WorksList = styled.ul`
    margin-top: 64px;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto; 
    grid-gap: 20px; 
    @media(max-width: 931px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    @media(max-width: 550px) {
        margin-top: 25px;
        
    }
`;

const WorksItem = styled.a`
    cursor: pointer;
    height: 270px;
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 32px;
    transition: all 0.4s linear;
    @media(max-width: 550px) {
       height: 270px;
    }
    &:hover{
        transform: translateY(-15px);
    }
`;
const ItemHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 48px;

    
    @media(max-width: 680px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media(max-width: 550px) {
      margin: 32px;
    }
`;


const Name = styled.h4`
   color: inherit;
   font-size: 40px;
   font-family: 'Iter', sans-serif;
   font-weight: 600;

   @media(max-width: 550px) {
    font-size: 25px;
    }
`;


const Categories = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 70px;
    flex-wrap: wrap;

`;

const Category = styled.li`
    margin-left: 16px;
    background-color: black;
    font-family: 'Iter', sans-serif;
    font-size: 20px;
    color: white;
    border-radius: 32px;
    padding: 8px 16px;

    @media(max-width: 680px) {
        margin-top: 20px;
        margin-left: 0;
        margin-right: 16px;
    }

    @media(max-width: 550px) {
        margin-right: 8px;
        margin-top: 8px;
     }
`;
const Button = styled.button`
    width: 100%;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 32px;
    padding: 64px 0;
    margin-top: 32px;
    font-size: 24px;
    font-family: 'Iter', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover{
        border: 1px solid #fe5639;
        background-color: #fe5639;
    }
    @media(max-width: 768px) {
        font-size: 18px;
    }
`;

function Products() {
  return (
    <Wrapper id="works">
      <Head>
        <Title>Мои недавние проекты</Title>
        <SubTitle> Посмотрите на мои работы, <br></br>
        может быть, вам что-то понравится</SubTitle>
      </Head>

      <WorksList>
        {works.map(work => (
          <WorksItem href={work.link} style={work.styleList} key={work.name}>
        
            <ItemHead>
              <Name>{work.name}</Name>
              <Categories>
                {work.categories.map((category, idx) => (
                  <Category key={idx}>{category}</Category>
                ))}
              </Categories>
            </ItemHead>
          
          </WorksItem>
        ))}
      </WorksList> 
     
      <Button>
        <a href="https://dprofile.ru/radar">Все мои работы на Dprofile <img src={dropfile} alt="" /></a>
      </Button>
    </Wrapper>
  );
}

export default Products;