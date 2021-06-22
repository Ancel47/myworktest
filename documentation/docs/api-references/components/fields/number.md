---
id: number
title: Number
---
import numberField from '@site/static/img/guides-and-concepts/fields/number/numberField.png'


This field is used to display a number formatted according to the browser locale, right aligned. and uses [`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) to display date format.

## Usage

`<NumberField>` uses Intl.NumberFormat() if available, passing the locales and options props as arguments. This allows a perfect display of decimals, currencies, percentages, etc. See [Intl.NumberFormat documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) for the options prop syntax.

If Intl is not available, `<NumberField>` outputs numbers as is (and ignores the locales and options props).

```tsx
import { List, Table, NumberField } from "@pankod/refine";
import { IPost } from "interfaces";
export const PostList: React.FC = () => {
    return (
        <List>
            <Table<IPost> rowKey="id">
                <Table.Column dataIndex="title" title="Title" key="title" />
                <Table.Column<IPost>
                    key="hit"
                    title="Hit"
                    dataIndex="hit"
                    render={(value) => (
                        //highlight-start
                        <NumberField
                            value={value}
                            options={{
                                style: "currency",
                                notation: "compact",
                            }}
                        />
                    )}
                    //highlight-end
                />
            </Table>
        </List>
    );
};
```

```tsx title="interfaces/index.d.ts"
interface IPost {
    id: string;
    hit: number;
}
```

<br/>
<div>
    <img src={numberField} alt="Number Field Usage"/>
</div>

## API Reference

### Properties

| Property | Description                                                                                            | Type                                                                                                                                                         | Default |
| -------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| value    | Number value                                                                                           | `React.ReactChild`                                                                                                                                           |         |
| locale   | Override the browser locale in the date formatting. Passed as first argument to `Intl.NumberFormat()`. | `string` \| `undefined`                                                                                                                                      |         |
| options  | Number formatting options. Passed as second argument to `Intl.NumberFormat()`.                         | [`Intl.NumberFormatOptions`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) \| `undefined` |         |
