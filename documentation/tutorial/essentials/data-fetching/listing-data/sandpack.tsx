import React from "react";
import { TutorialSandpack } from "@site/src/refine-theme/tutorial-sandpack";
import { useSandpack } from "@codesandbox/sandpack-react";
import { TutorialUpdateFileButton } from "@site/src/refine-theme/tutorial-update-file-button";
import { TutorialCreateFileButton } from "@site/src/refine-theme/tutorial-create-file-button";

export const Sandpack = ({ children }: { children: React.ReactNode }) => {
    return (
        <TutorialSandpack
            contentPercentage={50}
            dependencies={{
                "@refinedev/core": "latest",
            }}
            files={{
                "App.tsx": {
                    code: AppTsxCode,
                },
                "data-provider.ts": {
                    code: DataProviderTsCode,
                },
                "show-product.tsx": {
                    code: ShowProductTsxCode,
                    hidden: true,
                },
                "edit-product.tsx": {
                    code: EditProductTsxCode,
                    hidden: true,
                },
            }}
            finalFiles={{
                "App.tsx": {
                    code: AppTsxWithListProductsCode,
                },
                "data-provider.ts": {
                    code: DataProviderWithFilteringTsCode,
                },
                "show-product.tsx": {
                    code: ShowProductTsxCode,
                    hidden: true,
                },
                "edit-product.tsx": {
                    code: EditProductTsxCode,
                    hidden: true,
                },
                "list-products.tsx": {
                    code: ListProductsWithFilteringTsxCode,
                },
            }}
        >
            {children}
        </TutorialSandpack>
    );
};

const AppTsxCode = /* tsx */ `
import { Refine } from "@refinedev/core";

import { dataProvider } from "./data-provider";
import { ShowProduct } from "./show-product";
import { EditProduct } from "./edit-product";

export default function App(): JSX.Element {
  return (
    <Refine dataProvider={dataProvider}>
        {/* <ShowProduct /> */}
        <EditProduct />
    </Refine>
  );
}
`.trim();

const DataProviderTsCode = /* ts */ `
import type { DataProvider } from "@refinedev/core";

const API_URL = "https://api.fake-rest.refine.dev";

export const dataProvider: DataProvider = {
  getOne: async ({ resource, id, meta }) => {
    const response = await fetch(\`\${API_URL}/\${resource}/\${id}\`);
    const data = await response.json();

    return { data };
  },
  update: async ({ resource, id, variables }) => {
    const response = await fetch(\`\${API_URL}/\${resource}/\${id}\`, {
      method: "PATCH",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return { data };
  },
  getList: () => { throw new Error("Not implemented"); },
  create: () => { throw new Error("Not implemented"); },
  deleteOne: () => { throw new Error("Not implemented"); },
  /* ... */
};
`.trim();

const ShowProductTsxCode = /* tsx */ `
import { useOne } from "@refinedev/core";

export const ShowProduct = () => {
    const { data, isLoading } = useOne({ resource: "products", id: 123 });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <div>Product name: {data?.data.name}</div>;
};
`.trim();

const EditProductTsxCode = /* tsx */ `
import { useOne, useUpdate } from "@refinedev/core";

export const EditProduct = () => {
  const { data, isLoading } = useOne({ resource: "products", id: 123 });
  const { mutate, isLoading: isUpdating } = useUpdate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const updatePrice = async () => {
    await mutate({
      resource: "products",
      id: 123,
      values: {
        price: Math.floor(Math.random() * 100),
      },
    });
  };

  return (
    <div>
      <div>Product name: {data?.data.name}</div>
      <div>Product price: \${data?.data.price}</div>
      <button onClick={updatePrice}>Update Price</button>
    </div>
  );
};
`.trim();

const DataProviderWithGetListMethodTsCode = /* ts */ `
import type { DataProvider } from "@refinedev/core";

const API_URL = "https://api.fake-rest.refine.dev";

export const dataProvider: DataProvider = {
  getList: async ({ resource, pagination, filters, sorters, meta }) => {
    const response = await fetch(\`\${API_URL}/\${resource}\`);
    const data = await response.json();

    return {
      data,
      total: 0, // We'll cover this in the next steps.
    };
  },
  getOne: async ({ resource, id, meta }) => {
    const response = await fetch(\`\${API_URL}/\${resource}/\${id}\`);
    const data = await response.json();

    return { data };
  },
  update: async ({ resource, id, variables }) => {
    const response = await fetch(\`\${API_URL}/\${resource}/\${id}\`, {
      method: "PATCH",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return { data };
  },
  /* ... */
};
`.trim();

const DataProviderWithPaginationTsCode = /* ts */ `
import type { DataProvider } from "@refinedev/core";

const API_URL = "https://api.fake-rest.refine.dev";

export const dataProvider: DataProvider = {
  getList: async ({ resource, pagination, filters, sorters, meta }) => {
    const params = new URLSearchParams();

    if (pagination) {
        params.append("_start", (pagination.current - 1) * pagination.pageSize);
        params.append("_end", pagination.current * pagination.pageSize);
    }

    const response = await fetch(\`\${API_URL}/\${resource}?\${params.toString()}\`);
    const data = await response.json();

    return {
      data,
      total: 0, // We'll cover this in the next steps.
    };
  },
  getOne: async ({ resource, id, meta }) => {
    const response = await fetch(\`\${API_URL}/\${resource}/\${id}\`);
    const data = await response.json();

    return { data };
  },
  update: async ({ resource, id, variables }) => {
    const response = await fetch(\`\${API_URL}/\${resource}/\${id}\`, {
      method: "PATCH",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return { data };
  },
  /* ... */
};
`.trim();

const DataProviderWithSortingTsCode = /* ts */ `
import type { DataProvider } from "@refinedev/core";

const API_URL = "https://api.fake-rest.refine.dev";

export const dataProvider: DataProvider = {
  getList: async ({ resource, pagination, filters, sorters, meta }) => {
    const params = new URLSearchParams();

    if (pagination) {
      params.append("_start", (pagination.current - 1) * pagination.pageSize);
      params.append("_end", pagination.current * pagination.pageSize);
    }

    if (sorters && sorters.length > 0) {
      params.append("_sort", sorters.map((sorter) => sorter.field).join(","));
      params.append("_order", sorters.map((sorter) => sorter.order).join(","));
    }

    const response = await fetch(\`\${API_URL}/\${resource}?\${params.toString()}\`);
    const data = await response.json();

    return {
      data,
      total: 0, // We'll cover this in the next steps.
    };
  },
  getOne: async ({ resource, id, meta }) => {
    const response = await fetch(\`\${API_URL}/\${resource}/\${id}\`);
    const data = await response.json();

    return { data };
  },
  update: async ({ resource, id, variables }) => {
    const response = await fetch(\`\${API_URL}/\${resource}/\${id}\`, {
      method: "PATCH",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return { data };
  },
  /* ... */
};
`.trim();

const DataProviderWithFilteringTsCode = /* ts */ `
import type { DataProvider } from "@refinedev/core";

const API_URL = "https://api.fake-rest.refine.dev";

export const dataProvider: DataProvider = {
  getList: async ({ resource, pagination, filters, sorters, meta }) => {
    const params = new URLSearchParams();

    if (pagination) {
      params.append("_start", (pagination.current - 1) * pagination.pageSize);
      params.append("_end", pagination.current * pagination.pageSize);
    }

    if (sorters && sorters.length > 0) {
      params.append("_sort", sorters.map((sorter) => sorter.field).join(","));
      params.append("_order", sorters.map((sorter) => sorter.order).join(","));
    }

    if (filters && filters.length > 0) {
      filters.forEach((filter) => {
        if ("field" in filter && filter.operator === "eq") {
          // Our fake API supports "eq" operator by simply appending the field name and value to the query string.
          params.append(filter.field, filter.value);
        }
      });
    }

    const response = await fetch(\`\${API_URL}/\${resource}?\${params.toString()}\`);
    const data = await response.json();

    return {
      data,
      total: 0, // We'll cover this in the next steps.
    };
  },
  getOne: async ({ resource, id, meta }) => {
    const response = await fetch(\`\${API_URL}/\${resource}/\${id}\`);
    const data = await response.json();

    return { data };
  },
  update: async ({ resource, id, variables }) => {
    const response = await fetch(\`\${API_URL}/\${resource}/\${id}\`, {
      method: "PATCH",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return { data };
  },
  /* ... */
};
`.trim();

const BaseListProductsTsxCode = /* tsx */ `
export const ListProducts = () => {
  return (
    <div>
        <h1>Products</h1>
    </div>
  );
};
`.trim();

const ListProductsWithUseListTsxCode = /* tsx */ `
import { useList } from "@refinedev/core";

export const ListProducts = () => {
  const { data, isLoading } = useList({ resource: "products" });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data?.data?.map((product) => (
          <li key={product.id}>
            <p>
              {product.name}
              <br />
              Price: {product.price}
              <br />
              Material: {product.material}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
`.trim();

const ListProductsWithPaginationTsxCode = /* tsx */ `
import { useList } from "@refinedev/core";

export const ListProducts = () => {
  const { data, isLoading } = useList({
    resource: "products",
    pagination: { current: 1, pageSize: 10 },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data?.data?.map((product) => (
          <li key={product.id}>
            <p>
              {product.name}
              <br />
              Price: {product.price}
              <br />
              Material: {product.material}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
`.trim();

const ListProductsWithSortingTsxCode = /* tsx */ `
import { useList } from "@refinedev/core";

export const ListProducts = () => {
  const { data, isLoading } = useList({
    resource: "products",
    pagination: { current: 1, pageSize: 10 },
    sorters: [{ field: "name", order: "asc" }],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data?.data?.map((product) => (
          <li key={product.id}>
            <p>
              {product.name}
              <br />
              Price: {product.price}
              <br />
              Material: {product.material}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
`.trim();

const ListProductsWithFilteringTsxCode = /* tsx */ `
import { useList } from "@refinedev/core";

export const ListProducts = () => {
  const { data, isLoading } = useList({
    resource: "products",
    pagination: { current: 1, pageSize: 10 },
    sorters: [{ field: "name", order: "asc" }],
    filters: [{ field: "material", operator: "eq", value: "Aluminum" }],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data?.data?.map((product) => (
          <li key={product.id}>
            <p>
              {product.name}
              <br />
              Price: {product.price}
              <br />
              Material: {product.material}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
`.trim();

const AppTsxWithListProductsCode = /* tsx */ `
import { Refine } from "@refinedev/core";

import { dataProvider } from "./data-provider";

import { ShowProduct } from "./show-product";
import { EditProduct } from "./edit-product";
import { ListProducts } from "./list-products";

export default function App(): JSX.Element {
  return (
    <Refine dataProvider={dataProvider}>
      {/* <ShowProduct /> */}
      {/* <EditProduct /> */}
      <ListProducts />
    </Refine>
  );
}
`.trim();

export const AddGetListMethod = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialUpdateFileButton
            onClick={() => {
                sandpack.updateFile(
                    "/data-provider.ts",
                    DataProviderWithGetListMethodTsCode,
                );
                sandpack.setActiveFile("/data-provider.ts");
            }}
        />
    );
};

export const CreateListProductsFile = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialCreateFileButton
            onClick={() => {
                sandpack.addFile({
                    "/list-products.tsx": {
                        code: BaseListProductsTsxCode,
                    },
                });
                sandpack.openFile("/list-products.tsx");
                sandpack.setActiveFile("/list-products.tsx");
            }}
            name="list-products.tsx"
        />
    );
};

export const AddUseListToListProducts = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialUpdateFileButton
            onClick={() => {
                sandpack.updateFile(
                    "/list-products.tsx",
                    ListProductsWithUseListTsxCode,
                );
                sandpack.setActiveFile("/list-products.tsx");
            }}
        />
    );
};

export const AddListProductsToAppTsx = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialUpdateFileButton
            onClick={() => {
                sandpack.updateFile("/App.tsx", AppTsxWithListProductsCode);
                sandpack.setActiveFile("/App.tsx");
            }}
        />
    );
};

export const AddPaginationToGetList = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialUpdateFileButton
            onClick={() => {
                sandpack.updateFile(
                    "/data-provider.ts",
                    DataProviderWithPaginationTsCode,
                );
                sandpack.setActiveFile("/data-provider.ts");
            }}
        />
    );
};

export const AddPaginationToListProducts = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialUpdateFileButton
            onClick={() => {
                sandpack.updateFile(
                    "/list-products.tsx",
                    ListProductsWithPaginationTsxCode,
                );
                sandpack.setActiveFile("/list-products.tsx");
            }}
        />
    );
};

export const AddSortingToGetList = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialUpdateFileButton
            onClick={() => {
                sandpack.updateFile(
                    "/data-provider.ts",
                    DataProviderWithSortingTsCode,
                );
                sandpack.setActiveFile("/data-provider.ts");
            }}
        />
    );
};

export const AddSortingToListProducts = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialUpdateFileButton
            onClick={() => {
                sandpack.updateFile(
                    "/list-products.tsx",
                    ListProductsWithSortingTsxCode,
                );
                sandpack.setActiveFile("/list-products.tsx");
            }}
        />
    );
};

export const AddFiltersToGetList = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialUpdateFileButton
            onClick={() => {
                sandpack.updateFile(
                    "/data-provider.ts",
                    DataProviderWithFilteringTsCode,
                );
                sandpack.setActiveFile("/data-provider.ts");
            }}
        />
    );
};

export const AddFiltersToListProducts = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialUpdateFileButton
            onClick={() => {
                sandpack.updateFile(
                    "/list-products.tsx",
                    ListProductsWithFilteringTsxCode,
                );
                sandpack.setActiveFile("/list-products.tsx");
            }}
        />
    );
};
