import { RcFile, UploadFile } from "antd/lib/upload/interface";
import { TestWrapper, MockJSONServer } from "@test";
import { renderHook } from "@testing-library/react-hooks";
import * as papaparse from "papaparse";

import { useImport } from ".";
import { act } from "react-dom/test-utils";
import { HttpError, IDataContext } from "src/interfaces";

jest.mock("papaparse", () => {
    return {
        parse: jest.fn(jest.requireActual("papaparse").parse),
    };
});

const file = new File(
    [
        `"id","title","createdAt","updatedAt"
"35ad97dd-9379-480a-b6ac-6fc9c13e9224","Viral Strategist Local","2021-04-09T12:03:23.933Z","2021-04-09T12:03:23.933Z"
"9a428977-1b03-4c3e-8cdd-1e4e2813528a","Concrete Soap Neural","2021-04-09T12:03:23.835Z","2021-04-09T12:03:23.835Z"
"1a428977-1b03-4c3e-8cdd-1e4e281e9224","Strategist Soap Viral","2021-03-09T12:12:23.933Z","2021-03-09T12:12:23.933Z"`,
    ],
    "data.csv",
    { type: "text/csv" },
);

const parsedData = [
    {
        id: "35ad97dd-9379-480a-b6ac-6fc9c13e9224",
        title: "Viral Strategist Local",
        createdAt: "2021-04-09T12:03:23.933Z",
        updatedAt: "2021-04-09T12:03:23.933Z",
    },
    {
        id: "9a428977-1b03-4c3e-8cdd-1e4e2813528a",
        title: "Concrete Soap Neural",
        createdAt: "2021-04-09T12:03:23.835Z",
        updatedAt: "2021-04-09T12:03:23.835Z",
    },
    {
        id: "1a428977-1b03-4c3e-8cdd-1e4e281e9224",
        title: "Strategist Soap Viral",
        createdAt: "2021-03-09T12:12:23.933Z",
        updatedAt: "2021-03-09T12:12:23.933Z",
    },
];

afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
});

describe("useImport hook", () => {
    it("should render hook without crashing", () => {
        const result = renderHook(() => useImport(), {
            wrapper: TestWrapper({
                dataProvider: MockJSONServer,
                resources: [{ name: "posts" }],
            }),
        });

        expect(result).toBeTruthy();
    });

    it("should trigger parse", async (done) => {
        const { result } = renderHook(
            () =>
                useImport({
                    onFinish: () => {
                        expect(papaparse.parse).toHaveBeenCalled();
                        done();
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await act(async () => {
            jest.useFakeTimers();

            await result.current.uploadProps.onChange?.({
                fileList: [],
                file: file as unknown as UploadFile,
            });

            jest.runAllTimers();
        });
    });

    it("should call mutate method of result of useCreateMany one time with correct values if batchSize=null", async () => {
        const mockDataProvider = {
            ...MockJSONServer,
            createMany: jest.fn(),
        } as IDataContext;

        jest.useFakeTimers();

        const { result } = renderHook(
            () =>
                useImport({
                    batchSize: undefined,
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: mockDataProvider,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await act(async () => {
            await result.current.uploadProps.onChange?.({
                fileList: [],
                file: file as unknown as UploadFile,
            });

            jest.runAllTimers();
        });
    });

    it("should call mutate method of result of useCreate many times with correct values if batchSize is 1", async (done) => {
        const mockDataProvider = {
            ...MockJSONServer,
            create: jest.fn(),
        } as IDataContext;

        const { result } = renderHook(
            () =>
                useImport({
                    batchSize: 1,
                    onFinish: () => {
                        expect(mockDataProvider.create).toHaveBeenCalledWith(
                            "posts",
                            parsedData[0],
                        );
                        expect(mockDataProvider.create).toHaveBeenCalledWith(
                            "posts",
                            parsedData[1],
                        );
                        expect(mockDataProvider.create).toHaveBeenCalledWith(
                            "posts",
                            parsedData[2],
                        );
                        done();
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: mockDataProvider,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await act(async () => {
            jest.useFakeTimers();

            await result.current.uploadProps.onChange?.({
                fileList: [],
                file: file as unknown as UploadFile,
            });

            jest.runAllTimers();
        });
    });

    it("should call mutate method of result of useCreateMany many times with correct values in if batchSize is 2", async (done) => {
        const mockDataProvider = {
            ...MockJSONServer,
            createMany: jest.fn(),
        } as IDataContext;

        const { result } = renderHook(
            () =>
                useImport({
                    batchSize: 2,
                    onFinish: () => {
                        expect(
                            mockDataProvider.createMany,
                        ).toHaveBeenCalledWith(
                            "posts",
                            [parsedData[0], parsedData[1]].map(
                                (parsedData) => ({
                                    ...parsedData,
                                }),
                            ),
                        );

                        expect(
                            mockDataProvider.createMany,
                        ).toHaveBeenCalledWith(
                            "posts",
                            [parsedData[0], parsedData[1]].map(
                                (parsedData) => ({
                                    ...parsedData,
                                }),
                            ),
                        );

                        done();
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: mockDataProvider,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await act(async () => {
            jest.useFakeTimers();

            await result.current.uploadProps.onChange?.({
                fileList: [],
                file: file as unknown as UploadFile,
            });

            jest.runAllTimers();
        });
    });

    it("should map data successfully before it uploads to server", async (done) => {
        const mockDataProvider = {
            ...MockJSONServer,
            createMany: jest.fn(),
        } as IDataContext;

        const { result } = renderHook(
            () =>
                useImport({
                    batchSize: undefined,
                    mapData: (data) => ({
                        id: data.id,
                        newTitle: data.title,
                    }),
                    onFinish: () => {
                        expect(
                            mockDataProvider.createMany,
                        ).toHaveBeenCalledWith(
                            "posts",
                            parsedData.map((parsedData) => ({
                                id: parsedData.id,
                                newTitle: parsedData.title,
                            })),
                        );
                        done();
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: mockDataProvider,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await act(async () => {
            jest.useFakeTimers();

            await result.current.uploadProps.onChange?.({
                fileList: [],
                file: file as unknown as UploadFile,
            });

            jest.runAllTimers();
        });
    });

    it("should send request for the specified resource", async (done) => {
        const mockDataProvider = {
            ...MockJSONServer,
            createMany: jest.fn(),
        } as IDataContext;

        const { result } = renderHook(
            () =>
                useImport({
                    batchSize: undefined,
                    resourceName: "tests",
                    onFinish: () => {
                        expect(
                            mockDataProvider.createMany,
                        ).toHaveBeenCalledWith(
                            "tests",
                            parsedData.map((parsedData) => ({
                                ...parsedData,
                            })),
                        );
                        done();
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: mockDataProvider,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await act(async () => {
            jest.useFakeTimers();

            await result.current.uploadProps.onChange?.({
                fileList: [],
                file: file as unknown as UploadFile,
            });

            jest.runAllTimers();
        });
    });

    it("should return false from uploadProps.beforeUpload callback", () => {
        const { result } = renderHook(
            () =>
                useImport({
                    batchSize: undefined,
                    resourceName: "tests",
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: MockJSONServer,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        const beforeUploadResult = result.current.uploadProps.beforeUpload?.(
            file as unknown as RcFile,
            [],
        );

        expect(beforeUploadResult).toBe(false);
    });

    it("should give successes in onFinish callback if batchSize=null", async (done) => {
        const mockDataProvider = {
            ...MockJSONServer,
            createMany: jest.fn(async () => {
                return {
                    data: parsedData,
                };
            }),
        } as IDataContext;

        const { result } = renderHook(
            () =>
                useImport({
                    batchSize: undefined,
                    resourceName: "tests",
                    onFinish: ({ succeeded }) => {
                        expect(succeeded[0].request).toEqual(parsedData);
                        done();
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: mockDataProvider,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await act(async () => {
            jest.useFakeTimers();

            await result.current.uploadProps.onChange?.({
                fileList: [],
                file: file as unknown as UploadFile,
            });

            jest.runAllTimers();
        });
    });

    it("should give errors in onFinish callback if batchSize=null", async (done) => {
        const mockDataProvider = {
            ...MockJSONServer,
            createMany: () => {
                const customError: HttpError = {
                    message: "bir şey oldu",
                    statusCode: 500,
                };

                return Promise.reject(customError);
            },
        } as IDataContext;

        const { result } = renderHook(
            () =>
                useImport({
                    batchSize: undefined,
                    resourceName: "posts",
                    onFinish: ({ succeeded, errored }) => {
                        expect(errored[0].response[0]).toEqual({
                            message: "bir şey oldu",
                            statusCode: 500,
                        });
                        done();
                    },
                }),
            {
                wrapper: TestWrapper({
                    dataProvider: mockDataProvider,
                    resources: [{ name: "posts" }],
                }),
            },
        );

        await act(async () => {
            jest.useFakeTimers();

            await result.current.uploadProps.onChange?.({
                fileList: [],
                file: file as unknown as UploadFile,
            });

            jest.runAllTimers();
        });
    });
});
