export class Participante {
    constructor(name, description, picture, positive, negative) {
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.positive = positive;
        this.negative = negative;
    }
    get porcentagemPositiva() {
        const total = Number(this.positive) + Number(this.negative);
        return (((this.positive * 100) / total));
    }
    get porcentagemNegativa() {
        const total = Number(this.positive) + Number(this.negative);
        return (this.negative * 100) / total;
    }
}
//# sourceMappingURL=participante.js.map