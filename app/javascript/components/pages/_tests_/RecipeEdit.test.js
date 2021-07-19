import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RecipeEdit from "../RecipeEdit";
Enzyme.configure({ adapter: new Adapter() });

describe("When edit renders", () => {
  it("Displays edit", () => {
    const edit = shallow(<RecipeEdit />);
    expect(edit.find("h1").text()).toEqual("Hello World.");
  });
});