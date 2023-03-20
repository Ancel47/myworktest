import { renderHook, waitFor } from "@testing-library/react";

import { act, TestWrapper } from "@test";

import { useModalForm } from "./";

describe("useModalForm Hook", () => {
    it("should return correct initial value of 'open'", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    action: "create",
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        expect(result.current.modalProps.open).toBe(false);
    });

    it("'open' initial value should be set with 'defaultVisible'", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    action: "create",
                    defaultVisible: true,
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        expect(result.current.modalProps.open).toBe(true);
    });

    it("'open' value should be false when 'onCancel' is called", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    action: "edit",
                    defaultVisible: true,
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        expect(result.current.modalProps.open).toBe(true);

        await act(async () => {
            result.current.modalProps.onCancel?.({} as any);
        });

        expect(result.current.modalProps.open).toBe(false);
    });

    it("'open' value should be true when 'show' is called", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    action: "edit",
                    defaultVisible: false,
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        expect(result.current.modalProps.open).toBe(false);

        await act(async () => {
            result.current.show();
        });

        expect(result.current.modalProps.open).toBe(true);
    });

    it("'id' should be updated when 'show' is called with 'id'", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    action: "edit",
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        const id = "5";

        await act(async () => {
            result.current.show(id);
        });

        expect(result.current.id).toBe(id);
    });

    it("'title' should be set with 'action' and 'resource'", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    resource: "test",
                    action: "edit",
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        expect(result.current.modalProps.title).toBe("Edit test");
    });

    it("when 'autoSubmitClose' is true, the modal should be closed when 'submit' is called", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    action: "edit",
                    id: "1",
                    resource: "posts",
                    autoSubmitClose: true,
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await act(async () => {
            result.current.show();
            result.current.modalProps.onOk?.({} as any);
        });

        expect(result.current.modalProps.open).toBe(false);
    });

    it("when 'autoSubmitClose' is false, 'close' should not be called when 'submit' is called", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    action: "edit",
                    resource: "posts",
                    autoSubmitClose: false,
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await act(async () => {
            result.current.show();
            result.current.modalProps.onOk?.({} as any);
        });

        expect(result.current.modalProps.open).toBe(true);
    });

    it("autoResetForm is true, 'reset' should be called when the form is submitted", async () => {
        const { result } = renderHook(
            () =>
                useModalForm({
                    resource: "posts",
                    action: "edit",
                    autoResetForm: true,
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await act(async () => {
            result.current.show();
            result.current.formProps.form?.setFieldsValue({
                test: "test",
                foo: "bar",
            });
            result.current.modalProps.onOk?.({} as any);
        });

        await waitFor(() => result.current.mutationResult.isSuccess);

        expect(result.current.formProps.form?.getFieldsValue()).toStrictEqual(
            {},
        );
    });
});
