import axios from "axios";
// import nock from "nock";

import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("getOne", () => {
    it("correct response", async () => {
        const response = await JsonServer(
            "https://readmin-fake-rest.pankod.com",
            axios,
        ).getOne("posts", 1);

        const { data } = response;

        expect(data.id).toBe(1);
        expect(data.title).toBe(
            "Deleniti et quasi architecto hic quam et tempora vero quo.",
        );
    });
});
