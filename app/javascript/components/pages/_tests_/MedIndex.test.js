import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MedIndex from "../MedIndex";

Enzyme.configure({ adapter: new Adapter() });

describe("When MedIndex renders", () => {
  let medb = [{
    title:"Wilted Spinach"}]
    
  it("displays recipe", () => {
    const show = shallow(<MedIndex med = {medb} />);
    const med = show.find("CardTitle");
    expect(med.length).toEqual(1);
  });
});