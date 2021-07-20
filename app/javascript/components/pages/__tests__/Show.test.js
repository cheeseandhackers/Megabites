import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RecipeShow from "../RecipeShow";

Enzyme.configure({ adapter: new Adapter() });

describe("When Show renders", () => {
  let recipe = {
    title:"keto fat burger bombs"

  }
  it("displays recipe", () => {
    const show = shallow(<RecipeShow recipe = {recipe} />);
    const showPage = show.find("CardTitle");
    expect(showPage.length).toEqual(1);
  });
});
