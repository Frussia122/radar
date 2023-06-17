import styled from 'styled-components';
import aidentika from './aidentika.svg';
import web from './web.svg';
import social from './social.svg';
import layout from './layout.svg';


const allSkills = [
  { 
    id: 'webDesign',
    title: 'Веб-дизайн',
    icon: web, 
  },
  { 
    id: 'aidentika',
    title: 'Айдентика',
    icon: aidentika, 
  },
  { 
    id: 'socialNetwork',
    title: 'Соц.Сети',
    icon: social, 
  },
  { 
    id: 'layout',
    title: 'Веб-дизайн',
    icon: layout, 
  },
];

const Wrapper = styled.section`
    margin: 32px;

    @media(max-width: 550px) {
        margin: 0 5px;
    }
`;

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px;

    @media(max-width: 1630px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
    }
    @media(max-width: 724px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto;
    }
    
`;
const Item = styled.li`
    max-width: 440px;
    background-color:white;
    border-radius: 32px;
    padding: 48px 48px 0 48px;
    @media(max-width: 1630px) {
        max-width: 100%;
    }

   
`;

const Img = styled.img`
    @media(max-width: 1120px) {
        height: 120px;
    }
`;
const Title = styled.h4`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    margin-bottom: 126px;
    @media(max-width: 1120px) {
        margin-bottom: 66px;
    }

    @media(max-width: 724px) {
        font-size: 24px;
    }
`;

function Skills() {
  return (
    <Wrapper>
      <List>
        {allSkills.map(skill => (
          <Item key={skill.id}>
            <Title>{skill.title}</Title>
            <Img src={skill.icon}/>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}

export default Skills;