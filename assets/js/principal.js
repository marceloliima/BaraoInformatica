/**
 * BARÃO DA INFORMÁTICA — INTERAÇÕES DA PÁGINA
 * Desenvolvido para um site estático hospedado no Cloudflare Pages.
 *
 * Objetivos:
 *  - preservar as classes do tema e a identidade visual;
 *  - evitar scripts inline no HTML;
 *  - oferecer navegação mobile acessível;
 *  - manter os filtros de serviços, animações e botão de voltar ao topo;
 *  - tratar imagens ausentes e melhorar o comportamento da FAQ.
 *
 * Não coleta dados pessoais, não utiliza cookies nem envia informações
 * a serviços de análise. Links externos funcionam sem JavaScript.
 */
(() => {
  'use strict';

  // A função abreviada facilita localizar elementos sem dependências externas.
  const selecionar = (seletor, contexto = document) => contexto.querySelector(seletor);
  const selecionarTodos = (seletor, contexto = document) => [...contexto.querySelectorAll(seletor)];

  /** 1. MENU RESPONSIVO: estados, foco, fundo e tecla ESC. */
  const abrirMenu = selecionar('#abrir-menu');
  const fecharMenu = selecionar('#fechar-menu');
  const menuLateral = selecionar('#menu-lateral');
  const fundoMenu = selecionar('#fundo-menu');
  let focoAnterior = null;

  function definirEstadoMenu(aberto, restaurarFoco = true) {
    if (!menuLateral || !abrirMenu || !fundoMenu) return;
    const estavaAberto = menuLateral.classList.contains('is-open');
    if (aberto && !estavaAberto) focoAnterior = document.activeElement;

    menuLateral.classList.toggle('is-open', aberto);
    menuLateral.setAttribute('aria-hidden', String(!aberto));
    menuLateral.inert = !aberto;
    abrirMenu.setAttribute('aria-expanded', String(aberto));
    abrirMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    fundoMenu.hidden = !aberto;
    document.body.classList.toggle('menu-open', aberto);

    if (aberto) {
      (fecharMenu || selecionar('a, button', menuLateral))?.focus();
    } else if (estavaAberto && restaurarFoco) {
      // Ao fechar, devolve o foco ao botão de abertura se ele ainda existe.
      const destino = focoAnterior?.isConnected ? focoAnterior : abrirMenu;
      destino?.focus?.({ preventScroll: true });
    }
  }

  abrirMenu?.addEventListener('click', () => definirEstadoMenu(true));
  fecharMenu?.addEventListener('click', () => definirEstadoMenu(false));
  fundoMenu?.addEventListener('click', () => definirEstadoMenu(false));

  // Links do menu seguem funcionando como âncoras, sem recarregar a página.
  selecionarTodos('a[href]', menuLateral || document.createElement('div')).forEach(link => {
    link.addEventListener('click', () => definirEstadoMenu(false, false));
  });

  document.addEventListener('keydown', evento => {
    if (!menuLateral?.classList.contains('is-open')) return;
    if (evento.key === 'Escape') {
      evento.preventDefault();
      definirEstadoMenu(false);
      return;
    }
    if (evento.key !== 'Tab') return;

    // Mantém a navegação por teclado dentro do menu enquanto ele está aberto.
    const focaveis = selecionarTodos('a[href], button:not([disabled])', menuLateral)
      .filter(elemento => !elemento.hidden);
    if (!focaveis.length) return;
    const primeiro = focaveis[0];
    const ultimo = focaveis[focaveis.length - 1];
    if (evento.shiftKey && document.activeElement === primeiro) {
      evento.preventDefault();
      ultimo.focus();
    } else if (!evento.shiftKey && document.activeElement === ultimo) {
      evento.preventDefault();
      primeiro.focus();
    }
  });

  // Se a tela voltar ao tamanho desktop, remove o menu móvel aberto.
  const telaDesktop = window.matchMedia('(min-width: 1121px)');
  telaDesktop.addEventListener?.('change', evento => {
    if (evento.matches && menuLateral?.classList.contains('is-open')) {
      definirEstadoMenu(false, false);
    }
  });

  /** 2. FILTROS DE SERVIÇO: apenas os cards da categoria selecionada. */
  const filtros = selecionarTodos('button[data-filter]');
  const servicos = selecionarTodos('.card--service[data-category]');

  function aplicarFiltro(filtroSelecionado) {
    filtros.forEach(botao => {
      const ativo = botao.dataset.filter === filtroSelecionado;
      botao.classList.toggle('is-active', ativo);
      botao.setAttribute('aria-pressed', String(ativo));
    });

    servicos.forEach(cartao => {
      const mostrar = filtroSelecionado === 'todos' || cartao.dataset.category === filtroSelecionado;
      cartao.hidden = !mostrar;
    });
  }

  filtros.forEach(botao => {
    botao.addEventListener('click', () => aplicarFiltro(botao.dataset.filter));
  });

  /** 3. ANIMAÇÃO DE ENTRADA: observa elementos sem sobrecarregar o scroll. */
  const elementosAnimados = selecionarTodos('.reveal');
  const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');

  if ('IntersectionObserver' in window && !movimentoReduzido.matches) {
    const observador = new IntersectionObserver((entradas, instancia) => {
      entradas.forEach(entrada => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('is-visible');
        instancia.unobserve(entrada.target);
      });
    }, { threshold: 0.07 });
    elementosAnimados.forEach(elemento => observador.observe(elemento));
  } else {
    elementosAnimados.forEach(elemento => elemento.classList.add('is-visible'));
  }

  /** 4. IMAGENS: trata caminhos ausentes sem deixar ícones quebrados. */
  selecionarTodos('img').forEach(imagem => {
    function tratarFalha() {
      if (imagem.hidden) return;
      imagem.hidden = true;
      imagem.closest('.card__media')?.classList.add('is-missing');
    }
    imagem.addEventListener('error', tratarFalha, { once: true });
    // Também trata imagens que falharam antes de o script carregar.
    if (imagem.complete && imagem.naturalWidth === 0) tratarFalha();
  });

  /** 5. FAQ: mantém somente uma resposta aberta por vez. */
  const perguntas = selecionarTodos('.faq__items details');
  perguntas.forEach(pergunta => {
    pergunta.addEventListener('toggle', () => {
      if (!pergunta.open) return;
      perguntas.forEach(outra => {
        if (outra !== pergunta) outra.open = false;
      });
    });
  });

  /** 6. ANO NO RODAPÉ: acompanha automaticamente o ano atual. */
  const elementoAno = selecionar('#ano-atual');
  if (elementoAno) elementoAno.textContent = String(new Date().getFullYear());

  /** 7. VOLTAR AO TOPO: sem esconder o foco em controles invisíveis. */
  const botaoTopo = selecionar('#voltar-topo');

  function atualizarBotaoTopo() {
    if (!botaoTopo) return;
    const mostrar = window.scrollY > 700;
    botaoTopo.classList.toggle('is-visible', mostrar);
    botaoTopo.tabIndex = mostrar ? 0 : -1;
    botaoTopo.setAttribute('aria-hidden', String(!mostrar));
  }

  atualizarBotaoTopo();
  window.addEventListener('scroll', atualizarBotaoTopo, { passive: true });
  botaoTopo?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: movimentoReduzido.matches ? 'auto' : 'smooth' });
  });
})();
