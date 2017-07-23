export class NumberUtils {
    static format2DecimalPlaces(num: string): number {
        return Number(Number(num).toFixed(2));
    }
}
