import Header from 'Components/Header/Header';
import MainScreen from 'Components/MainScreen/MainScreen';
import Products from 'Components/Products/Products';
import Faq from 'Components/Faq/Faq';
import Skills from 'Components/Skills/Skills';
import Feedback from 'Components/Feedback/Feedback';
import Communication from 'Components/Communication/Communication';
import PrivacyPolicy from 'Components/PrivacyPolicy/PrivacyPolicy';


function App() {
  return (
    <>
      <Header/>
      <MainScreen/>
      <Products/>
      <Faq />
      <Skills/>
      <Feedback/>
      <Communication/>
      <PrivacyPolicy/>
    </>
  );
}

export default App;
