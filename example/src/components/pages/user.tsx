import * as React from "react";
import { List, Table, TextField, EmailField, FunctionField, DateField } from "readmin";

export const UserList = (props: any) => {
    return (
        <List {...props}>
            <Table>
                <TextField source="id" title="ID" />
                <TextField source="firstName" title="First Name" />
                <TextField source="lastName" title="Last Name" />
                <TextField source="status" title="Status" />
                <EmailField source="email" title="Email" />
                <DateField source="birthday" title="Birthday" format="LL" />
                <FunctionField
                    title="Full Name"
                    render={(record: any) =>
                        `${record.firstName} ${record.lastName}`
                    }
                />
            </Table>
        </List>
    );
};
