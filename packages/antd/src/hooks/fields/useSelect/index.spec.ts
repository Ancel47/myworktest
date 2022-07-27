import { renderHook, waitFor } from "@testing-library/react";

import { MockJSONServer, TestWrapper, act } from "@test";

import { useSelect } from "./";

describe("useSelect Hook", () => {
    it("default", async () => {
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await waitFor(() => {
            return !result.current.queryResult?.isLoading;
        });

        const { selectProps } = result.current;
        const { options } = selectProps;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
    });

    it("defaultValue", async () => {
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    defaultValue: ["1", "2", "3", "4"],
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await waitFor(() => {
            return !result.current.queryResult.isLoading;
        });

        const { selectProps } = result.current;
        const { options } = selectProps;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
    });

    it("defaultValue is not an array", async () => {
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    defaultValue: "1",
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await waitFor(() => {
            return !result.current.queryResult.isLoading;
        });

        const { selectProps } = result.current;
        const { options } = selectProps;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
    });

    it("should success data with resource with optionLabel and optionValue", async () => {
        const { result } = renderHook(
            () =>
                useSelect<{ id: string; slug: string }>({
                    resource: "posts",
                    optionLabel: "slug",
                    optionValue: "id",
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await waitFor(() => {
            return result.current.queryResult.isSuccess;
        });

        const { selectProps } = result.current;
        const { options } = selectProps;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            { label: "ut-ad-et", value: "1" },
            { label: "consequatur-molestiae-rerum", value: "2" },
        ]);
    });

    it("should success data with resource with filters", async () => {
        const { result } = renderHook(
            () =>
                useSelect<{ id: string; slug: string }>({
                    resource: "posts",
                    filters: [
                        {
                            field: "slug",
                            operator: "ncontains",
                            value: "test",
                        },
                    ],
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await waitFor(() => {
            return result.current.queryResult.isSuccess;
        });

        const { selectProps } = result.current;
        const { options } = selectProps;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
    });

    it("onSearch debounce with default value (300ms)", async () => {
        const getListMock = jest.fn(() =>
            Promise.resolve({ data: [], total: 0 }),
        );
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    debounce: 300,
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        ...MockJSONServer,
                        getList: getListMock,
                    },
                }),
            },
        );

        await waitFor(() => {
            return !result.current.queryResult?.isLoading;
        });

        expect(getListMock).toBeCalledTimes(1);

        const { selectProps } = result.current;

        act(() => {
            for (let index = 0; index < 10; index++) {
                selectProps!.onSearch!(index.toString());
            }
        });
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        await act(() => {});

        expect(getListMock).toBeCalledTimes(2);

        await waitFor(() => {
            return !result.current.queryResult?.isLoading;
        });
    });

    it("onSearch disabled debounce (0ms)", async () => {
        const getListMock = jest.fn(() => {
            return Promise.resolve({ data: [], total: 0 });
        });
        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    debounce: 0,
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: {
                        ...MockJSONServer,
                        getList: getListMock,
                    },
                }),
            },
        );

        await waitFor(() => {
            return !result.current.queryResult?.isLoading;
        });

        expect(getListMock).toBeCalledTimes(1);

        const { selectProps } = result.current;

        selectProps!.onSearch!("1");
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        await act(() => {});
        selectProps!.onSearch!("2");
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        await act(() => {});
        selectProps!.onSearch!("3");
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        await act(() => {});

        expect(getListMock).toBeCalledTimes(4);

        await waitFor(() => {
            return !result.current.queryResult?.isLoading;
        });
    });

    it("should invoke queryOptions methods successfully", async () => {
        const mockFunc = jest.fn();

        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    queryOptions: {
                        onSuccess: (data) => {
                            mockFunc();
                        },
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await waitFor(() => {
            return !result.current.queryResult?.isLoading;
        });

        const { selectProps } = result.current;
        const { options } = selectProps;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);

        expect(mockFunc).toBeCalled();
    });

    it("should invoke queryOptions methods for default value successfully", async () => {
        const mockFunc = jest.fn();

        const { result } = renderHook(
            () =>
                useSelect({
                    resource: "posts",
                    defaultValue: ["1", "2", "3", "4"],
                    defaultValueQueryOptions: {
                        onSuccess: (data) => {
                            mockFunc();
                        },
                    },
                }),
            {
                wrapper: TestWrapper({}),
            },
        );

        await waitFor(() => {
            return !result.current.queryResult.isLoading;
        });

        const { selectProps } = result.current;
        const { options } = selectProps;

        expect(options).toHaveLength(2);
        expect(options).toEqual([
            {
                label: "Necessitatibus necessitatibus id et cupiditate provident est qui amet.",
                value: "1",
            },
            { label: "Recusandae consectetur aut atque est.", value: "2" },
        ]);
        expect(mockFunc).toBeCalled();
    });
});
