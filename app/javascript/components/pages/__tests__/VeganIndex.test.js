import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VeganIndex from "../VeganIndex";

Enzyme.configure({ adapter: new Adapter() });

describe("When VeganIndex renders", () => {
  let veg = [{
    title:"Vegan Pancakes"}]
    
  it("displays recipe", () => {
    const show = shallow(<VeganIndex vegan = {veg} />);
    const vegan = show.find("CardTitle");
    expect(vegan.length).toEqual(1);
  });
});