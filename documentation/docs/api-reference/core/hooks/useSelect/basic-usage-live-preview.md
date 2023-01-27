```tsx live url=http://localhost:3000/products previewHeight=200px
setInitialRoutes(["/categories/create"]);
// visible-block-start
import { useSelect, HttpError } from "@pankod/refine-core";

interface ICategory {
    id: number;
    title: string;
}

const ProductCreate: React.FC = () => {
    const { options } = useSelect<ICategory>({
        resource: "categories",
    });

    return (
        <label>
            Select a category:
            <select>
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
};
// visible-block-end
setRefineProps({
    resources: [
        {
            name: "categories",
            create: ProductCreate,
        },
    ],
});
render(<RefineHeadlessDemo />);
```