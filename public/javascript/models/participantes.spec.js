import { Participantes } from "./participantes";
import { Participante } from "./participante";
const makeParticipantes = () => {
    return new Participantes;
};
const makeParticipante = (name, description, picture, positive, negative) => {
    return new Participante(name, description, picture, positive, negative);
};
const makeSut = () => {
    const sut = makeParticipantes();
    return { sut };
};
describe('Participantes', () => {
    it('should has one participante in participantes', () => {
        const { sut } = makeSut();
        sut.adicionar(makeParticipante("Bárbara Evans", "Modelo e filha de Monique Evans", "http://im.r7.com/record/files/2C96/1618/3F6E/369D/013F/72F6/B48C/5BBD/B%C3%A1rbaraEvans1.jpg", 69274684, 9446548));
        expect(sut.lista().length).toBe(1);
    });
});
