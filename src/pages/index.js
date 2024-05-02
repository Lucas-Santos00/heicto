import DashBoardContainer from "@/components/DashBoardContainer/DashBoardContainer";
import TextArea from "@/components/TextArea/TextArea";
import OptionsProvider from "@/context/OptionsContext";
import BackGround from "@/components/BackGround/BackGround"

export default function Home() {
  return (
    <>
      <BackGround/>
      <OptionsProvider>
        <div id="container" >
          <DashBoardContainer idProps='dashBoard' />
          <TextArea/>
        </div>
        <div id="adarea"></div>
      </OptionsProvider>
    </>
  );
}
