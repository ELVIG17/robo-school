import { Header } from "./components/Header";
import { Elementary } from "./components/Elementary";
import { Discription } from "./components/Discription";
import { ResultOfSchool } from "./components/ResultsOfSchool";
import { Treners } from "./components/Treners";
import { ChoiceOfPocket } from "./components/ChoiceOfPocket";
import { Anket } from "./components/Anket";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Elementary />
      <Discription />
      <ResultOfSchool />
      <Treners />
      <ChoiceOfPocket />
      <Anket />
      <Footer />
    </div>
  );
}
export default App;
