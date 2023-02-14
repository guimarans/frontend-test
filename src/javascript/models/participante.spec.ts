import { Participante } from "./participante"

const makeParticipante = (
    name: string,
    description: string,
    picture: string,
    positive: number,
    negative:number,): Participante => {
    return new Participante(
        name, description, picture, positive, negative
    )
}

const makeSub = () => {
    const sut = makeParticipante(
        "Bárbara Evans",
        "Modelo e filha de Monique Evans",
        "http://im.r7.com/record/files/2C96/1618/3F6E/369D/013F/72F6/B48C/5BBD/B%C3%A1rbaraEvans1.jpg", 
        69274684, 
        9446548
    );
    return { sut }
}

describe('Participante', () => {
    const { sut } = makeSub();
    const total = sut.negative + sut.positive;

    it('Should show the positive percentage', () => {
        const positive = (sut.positive * 100) / total;
        expect(sut.porcentagemPositiva).toBe(positive);

    })

    it('Should show the negative percentage', () => {
        const negative = (sut.negative * 100) / total;
        expect(sut.porcentagemNegativa).toBe(negative);
    })
})