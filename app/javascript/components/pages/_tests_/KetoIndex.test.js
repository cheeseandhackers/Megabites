import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import KetoIndex from "../KetoIndex";

Enzyme.configure({ adapter: new Adapter() });

describe("When KetoIndex renders", () => {
  let ketob = [{
    title:"keto fat burger bombs"}]
    
  it("displays recipe", () => {
    const show = shallow(<KetoIndex keto = {ketob} />);
    const keto = show.find("CardTitle");
    expect(keto.length).toEqual(1);
  });
});