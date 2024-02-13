// const cardGrowcast = document.getElementById('body_card').addEventListener('click',() => {
// alert("teste")
// })
procura_videos_growcast()
procura_videos_webinar_fluter()
procura_videos_jornada_ux_ui()
procura_videos_diversos()

function procura_videos_growcast() {
    criaELementoCard(videos[0].growcast, 'growcast')
}

function procura_videos_webinar_fluter() {
    criaELementoCard(videos[0].webinaFlutter, 'webinar_fluter')
}

function procura_videos_jornada_ux_ui() {
    criaELementoCard(videos[0].jornadaUxUi, 'jornada_ux_ui')
}

function procura_videos_diversos() {
    criaELementoCard(videos[0].diversos, 'diversos')
}

function criaELementoCard(dados_video, id_elemento) {
    dados_video.forEach(video => {    

    var colContainer = document.getElementById(`${id_elemento}`);

        var colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-md-4 mt-4';

        var cardDiv = document.createElement('div');
        cardDiv.className = 'card border border-0';
        cardDiv.style.width = '22rem';

        var img = document.createElement('img');
        img.src = `${video.image}`;
        img.className = 'card-img-top';
        img.alt = '...';

        var cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body bg-black text-white';
        cardBodyDiv.id = 'body_card';

        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add = 'bi bi-play-circle me-3';
        svg.setAttribute('width', '40');
        svg.setAttribute('height', '40');
        svg.setAttribute('fill', 'currentColor');
        svg.setAttribute('viewBox', '0 0 16 16');

        var path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path1.setAttribute('d', 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16');

        var path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path2.setAttribute('d', 'M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445');

        var span = document.createElement('span');
        span.textContent = 'Growcast #00 Conheça a Growdev';

        // Adição dos elementos ao documento
        svg.appendChild(path1);
        svg.appendChild(path2);

        cardBodyDiv.appendChild(svg);
        cardBodyDiv.appendChild(span);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);

        colDiv.appendChild(cardDiv);

        colContainer.appendChild(colDiv);

    });

}
