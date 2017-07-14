export class Item {
    name: string;
    price: number;
    collected = false;

    getFormattedPrice(): string {
        return Number(this.price).toFixed(2);
    }
}
