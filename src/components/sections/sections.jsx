import {
  SwapContainer,
  TabDetails1,
  TabDetails,
  Details,
  Address,
  City,
  Country,
} from "./sections.styles";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./sections.css";

const Sections = () => {
  return (
    <SwapContainer>
      <Tabs defaultActiveKey="home" transition={false} className="cover">
        <Tab eventKey="home" title="about me">
          <TabDetails1>
            <Details>
              <Address>i am,</Address>
              <City>juliana,</City>
              <Country>ceo julie_shot_it</Country>
            </Details>
            <Details>
              <Address>i am an </Address>
              <City>ethusiastic photographer</City>
              <Country>with Lorem ipsum dolor sit,</Country>
            </Details>
            <Details>
              <Address>20A, ajoki street,</Address>
              <City>lagos,</City>
              <Country>nigeria</Country>
            </Details>
          </TabDetails1>
        </Tab>
        <Tab eventKey="second" title="profile" className="dark-tabs">
          <TabDetails>
            <Details>
              <Address>20A, ajoki street,</Address>
              <City>lagos,</City>
              <Country>nigeria</Country>
            </Details>
          </TabDetails>
        </Tab>
        <Tab eventKey="thirld" title="booking" className="dark-tabs">
          <TabDetails>
            <Details>
              <Address>20A, ajoki street,</Address>
              <City>lagos,</City>
              <Country>nigeria</Country>
            </Details>
          </TabDetails>
        </Tab>
      </Tabs>
    </SwapContainer>
  );
};

export default Sections;
