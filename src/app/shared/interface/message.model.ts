export interface Message {
    message: string;
    owned: boolean;
    time: Date;

    token?: string;
    userId?: string;
    name?: string;
    last_name?: string;
}
