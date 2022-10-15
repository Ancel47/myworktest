export interface ICategory {
    id: number;
    title: string;
}

export interface IPost {
    id: number;
    title: string;
    content: string;
    status: "published" | "draft" | "rejected";
    category: ICategory;
}
export interface ILog {
    id: string;
    action: string;
    resource: string;
    data: any; // eslint-disable-line
    previousData: any; // eslint-disable-line
    timestamp: string;
}
