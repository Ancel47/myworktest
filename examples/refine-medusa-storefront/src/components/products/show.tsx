import { useList, useShow } from "@pankod/refine-core";
import { ProductView } from "..";

export const ProductShow: React.FC = () => {
    const { queryResult } = useShow();
    const { data } = queryResult;
    const record = data?.data;

    const { data: relatedProducts } = useList({
        resource: "products",
    });

    return (
        <>
            {record ? (
                <ProductView
                    product={record as any}
                    relatedProducts={relatedProducts?.data ?? ([] as any)}
                />
            ) : null}
        </>
    );
};
