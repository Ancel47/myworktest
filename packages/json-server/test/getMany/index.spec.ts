import axios from "axios";
// import nock from "nock";

import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("getMany", () => {
    it("correct response", async () => {
        const response = await JsonServer(
            "https://readmin-fake-rest.pankod.com",
            axios,
        ).getMany("posts", [1, 2, 3]);

        const { data } = response;

        expect(data[0]["id"]).toBe(1);
        expect(data[1]["id"]).toBe(2);
        expect(data[2]["id"]).toBe(3);
        expect(response.data.length).toBe(3);
    });
});
