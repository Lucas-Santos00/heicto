import DashBoardContainer from "@/components/DashBoardContainer/DashBoardContainer";
import TextArea from "@/components/TextArea/TextArea";
import OptionsProvider from "@/context/OptionsContext";

export default function Home() {
  return (
    <>
      <OptionsProvider>
        <div id="container" >
          <DashBoardContainer idProps='dashBoard' />
          <TextArea/>
        </div>
        <div id="adarea" ></div>
      </OptionsProvider>
    </>
  );
}
