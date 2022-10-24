import Main from "./UI/Main";
import Header from "./components/Header";
import HeadingText from "./components/HeadingText";
import Categories from "./components/Categories";
import Presentation from "./components/Presentation";
import Work from "./components/Work";
import CallBooking from "./components/CallBooking";

function App() {
  return (
<Main>
  <Header style="" buttonStyle="bg-[#030303] hover:bg-[#755CDE] "/>
  <HeadingText />
  <Categories />
  <Presentation />
  <Work />
  <CallBooking />
  <Header style="mt-[42px] pb-[34px] sm:mt-[56px] sm:pb-[56px] lg:pb-[64px]"  buttonStyle="bg-[#030303] hover:bg-[#755CDE] "/>


</Main>
  );
}

export default App;
