import type { BaseRecord, DataProvider } from "@refinedev/core";
import type { Client } from "@urql/core";
import { isMutation } from "../utils";
import { defaultOptions, type GraphQLDataProviderOptions } from "./options";

const dataProvider = (
  client: Client,
  options: GraphQLDataProviderOptions = defaultOptions,
): Required<DataProvider> => {
  return {
    create: async (params) => {
      const { meta } = params;

      const gqlOperation = meta?.gqlMutation ?? meta?.gqlQuery;

      if (!gqlOperation) {
        throw new Error("Operation is required.");
      }

      const response = await client
        .mutation(gqlOperation, options.create.buildVariables(params))
        .toPromise();

      const data = options.create.dataMapper(response, params);

      return {
        data,
      };
    },
    createMany: async (params) => {
      const { meta } = params;

      const gqlOperation = meta?.gqlMutation ?? meta?.gqlQuery;

      if (!gqlOperation) {
        throw new Error("Operation is required.");
      }

      const response = await client.mutation<BaseRecord>(
        gqlOperation,
        options.createMany.buildVariables(params),
      );

      return {
        data: options.createMany.dataMapper(response, params),
      };
    },
    getOne: async (params) => {
      const { id, meta } = params;

      const gqlOperation = meta?.gqlQuery ?? meta?.gqlMutation;

      if (!gqlOperation) {
        throw new Error("Operation is required.");
      }

      let query = gqlOperation;

      if (isMutation(gqlOperation)) {
        query = options.getOne.convertMutationToQuery(params);
      }

      const response = await client
        .query(query, options.getOne.buildVariables(params))
        .toPromise();

      return {
        data: options.getOne.dataMapper(response, params),
      };
    },
    getList: async (params) => {
      const { meta } = params;

      if (!meta?.gqlQuery) {
        throw new Error("Operation is required.");
      }

      const paging = options.getList.buildPagination(params);
      const sorting = options.getList.buildSorters(params);
      const filter = options.getList.buildFilters(params);

      const response = await client
        .query(meta.gqlQuery, {
          sorting,
          filter,
          paging,
          ...meta?.variables,
        })
        .toPromise();

      return {
        data: options.getList.dataMapper(response, params),
        total: options.getList.countMapper(response, params),
      };
    },
    getMany: async (params) => {
      const { meta } = params;

      if (!meta?.gqlQuery) {
        throw new Error("Operation is required.");
      }

      const response = await client
        .query(meta.gqlQuery, { filter: options.getMany.buildFilter(params) })
        .toPromise();

      return {
        data: options.getMany.dataMapper(response, params),
      };
    },
    update: async (params) => {
      const { meta } = params;
      const gqlOperation = meta?.gqlMutation ?? meta?.gqlQuery;

      if (!gqlOperation) {
        throw new Error("Operation is required.");
      }

      const response = await client
        .mutation(gqlOperation, options.update.buildVariables(params))
        .toPromise();

      return {
        data: options.update.dataMapper(response, params),
      };
    },
    updateMany: async (params) => {
      const { meta } = params;

      if (!meta?.gqlMutation) {
        throw new Error("Operation is required.");
      }

      const response = await client
        .mutation(meta.gqlMutation, options.updateMany.buildVariables(params))
        .toPromise();

      return { data: [options.updateMany.dataMapper(response, params)] };
    },
    deleteOne: async (params) => {
      const { meta } = params;

      if (!meta?.gqlMutation) {
        throw new Error("Operation is required.");
      }

      const response = await client
        .mutation(meta.gqlMutation, options.deleteOne.buildVariables(params))
        .toPromise();

      return {
        data: options.deleteOne.dataMapper(response, params),
      };
    },
    deleteMany: async (params) => {
      const { meta } = params;

      if (!meta?.gqlMutation) {
        throw new Error("Operation is required.");
      }

      const response = await client
        .mutation(meta.gqlMutation, options.deleteMany.buildVariables(params))
        .toPromise();

      return {
        data: [options.deleteMany.dataMapper(response, params)],
      };
    },
    custom: async ({ url, meta }) => {
      if (meta?.gqlMutation) {
        const response = await client
          .mutation(meta.gqlMutation, meta?.variables ?? {}, { url })
          .toPromise();

        return { data: response.data };
      }

      if (meta?.gqlQuery) {
        const response = await client
          .query(meta.gqlQuery, meta?.variables ?? {}, { url })
          .toPromise();

        return { data: response.data };
      }

      return { data: {} };
    },
    getApiUrl: () => {
      throw Error("Not implemented on refine-graphql data provider.");
    },
  };
};

export default dataProvider;
