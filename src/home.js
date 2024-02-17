main()

function main() {
    search_videos_growcast()
    search_videos_webinar_fluter()
    search_videos_jornada_ux_ui()
    search_several_videos()
}

// REPRODUZ VIDEO DO CABEÇALHO
const buttonSee = document.getElementById('button_see').addEventListener('click', () => {
    console.log("entrou2");
    add_iframe_modal("https://www.youtube.com/embed/7OWT3lfHYvE?si=l5pUjlthbIAHzHBn")
})

function search_videos_growcast() {
    createElementCard(videos[0].growcast, 'growcast')
}

function search_videos_webinar_fluter() {
    createElementCard(videos[0].webinaFlutter, 'webinar_fluter')
}

function search_videos_jornada_ux_ui() {
    createElementCard(videos[0].jornadaUxUi, 'jornada_ux_ui')
}

function search_several_videos() {
    createElementCard(videos[0].diversos, 'diversos')
}

function createElementCard(data_video, id_element) {
    data_video.forEach(video => {

        var colContainer = document.getElementById(`${id_element}`);

        var colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center';

        var cardDiv = document.createElement('div');
        cardDiv.className = 'card border border border-0 increase-card';

        var img = document.createElement('img');
        img.src = `${video.image}`;
        img.className = 'card-img-top img-flui';
        img.alt = 'Imagem do video';

        var cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body bg-black text-white body_card';
        cardBodyDiv.setAttribute('data-bs-toggle', 'modal');
        cardBodyDiv.setAttribute('data-bs-target', '#modal_videos')
        cardBodyDiv.addEventListener('click', () => {
            add_iframe_modal(video.link, false)
        })

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
        span.className = "ps-3"
        span.textContent = `${video.title}`;

        svg.appendChild(path1);
        svg.appendChild(path2);

        cardDiv.appendChild(img);

        cardDiv.appendChild(cardBodyDiv);
        colDiv.appendChild(cardDiv);

        colContainer.appendChild(colDiv);

        cardDiv.addEventListener('mouseenter', () => {
            cardBodyDiv.appendChild(svg);
            cardBodyDiv.appendChild(span);
            cardDiv.classList.add("sobrepor")

        })
        cardDiv.addEventListener('mouseleave', () => {
            cardBodyDiv.removeChild(svg);
            cardBodyDiv.removeChild(span);
            cardDiv.classList.remove("sobrepor")
        })
    });
}

const closeMovie = document.getElementById('close-movie').addEventListener('click', () => {
    add_iframe_modal(null, true)
})

function add_iframe_modal(link_video, removeIframe) {
    const modal_video = document.getElementById('link_video')
    let modal

    if (removeIframe) {
        modal = ""
    }

    if (!removeIframe) {
        modal = `
    <iframe class="w-100 h-100" src="${link_video}"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
    }
    `
    }
    modal_video.innerHTML = modal
}
