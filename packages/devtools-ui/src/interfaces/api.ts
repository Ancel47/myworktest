export type RaffleResponse = {
    ruffle: boolean;
};

export type MeResponse = {
    company: string | null;
    createdAt: string;
    email: string;
    externalId: string | null;
    id: string;
    identityId: string;
    isActive: boolean;
    jobTitle: string | null;
    metadata: unknown | null;
    name: string | null;
    provider: string;
    updatedAt: string;
    userOrganizations: unknown[];
};

export type MeUpdateVariables = {
    name: string;
    company: string;
    jobTitle: string;
};
