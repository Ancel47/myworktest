import { ProductVariant } from "@medusajs/medusa";

interface LineItemOptionsProps {
    variant: ProductVariant;
}

const LineItemOptions: React.FC<LineItemOptionsProps> = ({ variant }) => {
    return (
        <div className="text-small-regular text-gray-700">
            {variant.options.map((option) => {
                const optionName =
                    variant.product.options.find(
                        (opt) => opt.id === option.option_id,
                    )?.title || "Option";
                return (
                    <div key={option.id}>
                        <span>
                            {optionName}: {option.value}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default LineItemOptions;
