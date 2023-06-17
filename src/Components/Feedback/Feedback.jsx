import { Accordion, AccordionItem } from '@szhsin/react-accordion';

import styled from 'styled-components';
import arrow from './arrow.svg';
const Wrapper = styled.section`
  margin: 32px;

  @media(max-width: 550px) {
    margin: 32px 5px 0 5px;
  }
`;


const feedbacks = [
  {
    name: 'Владислав Лапич',
    project: 'lv productions',
    review: `Я очень доволен работой Владимира, 
      который переделал сайт 
      для моего видео продакшен 
      бизнеса и исправил ошибки, допущенные предыдущим 
      веб-разработчиком. Новый дизайн сайта выглядит 
      красиво и функционально. Он легко навигируется и 
      обеспечивает удобный пользовательский опыт. 
      Владимир проявил профессионализм и творческий 
      подход в работе. Он понимал наши потребности и 
      смог создать сайт, отвечающий всем нашим требованиям. 
      Кроме того, он был вежлив и всегда готов был ответить 
      на все наши вопросы. Владимир провел отличную работу и я 
      рекомендую его всем, кто ищет качественный дизайн сайта и 
      профессиональный подход к работе.`,
  },
  {
    name: 'Егор Кузнецов',
    project: 'senkotech',
    review: `Работа сделана очень хорошо, правки также делаются с согласованием заказчика. Очень нравится, 
    если есть проблема, то дизайнер постарается 
    предложить несколько решений по устранению проблем, если как таковые существуют.`,
  },
  {
    name: 'Глеб Сибирев',
    project: 'bike components',
    review: `Работает - быстро, делает - качественно, 
    и всё это за вменяемый прайс. Очень рекомендую!`,
  },
  {
    name: 'Роман Бондарев',
    project: 'HXFer',
    review: `Обложки очень достойные, вариантов много, 
    на все цвета и вкусы. Однозначно рекомендую данного человека, буду пользоваться его услугами еще.`,
  },
];

const Name = styled.h4`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  margin-right: 16px;

  @media (max-width: 610px) {
        font-size: 14px;
  }
  `;
const Project = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    text-transform: lowercase;
    border: 1px solid black;
    border-radius: 32px;
    padding: 8px 16px;

    @media (max-width: 610px) {
        font-size: 9px;
        padding: 5px 9px;
  }
  `;

const Img = styled.img`
`;

const Head = styled.div`
    background-color: white;
    padding: 64px;
    margin-bottom: 32px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 660px) {
        flex-direction: column;
        padding: 32px;
        text-align: center;
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
        text-align: center;
        margin-top: 10px;
    }
`;
function Feedback() {

  return (
    <Wrapper id="feedbacks">
      <Head>
        <Title>Отзывы</Title>
        <SubTitle>Мои клиенты — моя гордость <br></br>
        И вот, что они говорят о работе со мной</SubTitle>
      </Head>


      <Accordion transition transitionTimeout={100}>
        {feedbacks.map((feedback) => (
          <AccordionItem key={feedback.name + feedback.project} header={
            <div className="accWrapper">
              <div className="head">
                <Name>
                  {feedback.name}
                </Name>
                <Project>
                  {feedback.project}
                </Project>
              </div>
              <div>
                <Img src={arrow}/>
              </div>
            </div>
          }>
            {feedback.review}
          </AccordionItem>
        ))}
      </Accordion>
    </Wrapper>
  );
}

export default Feedback;