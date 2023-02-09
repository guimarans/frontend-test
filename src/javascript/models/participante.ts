export class Participante {

    constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly picture: string,
        public readonly positive: number,
        public readonly negative:number,
    ){ }

    get porcentagemPositiva(): number {

        const total = Number(this.positive) + Number(this.negative);
        return (((this.positive * 100) / total));
    }

    get porcentagemNegativa(): number {
        const total = Number(this.positive) + Number(this.negative);
        return (this.negative * 100) / total;
    }

}