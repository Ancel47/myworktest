import { renderHook, waitFor } from "@testing-library/react";

import { act, TestWrapper } from "../../test";

import { useModalForm } from "./";

describe("useModalForm Hook", () => {
    it("should return correct initial value of 'visible'", async () => {
        const { result } = renderHook(() => useModalForm(), {
            wrapper: TestWrapper({}),
        });

        expect(result.current.modal.visible).toBe(false);
    });

    it("'visible' initial value should be set with 'defaultVisible'", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    refineCoreProps: {
                        resource: "posts",
                    },
                    modalProps: {
                        defaultVisible: true,
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        expect(result.current.modal.visible).toBe(true);
    });

    it("'visible' value should be false when 'close' is called", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    modalProps: {
                        defaultVisible: true,
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await act(async () => {
            result.current.modal.close();
        });

        expect(result.current.modal.visible).toBe(false);
    });

    it("'visible' value should be true when 'show' is called", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    refineCoreProps: {
                        id: "5",
                    },
                    modalProps: {
                        defaultVisible: false,
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await act(async () => {
            result.current.modal.show();
        });

        await waitFor(() => expect(result.current.modal.visible).toBe(true));
    });

    it("'visible' value should be false when 'show' is called without id", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    refineCoreProps: {
                        action: "edit",
                    },
                    modalProps: {
                        defaultVisible: false,
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await act(async () => {
            result.current.modal.show();
        });

        expect(result.current.modal.visible).toBe(false);
    });

    it("'id' should be updated when 'show' is called with 'id'", async () => {
        const { result } = renderHook(() => useModalForm(), {
            wrapper: TestWrapper({}),
        });

        const id = "5";

        await act(async () => {
            result.current.modal.show(id);
        });

        expect(result.current.refineCore.id).toBe(id);
    });

    it("'title' should be set with 'action' and 'resource'", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    refineCoreProps: {
                        resource: "test",
                        action: "edit",
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        expect(result.current.modal.title).toBe("Edit test");
    });

    it("when 'autoSubmitClose' is true, 'close' should be called when 'submit' is called", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    refineCoreProps: {
                        resource: "posts",
                    },
                    modalProps: {
                        autoSubmitClose: true,
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await act(async () => {
            result.current.modal.close();
            result.current.modal.submit({});
        });

        expect(result.current.modal.visible).toBe(false);
    });

    it("when 'autoSubmitClose' is false, 'close' should not be called when 'submit' is called", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    refineCoreProps: {
                        id: 5,
                        resource: "posts",
                    },
                    modalProps: {
                        autoSubmitClose: false,
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await act(async () => {
            result.current.modal.show();
        });
        await act(async () => {
            result.current.modal.submit({});
        });

        await waitFor(() => expect(result.current.modal.visible).toBe(true));
    });

    it("autoResetForm is true, 'reset' should be called when 'submit' is called", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    refineCoreProps: {
                        resource: "posts",
                        action: "create",
                    },
                    modalProps: {
                        autoResetForm: true,
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await act(async () => {
            result.current.modal.show();
            result.current.register("test");
            result.current.setValue("test", "test");
            result.current.modal.submit({ test: "test" });
        });

        await waitFor(() => result.current.refineCore.mutationResult.isSuccess);

        expect(result.current.getValues()).toStrictEqual({});
    });

    it("autoResetForm is false, 'reset' should not be called when 'submit' is called", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    refineCoreProps: {
                        resource: "posts",
                    },
                    modalProps: {
                        autoResetForm: false,
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await act(async () => {
            result.current.modal.show();
            result.current.register("test");
            result.current.setValue("test", "test");
            result.current.modal.submit({ test: "test" });
        });

        expect(result.current.getValues()).toStrictEqual({ test: "test" });
    });
});
