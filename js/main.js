document.addEventListener('DOMContentLoaded', () => {
    // 1. Atualizar o ano no rodapé
    document.getElementById('ano').textContent = new Date().getFullYear();

    // 2. Dados das categorias
    const categoriasDados = [
        { nome: 'Tecnologia', icon: '💻', desc: 'As últimas novidades do mundo tech.' },
        { nome: 'Celulares', icon: '📱', desc: 'Reviews e lançamentos de smartphones.' },
        { nome: 'Fones', icon: '🎧', desc: 'O melhor da experiência sonora.' },
        { nome: 'Xbox e Jogos', icon: '🎮', desc: 'Tudo sobre o universo gamer.' },
        { nome: 'Ofertas DDT', icon: '🏷️', desc: 'Descontos exclusivos para inscritos.' },
        { nome: 'Vídeos', icon: '📺', desc: 'Assista aos nossos conteúdos novos.' }
    ];

    const container = document.getElementById('categorias');

    // 3. Criar os cards dinamicamente
    categoriasDados.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 15px;">${item.icon}</div>
            <h3>${item.nome}</h3>
            <p style="color: #94a3b8; font-size: 0.9rem;">${item.desc}</p>
        `;
        container.appendChild(card);
    });
});
