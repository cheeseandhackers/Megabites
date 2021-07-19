import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AboutUs from "../AboutUs";

Enzyme.configure({ adapter: new Adapter() });

describe("When AboutUs renders", () => {
  it("displays about us", () => {
    const about = shallow(<AboutUs />);
    expect(about.find("h2").text()).toEqual("About the Cheese and Hackers Team");
  });
});