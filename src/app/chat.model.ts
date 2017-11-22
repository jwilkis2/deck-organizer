export class Chat {
    name: string;
    timestamp: string;
    message: string;

    constructor(name: string, timestamp: string, message: string) {
        this.name = name;
        this.timestamp = timestamp;
        this.message = message;
    }

    public getName(): string {
        return this.name;
    }

    public getTimestamp(): string {
        return this.timestamp;
    }

    public getMessage(): string {
        return this.message;
    }
}
