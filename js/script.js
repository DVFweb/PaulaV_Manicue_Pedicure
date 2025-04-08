const imagens = [
    { nome: '../img/galerias/maos/unhas1.jpeg', titulo: 'Unhas Decoradas' },
    { nome: '../img/galerias/maos/unhas7.jpeg', titulo: 'Estilo Clássico' },
    { nome: '../img/galerias/maos/unhas3.jpeg', titulo: 'Cores Vibrantes' },
    { nome: '../img/galerias/maos/unhas4.jpeg', titulo: 'Detalhes Finos' },
    { nome: '../img/galerias/maos/unhas5.jpeg', titulo: 'Esmalte em Gel' },
    { nome: '../img/galerias/maos/unhas6.jpeg', titulo: 'Unhas Artísticas' },
    { nome: '../img/galerias/pes/pes1.jpeg', titulo: 'Esmaltação em gel' },
    { nome: '../img/galerias/pes/pes2.jpeg', titulo: 'Esmaltação tradicional' },
    { nome: '../img/galerias/pes/pes3.jpeg', titulo: 'Esmaltação em gel' },
    { nome: '../img/galerias/pes/pe4.jpeg', titulo: 'Esmaltação tradicional' },
    { nome: '../img/galerias/pes/pe5.jpeg', titulo: 'Esmaltação em gel' },
    { nome: '../img/galerias/pes/pe6.jpeg', titulo: 'Esmaltação tradicional' },
    
    // Adicione mais imagens com títulos aqui
  ];

  const container = document.getElementById('galeria-container');

  imagens.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    const box = document.createElement('div');
    box.className = 'galeria-img-box position-relative';

    const img = document.createElement('img');
    img.src = 'img/' + item.nome;
    img.alt = item.titulo;
    img.className = 'img-fluid rounded shadow';

    const overlay = document.createElement('div');
    overlay.className = 'galeria-overlay';
    overlay.innerText = item.titulo;

    box.appendChild(img);
    box.appendChild(overlay);
    col.appendChild(box);
    container.appendChild(col);
  });