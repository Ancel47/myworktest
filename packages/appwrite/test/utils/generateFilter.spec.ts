import { Query } from "appwrite";
import { generateFilter } from "../../src/utils";
import type { CrudFilter } from "@refinedev/core";

describe("generateFilter", () => {
  it("should generate filter based on the specified operator", () => {
    const testCases: { filter: CrudFilter; expected: any }[] = [
      {
        filter: { operator: "eq", field: "name", value: "John" },
        expected: Query.equal("name", "John"),
      },
      {
        filter: { operator: "ne", field: "name", value: "John" },
        expected: Query.notEqual("name", "John"),
      },
      {
        filter: { operator: "gt", field: "age", value: 25 },
        expected: Query.greaterThan("age", 25),
      },
      {
        filter: { operator: "gte", field: "age", value: 25 },
        expected: Query.greaterThanEqual("age", 25),
      },
      {
        filter: { operator: "lt", field: "age", value: 25 },
        expected: Query.lessThan("age", 25),
      },
      {
        filter: { operator: "lte", field: "age", value: 25 },
        expected: Query.lessThanEqual("age", 25),
      },
      {
        filter: { operator: "contains", field: "name", value: "John" },
        expected: Query.search("name", "%John%"),
      },
      {
        filter: { operator: "between", field: "age", value: [0, 64] },
        expected: Query.between("age", 0, 64),
      },
      {
        filter: { operator: "null", field: "name", value: undefined },
        expected: Query.isNull("name"),
      },
      {
        filter: { operator: "nnull", field: "name", value: undefined },
        expected: Query.isNotNull("name"),
      },
      {
        filter: { operator: "startswith", field: "name", value: "John" },
        expected: Query.startsWith("name", "John"),
      },
      {
        filter: { operator: "endswith", field: "name", value: "John" },
        expected: Query.endsWith("name", "John"),
      },
      {
        filter: {
          operator: "or",
          value: [
            {
              operator: "eq",
              field: "name",
              value: "John",
            },
            {
              operator: "lt",
              field: "age",
              value: 30,
            },
          ],
        },
        expected: Query.or([
          Query.equal("name", "John"),
          Query.lessThan("age", 30),
        ]),
      },
      {
        filter: {
          operator: "or",
          value: [
            {
              operator: "eq",
              field: "name",
              value: "John",
            },
          ],
        },
        expected: Query.equal("name", "John"),
      },
      {
        filter: {
          operator: "and",
          value: [
            {
              operator: "eq",
              field: "name",
              value: "John",
            },
          ],
        },
        expected: Query.equal("name", "John"),
      },
    ];

    testCases.forEach(({ filter, expected }) => {
      const result = generateFilter(filter);
      expect(result).toEqual(expected);
    });
  });

  it("should throw an error when value array has only one element for 'between' operator", () => {
    const filter = {
      operator: "between",
      field: "age",
      value: [0],
    } as CrudFilter;

    expect(() => generateFilter(filter)).toThrowError(
      'Value array must contain exactly two elements for "between" operator',
    );
  });

  it("should throw an error for unsupported operator", () => {
    const filter = {
      operator: "unsupported",
      field: "name",
      value: "John",
    };
    expect(() => generateFilter(filter as any)).toThrowError(
      `Operator ${filter.operator} is not supported`,
    );
  });
});
