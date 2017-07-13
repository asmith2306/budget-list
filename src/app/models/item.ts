export class Item {
    name: string;
    price: number;

    getFormattedPrice(): string {
        return Number(this.price).toFixed(2);
    }
}
