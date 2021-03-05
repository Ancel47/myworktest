import React from "react";

import { RichtextField } from "./";

import { render } from "@test";
describe("RichtextField", () => {
    it("renders content", () => {
        const { getByText } = render(<RichtextField value={`<b>test<b>`} />);

        console.log("get", getByText("test"));
        expect(getByText("test"));
    });
});
