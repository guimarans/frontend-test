import { View } from "./view.js";
export class ParticipanteView extends View {
    template(model) {
        return `
        ${model.lista().forEach((participante, i) => {
            return `
            <div class="ranking__item tooltip">
                <div class="row">
                    <figure class="ranking__picture">
                    <img src="${participante.picture}" alt="${participante.name}">
                    <figcaption class="ranking__picture--position">
                        ${i++}
                    </figcaption>
                    </figure>
                    <div class="ranking__info">
                    <h2> ${participante.name}</h2>
                    <p> ${participante.description} </p>
                    </div>
                </div>

                <table class="tooltip__content">
                    <thead>
                    <tr>
                        <th>Gostam</th>
                        <th>Nao gostam</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>${participante.positive || 0}</td>
                        <td>${participante.negative || 0}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            `;
        })}`;
    }
}
//# sourceMappingURL=participante-view.js.map