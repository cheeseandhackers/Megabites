import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../Home";
Enzyme.configure({ adapter: new Adapter() });

describe("When home renders", () => {
  it("Displays home header", () => {
    const home = shallow(<Home />);
    expect(home.find("h1").text()).toEqual("Welcome to Megabite");
  });
});
