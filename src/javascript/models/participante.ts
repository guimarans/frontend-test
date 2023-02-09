export class Participante {

    constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly picture: string,
        public readonly positive: number | null = 0,
        public readonly negative:number | null = 0
    ){ }
}