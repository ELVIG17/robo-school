import { Header } from "../../modules/HeaderModule";
import { Elementary } from "../../modules/ElementaryModule";
import { Description } from "../../modules/DescriptionModule";
import { ResultOfSchool } from "../../modules/ResultsOfSchoolModule";
import { Treners } from "../../modules/TrenersModule";
import { ChoiceOfPocket } from "../../modules/ChoiceOfPocketModule";
import { Footer } from "../../modules/FooterModule";
import { Anket } from "../../modules/AnketModule";

export const HomePage = () => {
  console.log("ПРОВЕРКА:");
  console.log("Header:", Header);
  console.log("Elementary:", Elementary);
  console.log("Description:", Description);
  console.log("ResultOfSchool:", ResultOfSchool);
  console.log("Treners:", Treners);
  console.log("ChoiceOfPocket:", ChoiceOfPocket);
  console.log("Anket:", Anket);
  console.log("Footer:", Footer);
  return (
    <>
      <Header />
      <Elementary />
      <Description />
      <ResultOfSchool />
      <Treners />
      <ChoiceOfPocket />
      <Anket />
      <Footer />
    </>
  );
};
