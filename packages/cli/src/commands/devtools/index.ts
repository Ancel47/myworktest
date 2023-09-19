import { Command } from "commander";
import { server } from "@refinedev/devtools-server";

const load = (program: Command) => {
    return program
        .command("devtools")
        .description("Start refine's devtools server; it starts on port 5001.")
        .action(action);
};

export const action = async () => {
    server();
};

export default load;
