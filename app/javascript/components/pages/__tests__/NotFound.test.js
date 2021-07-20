import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "../NotFound"
Enzyme.configure({ adapter: new Adapter() });

describe("When NotFound renders", () => {
  it("Displays NotFound image", () => {
    const notfound = shallow(<NotFound />);
    expect(notfound.find("img").prop("src")).toEqual("");
  });
});