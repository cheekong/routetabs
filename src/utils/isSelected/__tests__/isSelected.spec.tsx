import { isSelected } from "../isSelected";

describe("isSelected", () => {
  it("returns true when arguments are correctly passed in", () => {
    expect(isSelected("/test/test1/test2/test3", "test3")).toBeTruthy();
    expect(isSelected("test", "test")).toBeTruthy();
  });

  it("returns false when arguments are incorrectly passed in", () => {
    expect(isSelected("/test/test1/test2/test3", "potato")).toBeFalsy();
    expect(isSelected("/test/test1/test2/test3", "tes")).toBeFalsy();
    expect(isSelected("test", "test1")).toBeFalsy();
    expect(isSelected("te/st", "test")).toBeFalsy();
  });
});
