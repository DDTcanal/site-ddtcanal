document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ano').textContent = new Date().getFullYear();

    const categoriasDados = [
        { nome: 'Tecnologia', icon: '💻', desc: 'As últimas novidades do mundo tech.', link: 'paginas/tecnologia.html' },
        { nome: 'Celulares', icon: '📱', desc: 'Reviews e lançamentos de smartphones.', link: 'paginas/celulares.html' },
        { nome: 'Fones', icon: '🎧', desc: 'O melhor da experiência sonora.', link: 'paginas/fones.html' },
        { nome: 'Xbox e Jogos', icon: '🎮', desc: 'Tudo sobre o universo gamer.', link: 'paginas/games.html' },
        { nome: 'Ofertas DDT', icon: '🏷️', desc: 'Descontos exclusivos para inscritos.', link: 'https://t.me/seu-link-de-ofertas' }, // Link externo
        { nome: 'Vídeos', icon: '📺', desc: 'Assista aos nossos conteúdos novos.', link: 'https://youtube.com/@seucanal' }
    ];

    const container = document.getElementById('categorias');

    categoriasDados.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Faz o card inteiro ser clicável
        card.onclick = () => {
            window.location.href = item.link;
        };

        card.innerHTML = `
            <div class="card-icon">${item.icon}</div>
            <h3>${item.nome}</h3>
            <p>${item.desc}</p>
            <span class="link-fake">Explorar →</span>
        `;
        container.appendChild(card);
    });
});
