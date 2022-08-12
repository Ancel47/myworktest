import Radio from "@components/common/Radio";
import Spinner from "@components/icons/Spinner";
import { RadioGroup } from "@headlessui/react";
import { ErrorMessage } from "@hookform/error-message";
import { useCartContext } from "@lib/context";
import { useCheckout } from "@lib/context/checkout";
import { Cart } from "@medusajs/medusa";
import { useCreate, useList } from "@pankod/refine-core";
import clsx from "clsx";
import { ShippingOption as MedusaShippingOption } from "@medusajs/medusa";
import { formatAmount } from "medusa-react";
import React, { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import StepContainer from "../StepContainer";

type ShippingOption = {
    value: string;
    label: string;
    price: string;
};

type ShippingProps = {
    cart: Omit<Cart, "refundable_amount" | "refunded_total">;
};

type ShippingFormProps = {
    soId: string;
};

const Shipping: React.FC<ShippingProps> = ({ cart }) => {
    const { mutate } = useCreate();
    const { cartId } = useCartContext();

    const {
        control,
        setError,
        formState: { errors },
    } = useForm<ShippingFormProps>({
        defaultValues: {
            soId: cart.shipping_methods?.[0]?.shipping_option_id,
        },
    });

    // Fetch shipping options
    //TODO: Is shipping_options data ok?
    const { data: shippingOptionsData, refetch } =
        useList<MedusaShippingOption>({
            resource: `shipping_methods/${cartId}`,
            queryOptions: {
                enabled: !!cartId,
            },
        });
    const shipping_options = shippingOptionsData?.data;

    // Any time the cart changes we need to ensure that we are displaying valid shipping options
    useEffect(() => {
        const refetchShipping = async () => {
            await refetch();
        };

        refetchShipping();
    }, [cart, refetch]);

    const submitShippingOption = (soId: string) => {
        mutate(
            {
                resource: `carts/${cartId}`,
                values: { option_id: soId },
            },
            {
                onError: () =>
                    setError(
                        "soId",
                        {
                            type: "validate",
                            message:
                                "An error occurred while adding shipping. Please try again.",
                        },
                        { shouldFocus: true },
                    ),
            },
        );
    };

    const handleChange = (value: string, fn: (value: string) => void) => {
        submitShippingOption(value);
        fn(value);
    };

    // Memoized shipping method options
    const shippingMethods: ShippingOption[] = useMemo(() => {
        if (shipping_options && cart?.region) {
            return shipping_options?.map((option) => ({
                value: option.id,
                label: option.name,
                price: formatAmount({
                    amount: option.amount || 0,
                    region: cart.region,
                }),
            }));
        }

        return [];
    }, [shipping_options, cart]);

    const {
        sameAsBilling: { state: sameBilling },
    } = useCheckout();

    return (
        <StepContainer
            index={sameBilling ? 2 : 3}
            title="Delivery"
            closedState={
                <div className="text-small-regular px-8 pb-8">
                    <p>Enter your address to see available delivery options.</p>
                </div>
            }
        >
            <Controller
                name="soId"
                control={control}
                render={({ field: { value, onChange } }) => {
                    return (
                        <div>
                            <RadioGroup
                                value={value}
                                onChange={(value: string) =>
                                    handleChange(value, onChange)
                                }
                            >
                                {shippingMethods && shippingMethods.length ? (
                                    shippingMethods.map((option) => {
                                        return (
                                            <RadioGroup.Option
                                                key={option.value}
                                                value={option.value}
                                                className={clsx(
                                                    "text-small-regular flex cursor-pointer items-center justify-between border-b border-gray-200 py-4 px-8 last:border-b-0",
                                                    {
                                                        "bg-gray-50":
                                                            option.value ===
                                                            value,
                                                    },
                                                )}
                                            >
                                                <div className="flex items-center gap-x-4">
                                                    <Radio
                                                        checked={
                                                            value ===
                                                            option.value
                                                        }
                                                    />
                                                    <span className="text-base-regular">
                                                        {option.label}
                                                    </span>
                                                </div>
                                                <span className="justify-self-end text-gray-700">
                                                    {option.price}
                                                </span>
                                            </RadioGroup.Option>
                                        );
                                    })
                                ) : (
                                    <div className="flex flex-col items-center justify-center px-4 py-8 text-gray-900">
                                        <Spinner />
                                    </div>
                                )}
                            </RadioGroup>
                            <ErrorMessage
                                errors={errors}
                                name="soId"
                                render={({ message }) => {
                                    return (
                                        <div className="text-small-regular pt-2 text-rose-500">
                                            <span>{message}</span>
                                        </div>
                                    );
                                }}
                            />
                        </div>
                    );
                }}
            />
        </StepContainer>
    );
};

export default Shipping;
