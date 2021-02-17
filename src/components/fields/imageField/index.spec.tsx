import React from "react";

import { ImageField } from "./";

import { render } from "@test";
describe("ImageField", () => {
    it("renders image with correct title", () => {
        const imageUrl = "http://placeimg.com/640/480/animals";
        const { getByTestId } = render(
            <ImageField
                record={{ id: 1, url: imageUrl }}
                source="url"
                data-testid="test-image"
            />,
        );

        expect(getByTestId("test-image").children[0]).toHaveProperty(
            "src",
            imageUrl,
        );
    });
});
