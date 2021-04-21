import axios from "axios";

import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("create", () => {
    it("correct response", async () => {
        const response = await JsonServer(
            "https://readmin-fake-rest.pankod.com",
            axios,
        ).create("posts", {
            id: 1001,
            title: "foo",
            content: "bar",
        });

        const { data } = response;

        expect(data["id"]).toBe(1001);
        expect(data["title"]).toBe("foo");
        expect(data["content"]).toBe("bar");
    });
});
