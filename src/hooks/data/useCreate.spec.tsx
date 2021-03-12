import { renderHook } from "@testing-library/react-hooks";

import { MockJSONServer, TestWrapper } from "@test";

import { useCreate } from "./useCreate";

describe("useCreate Hook", () => {
    it("with rest json server", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useCreate(), {
            wrapper: TestWrapper({
                dataProvider: MockJSONServer,
                resources: [{ name: "posts" }],
            }),
        });

        result.current.mutate({ resource: "posts", values: { id: 1 } });
        await waitForNextUpdate();

        expect(result.current.isLoading).toBeTruthy();
    });
});
