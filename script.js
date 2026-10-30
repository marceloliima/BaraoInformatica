// Barão da Informática — Interatividade, Modais de Serviços/Marcas, FAQ e Animações

const WHATSAPP_NUMBER = "5577999515111";

const SERVICES_DATA = {
  "tela-quebrada": {
    tag: "Display & Imagem",
    title: "Troca de Tela de Notebook & MacBook",
    image: "images/reparos/troca-tela-real.png",
    description: "Substituição técnica de telas LCD, LED, IPS, OLED, 144Hz/240Hz Gamer e Retina (MacBook e iMac) com calibração de brilho e cores originais na Barão da Informática.",
    symptoms: [
      "Tela trincada, quebrada ou com vazamento de cristal líquido",
      "Listras verticais/horizontais, imagem piscando ou cores estouradas",
      "Tela escura no fundo (backlight queimado ou circuito LVDS/eDP)",
      "Staingate (manchas no antirreflexo) e Flexgate em MacBooks"
    ],
    highlights: "Trabalhamos com painéis originais OEM com garantia de 90 dias, mantendo a taxa de atualização (Hz), resolução e fidelidade de cores de fábrica."
  },
  "troca-de-bateria": {
    tag: "Energia & Autonomia",
    title: "Troca de Bateria",
    image: "images/reparos/troca-bateria-real.png",
    description: "Substituição segura de baterias internas e externas para notebooks corporativos, gamers e linha completa Apple MacBook Air e Pro.",
    symptoms: [
      "Bateria estufada/inchada pressionando o touchpad ou a carcaça",
      "Aviso 'Recomendada manutenção' ou 'Substituir agora' no sistema",
      "Notebook desliga sozinho ao tirar da tomada ou não passa de 0%",
      "Autonomia muito baixa e ciclos de carga esgotados"
    ],
    highlights: "Inclui limpeza do compartimento interno, teste de consumo da placa-mãe (circuito de charger) e calibração de células."
  },
  "upgrade-desempenho": {
    tag: "Alta Performance",
    title: "Upgrade de Desempenho (SSD & RAM)",
    image: "images/reparos/upgrade-ssd-real.png",
    description: "Deixe seu computador ou notebook até 10x mais rápido com SSDs NVMe Gen4 de alta velocidade, expansão de memória RAM Dual-Channel e otimização de sistema.",
    symptoms: [
      "Lentidão extrema ao ligar ou abrir programas pesados",
      "Disco em 100% de uso constante no Gerenciador de Tarefas",
      "Falta de memória para multitarefa, edição, ERP, CAD ou jogos",
      "Pouco espaço de armazenamento disponível"
    ],
    highlights: "Clonagem segura do seu sistema e arquivos sem perder nenhum documento, ou instalação limpa otimizada."
  },
  "reparo-placa-mae": {
    tag: "Laboratório de Microsolda",
    title: "Reparo de Placa-Mãe & Microsolda",
    image: "images/reparos/reparo-placa-real.jpg",
    description: "Especialidade da Barão da Informática: diagnóstico eletrônico a nível de componentes com esquemáticos, osciloscópio e estação de solda para recuperar sua placa original sem precisar trocá-la inteira.",
    symptoms: [
      "Equipamento não liga e não acende nenhum LED",
      "Liga o cooler/LED mas não dá vídeo na tela nem no HDMI",
      "Queda de líquido (água, café, refrigerante) e oxidação em placa",
      "Curto no circuito de carga, VRM, SMD, BGA ou Super I/O"
    ],
    highlights: "Economia de até 70% em relação à substituição de placa inteira, preservando a originalidade do seu equipamento."
  },
  "higienizacao": {
    tag: "Prevenção Térmica",
    title: "Higienização & Limpeza Interna Preventiva",
    image: "images/reparos/pasta-termica.jpg",
    description: "Desmontagem técnica completa para desobstrução de dutos e coolers, remoção de poeira e aplicação de pasta térmica de prata/alta condutividade.",
    symptoms: [
      "Aquecimento excessivo na carcaça e saídas de ar",
      "Cooler fazendo barulho alto ou girando no máximo o tempo todo",
      "Queda brusca de desempenho (Thermal Throttling) e desligamento repentino",
      "Mais de 12 meses sem manutenção preventiva"
    ],
    highlights: "Utilizamos compostos térmicos de alta performance para manter seu processador e chip gráfico em temperaturas seguras."
  },
  "troca-de-pecas": {
    tag: "Loja & Peças",
    title: "Troca de Peças (Teclados, Coolers, Carcaças)",
    image: "images/reparos/troca-teclado.jpg",
    description: "Substituição técnica de teclados (incluindo modelos rebitados e retroiluminados), coolers, ventoinhas, touchpads, alto-falantes e cabos flat.",
    symptoms: [
      "Teclas falhando, disparando sozinhas ou travadas",
      "Cooler travado, roncando ou sem girar",
      "Touchpad sem clique ou com mau contato",
      "Conectores USB, HDMI ou áudio danificados"
    ],
    highlights: "Estoque amplo de peças originais e compatíveis de primeira linha na Barão da Informática."
  },
  "reparo-carcaca": {
    tag: "Reconstrução Estrutural",
    title: "Reparo de Carcaça e Dobradiças",
    image: "images/reparos/reparo-carcaca-real.png",
    description: "Restauração de buchas plásticas arrebentadas, solda plástica de alta resistência estrutural e ajuste de torque nas dobradiças para abrir a tampa suavemente.",
    symptoms: [
      "Estalo forte ou resistência ao abrir ou fechar a tampa",
      "Carcaça abrindo nos cantos perto da tela com parafusos soltos",
      "Dobradiça dura forçando a quebra da moldura da tela",
      "Trincas estruturais na base ou palmrest"
    ],
    highlights: "Reconstrução duradoura com alívio da pressão mecânica das dobradiças para evitar reincidência do problema."
  },
  "sistema-operacional": {
    tag: "Software & Formatação",
    title: "Formatação e Sistema Operacional (Windows & macOS)",
    image: "images/reparos/sistema-operacional-real.jpg",
    description: "Instalação limpa de Windows 11/10 ou macOS, backup preventivo de dados, drivers oficiais e remoção completa de malwares e vírus.",
    symptoms: [
      "Tela azul (BSOD), lentidão severa ou travamentos frequentes",
      "Sistema corrompido em loop de reparo automático",
      "Vírus, spywares e programas indesejados no boot",
      "Necessidade de reinstalação profissional com preservação de arquivos"
    ],
    highlights: "Instalação otimizada, sem programas inúteis, deixando sua máquina rápida e segura."
  },
  "diagnostico-certo": {
    tag: "Check-up Técnico",
    title: "Diagnóstico Certo & Avaliação em Bancada",
    image: "images/reparos/limpeza-interna.jpg",
    description: "Check-up minucioso com ferramentas de teste de hardware, saúde de armazenamento (SMART), teste de estresse de memória e análise visual.",
    symptoms: [
      "Defeitos intermitentes que aparecem e somem",
      "Equipamento que já passou por outra assistência sem solução",
      "Avaliação de viabilidade de conserto vs. compra de máquina nova",
      "Laudo técnico detalhado para empresas ou seguradoras"
    ],
    highlights: "Transparência total com o cliente: só executamos serviços com aprovação prévia de orçamento."
  },
  "reparo-carregadores": {
    tag: "Fontes & Acessórios",
    title: "Fontes e Carregadores Originais",
    image: "images/reparos/reparo-placa-real.jpg",
    description: "Reparo de pontas de cabos, troca de conectores DC Jack danificados e fornecimento de carregadores confiáveis para todas as marcas.",
    symptoms: [
      "Cabo do carregador partido ou com mau contato no pino",
      "Conector da carcaça frouxo ou afundado para dentro do notebook",
      "Notebook só carrega em uma posição específica do cabo",
      "Carregador não envia energia suficiente para a bateria"
    ],
    highlights: "Evite carregadores genéricos que queimam circuitos da placa-mãe. Conte com a Barão da Informática."
  }
};

const BRANDS_DATA = {
  "dell": {
    name: "Dell",
    lines: "Inspiron · Vostro · Latitude · XPS · Dell G-Series",
    description: "Assistência completa para notebooks Dell em Luís Eduardo Magalhães. Reparo de circuitos de alimentação, recuperação de dobradiças quebradas, troca de telas e upgrades de performance."
  },
  "acer": {
    name: "Acer",
    lines: "Aspire · Swift · Nitro 5 / Nitro V · Predator",
    description: "Especialistas em notebooks Acer de uso diário e gamers. Reparo de placa, substituição de teclado integrado, telas IPS e higienização térmica completa."
  },
  "apple": {
    name: "Apple (MacBook & iMac)",
    lines: "MacBook Air · MacBook Pro · iMac · Mac mini",
    description: "Cuidado avançado para equipamentos Apple. Reparo a nível de componente em Logic Board, troca de telas Retina, substituição de baterias e recuperação de macOS."
  },
  "lenovo": {
    name: "Lenovo",
    lines: "IdeaPad · ThinkPad · Yoga · Legion",
    description: "Atendimento completo para notebooks corporativos e gamers Lenovo. Reparo de carcaça, regravação de BIOS, troca de telas e expansão de memória."
  },
  "asus": {
    name: "Asus",
    lines: "VivoBook · ZenBook · TUF Gaming · ROG Strix",
    description: "Experiência técnica em notebooks Asus. Tratamento térmico de alta performance, reparo em placas lógicas e troca de componentes."
  },
  "hp": {
    name: "HP",
    lines: "Pavilion · ProBook · EliteBook · Victus · Omen",
    description: "Manutenção para notebooks corporativos e pessoais HP. Solução de aquecimento, reparo de dobradiças, substituição de baterias e peças originais."
  },
  "acer-predator": {
    name: "Acer Predator",
    lines: "Predator Helios · Triton",
    description: "Infraestrutura para notebooks gamer de alta performance Predator. Limpeza profunda de coolers AeroBlade, troca de pasta térmica e reparo de GPU/VRM."
  },
  "alienware": {
    name: "Alienware",
    lines: "Alienware m15 / m16 / m18 · Aurora",
    description: "Manutenção premium para máquinas pesadas Alienware. Revisão de arrefecimento, circuitos de alta amperagem e upgrades."
  },
  "samsung": {
    name: "Samsung",
    lines: "Galaxy Book · Book Pro · Essentials",
    description: "Reparo especializado em notebooks Samsung. Telas AMOLED e LED, reparo de placas, troca de teclados e baterias."
  },
  "avell": {
    name: "Avell",
    lines: "Avell Storm · Titan · Workstations",
    description: "Assistência para notebooks de alta capacidade gráfica e processamento para engenharia, arquitetura e jogos."
  },
  "msi": {
    name: "MSI",
    lines: "MSI Katana · Bravo · Raider · Stealth",
    description: "Diagnóstico e reparo para a linha gamer MSI: thermal throttling, ventoinhas, circuito elétrico e reballing."
  },
  "razer": {
    name: "Razer",
    lines: "Razer Blade 14 / 15 / 16 / 18",
    description: "Atendimento técnico para Razer Blade: troca de bateria estufada, revisão de vapor chamber e reparo de componentes."
  },
  "intel": {
    name: "Plataforma Intel & PCs Gamer",
    lines: "Core i3 / i5 / i7 / i9 · Desktops & Workstations",
    description: "Montagem, diagnóstico, upgrade e manutenção completa para PCs Gamers e computadores de escritório em Luís Eduardo Magalhães."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Scroll Reveal
  const revealEls = document.querySelectorAll(".reveal-up");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("revealed"));
  }

  // 2. Mobile Menu
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu-drawer");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      mobileBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        mobileBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. FAQ Accordion
  const faqButtons = document.querySelectorAll(".faq-btn");
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const content = btn.nextElementSibling;
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (content) {
        if (expanded) {
          content.classList.remove("grid-rows-[1fr]", "pb-6");
          content.classList.add("grid-rows-[0fr]");
        } else {
          content.classList.remove("grid-rows-[0fr]");
          content.classList.add("grid-rows-[1fr]", "pb-6");
        }
      }
    });
  });

  // Toggle Extra FAQs
  const moreFaqBtn = document.getElementById("toggle-more-faq");
  const extraFaqContainer = document.getElementById("extra-faq-items");
  if (moreFaqBtn && extraFaqContainer) {
    moreFaqBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const isHidden = extraFaqContainer.classList.toggle("hidden");
      moreFaqBtn.innerHTML = isHidden
        ? "Ver todas as perguntas →"
        : "Mostrar menos perguntas ↑";
    });
  }

  // 4. Modals System
  const modalBackdrop = document.getElementById("bi-modal");
  const modalBody = document.getElementById("bi-modal-body");

  function openModal(htmlContent) {
    if (!modalBackdrop || !modalBody) return;
    modalBody.innerHTML = htmlContent;
    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";

    modalBody.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", closeModal);
    });

    const form = modalBody.querySelector("#bi-quote-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = form.querySelector("[name='nome']").value.trim();
        const aparelho = form.querySelector("[name='aparelho']").value.trim();
        const servico = form.querySelector("[name='servico']").value.trim();
        const detalhes = form.querySelector("[name='detalhes']").value.trim();
        const msg = `Olá, Barão da Informática! Meu nome é *${nome}*.\n*Equipamento:* ${aparelho}\n*Serviço/Sintoma:* ${servico}\n*Detalhes:* ${detalhes || "Gostaria de solicitar um orçamento."}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank", "noopener,noreferrer");
        closeModal();
      });
    }
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Service Triggers
  document.querySelectorAll("[data-service]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const key = el.getAttribute("data-service");
      const data = SERVICES_DATA[key];
      if (!data) return;
      const waText = encodeURIComponent(
        `Olá, Barão da Informática! Vim pelo site e gostaria de um orçamento para *${data.title}*.`
      );
      openModal(`
        <div class="relative overflow-hidden">
          <div class="relative h-52 w-full overflow-hidden bg-apple-black">
            <img src="${data.image}" alt="${data.title}" class="h-full w-full object-cover opacity-85" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <button type="button" data-close-modal class="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/80 cursor-pointer" aria-label="Fechar">
              ✕
            </button>
            <div class="absolute bottom-4 left-6 right-6">
              <span class="inline-block rounded-full bg-[#015294] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">${data.tag}</span>
              <h3 class="mt-2 text-2xl font-semibold text-white">${data.title}</h3>
            </div>
          </div>
          <div class="p-6 md:p-8">
            <p class="text-[15px] leading-relaxed text-apple-gray-2">${data.description}</p>
            <h4 class="mt-6 text-[13px] font-semibold uppercase tracking-wider text-apple-black">Sintomas atendidos:</h4>
            <ul class="mt-3 space-y-2">
              ${data.symptoms
                .map(
                  (s) => `
                <li class="flex items-start gap-2.5 text-[14px] text-apple-black/85">
                  <span class="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#015294]/15 text-[11px] font-bold text-[#015294]">✓</span>
                  <span>${s}</span>
                </li>`
                )
                .join("")}
            </ul>
            <div class="mt-6 rounded-2xl bg-apple-light p-4 text-[13.5px] leading-relaxed text-apple-black/90">
              <strong class="text-[#015294]">Diferencial Barão da Informática:</strong> ${data.highlights}
            </div>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waText}" target="_blank" rel="noopener noreferrer" class="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-apple-blue px-6 py-3.5 text-[15px] font-medium text-white transition hover:bg-apple-blue-hover cursor-pointer">
                Solicitar orçamento no WhatsApp
              </a>
              <button type="button" data-close-modal class="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-3.5 text-[14px] font-medium text-apple-black transition hover:bg-apple-light cursor-pointer">
                Voltar
              </button>
            </div>
          </div>
        </div>
      `);
    });
  });

  // Brand Triggers
  document.querySelectorAll("[data-brand]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const key = el.getAttribute("data-brand");
      const data = BRANDS_DATA[key];
      if (!data) return;
      const waText = encodeURIComponent(
        `Olá, Barão da Informática! Preciso de assistência técnica especializada para meu equipamento *${data.name}*.`
      );
      openModal(`
        <div class="p-6 md:p-8">
          <div class="flex items-start justify-between gap-4">
            <div>
              <span class="inline-block rounded-full bg-[#015294]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#015294]">Especialista na Marca</span>
              <h3 class="mt-2 text-2xl font-semibold text-apple-black">Assistência Técnica ${data.name}</h3>
              <p class="mt-1 text-[13px] font-medium text-apple-gray">${data.lines}</p>
            </div>
            <button type="button" data-close-modal class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-apple-light text-apple-black transition hover:bg-black/10 cursor-pointer" aria-label="Fechar">
              ✕
            </button>
          </div>
          <p class="mt-5 text-[15px] leading-relaxed text-apple-gray-2">${data.description}</p>
          <div class="mt-6 grid grid-cols-2 gap-3 text-[13px]">
            <div class="rounded-xl bg-apple-light p-3.5">
              <p class="font-semibold text-apple-black">Reparo Especializado</p>
              <p class="mt-0.5 text-apple-gray-2">Manutenção e microsolda com esquemáticos da marca</p>
            </div>
            <div class="rounded-xl bg-apple-light p-3.5">
              <p class="font-semibold text-apple-black">Peças & Acessórios</p>
              <p class="mt-0.5 text-apple-gray-2">Telas, baterias, teclados, fontes e upgrades</p>
            </div>
          </div>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waText}" target="_blank" rel="noopener noreferrer" class="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-apple-blue px-6 py-3.5 text-[15px] font-medium text-white transition hover:bg-apple-blue-hover cursor-pointer">
              Orçamento para ${data.name} no WhatsApp
            </a>
            <button type="button" data-close-modal class="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-3.5 text-[14px] font-medium text-apple-black transition hover:bg-apple-light cursor-pointer">
              Fechar
            </button>
          </div>
        </div>
      `);
    });
  });

  // Contact Form Trigger
  document.querySelectorAll("[data-open-contact]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(`
        <div class="p-6 md:p-8">
          <div class="flex items-start justify-between gap-4">
            <div>
              <span class="inline-block rounded-full bg-[#015294]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#015294]">Atendimento Rápido</span>
              <h3 class="mt-2 text-2xl font-semibold text-apple-black">Solicitar Orçamento — Barão da Informática</h3>
              <p class="mt-1 text-[14px] text-apple-gray-2">Rua Pará, 447 - Centro, Luís Eduardo Magalhães - BA</p>
            </div>
            <button type="button" data-close-modal class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-apple-light text-apple-black transition hover:bg-black/10 cursor-pointer" aria-label="Fechar">
              ✕
            </button>
          </div>
          <form id="bi-quote-form" class="mt-6 space-y-4">
            <div>
              <label class="block text-[13px] font-medium text-apple-black mb-1">Seu nome</label>
              <input type="text" name="nome" required placeholder="Ex: Lucas Silva" class="w-full rounded-xl border border-black/15 px-4 py-2.5 text-[14px] text-apple-black outline-none focus:border-apple-blue" />
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="block text-[13px] font-medium text-apple-black mb-1">Marca e Modelo</label>
                <input type="text" name="aparelho" required placeholder="Ex: Dell Inspiron / MacBook Air / PC Gamer" class="w-full rounded-xl border border-black/15 px-4 py-2.5 text-[14px] text-apple-black outline-none focus:border-apple-blue" />
              </div>
              <div>
                <label class="block text-[13px] font-medium text-apple-black mb-1">Serviço desejado</label>
                <select name="servico" class="w-full rounded-xl border border-black/15 px-4 py-2.5 text-[14px] text-apple-black outline-none focus:border-apple-blue bg-white">
                  <option value="Reparo de Placa-Mãe / Não liga">Reparo de Placa-Mãe / Não liga</option>
                  <option value="Troca de Tela Quebrada">Troca de Tela Quebrada</option>
                  <option value="Troca de Bateria">Troca de Bateria</option>
                  <option value="Upgrade SSD / Memória RAM">Upgrade SSD / Memória RAM</option>
                  <option value="Higienização Térmica / Limpeza">Higienização Térmica / Limpeza</option>
                  <option value="Reparo de Carcaça / Dobradiça">Reparo de Carcaça / Dobradiça</option>
                  <option value="Troca de Teclado / Peças">Troca de Teclado / Peças</option>
                  <option value="Formatação / Windows / macOS">Formatação / Windows / macOS</option>
                  <option value="Atendimento Empresarial (B2B)">Atendimento Empresarial (B2B)</option>
                  <option value="Outro / Diagnóstico">Outro / Diagnóstico</option>
                </select>
              </div>
            </div>
            <div>
              <label class="block text-[13px] font-medium text-apple-black mb-1">Descreva o defeito ou necessidade</label>
              <textarea name="detalhes" rows="3" placeholder="Conte brevemente o que está acontecendo..." class="w-full rounded-xl border border-black/15 px-4 py-2.5 text-[14px] text-apple-black outline-none focus:border-apple-blue"></textarea>
            </div>
            <div class="pt-2 flex flex-col gap-3 sm:flex-row">
              <button type="submit" class="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-apple-blue px-6 py-3.5 text-[15px] font-medium text-white transition hover:bg-apple-blue-hover cursor-pointer">
                Enviar para Especialista no WhatsApp →
              </button>
              <button type="button" data-close-modal class="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-3.5 text-[14px] font-medium text-apple-black transition hover:bg-apple-light cursor-pointer">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      `);
    });
  });

  // 5. Interactive Diagnostics & Quote Simulator
  const SIMULATOR_DATABASE = {
    "nao-liga": {
      title: "Diagnóstico Eletrônico & Reparo de Placa-Mãe",
      tag: "Microsolda & Eletrônica",
      badge: "Economia de até 70%",
      solution: "Análise minuciosa de linhas primárias e secundárias, circuito de carga (charger/DC-jack), VRM e desoxidação química com microscópio.",
      turnaround: "Diagnóstico ágil em bancada no Centro de LEM",
      tip: "Não tente ligar repetidamente se houve contato com líquido ou cheiro de queimado."
    },
    "tela": {
      title: "Troca e Reparo de Tela Display",
      tag: "Telas LCD · LED · OLED · Retina",
      badge: "Peças Originais OEM",
      solution: "Substituição do painel quebrado ou com linhas por modelos compatíveis de alta fidelidade de cor, taxa de atualização (Hz) e brilho.",
      turnaround: "Pronta entrega ou sob encomenda rápida",
      tip: "Verificamos também o flat cable e o circuito de backlight para garantir imagem perfeita."
    },
    "lento-upgrade": {
      title: "Upgrade de Desempenho (SSD NVMe & Memória RAM)",
      tag: "Velocidade até 10x Maior",
      badge: "Mesmo Dia / Rápido",
      solution: "Substituição de HD antigo por SSD NVMe Gen3/Gen4 de altíssima velocidade e expansão de memória RAM com clonagem segura dos seus arquivos.",
      turnaround: "Serviço executado com agilidade na loja",
      tip: "Seu notebook ou PC inicializará em menos de 10 segundos e abrirá programas instantaneamente."
    },
    "bateria-fonte": {
      title: "Troca de Bateria & Fonte / Carregador",
      tag: "Energia & Autonomia",
      badge: "Segurança Certificada",
      solution: "Baterias novas com células de alta durabilidade para notebooks e MacBooks, além de carregadores originais e reparo de conectores de carga.",
      turnaround: "Avaliação imediata no balcão",
      tip: "Baterias estufadas devem ser trocadas imediatamente para não danificar o touchpad e carcaça."
    },
    "aquecimento": {
      title: "Higienização Preventiva & Revisão Térmica",
      tag: "Prevenção Térmica",
      badge: "Evita Queima de Chipset",
      solution: "Desmontagem completa, limpeza profunda de ventoinhas e dutos, e aplicação de pasta térmica de alta condutividade térmica (prata / cerâmica).",
      turnaround: "Revisão completa no mesmo dia",
      tip: "Essencial a cada 12 meses para evitar quedas de FPS, lentidão e queima de GPU."
    },
    "formatacao": {
      title: "Formatação Limpa, Reinstalação de SO & Backup",
      tag: "Windows 11 · macOS",
      badge: "Backup Seguro",
      solution: "Reinstalação otimizada sem programas desnecessários, configuração de drivers oficiais, segurança contra vírus e restauração dos seus arquivos.",
      turnaround: "Pronto com rapidez e segurança",
      tip: "Trabalhamos com sigilo absoluto e preservação total dos seus dados e fotos."
    },
    "pecas-loja": {
      title: "Peças, Periféricos e Acessórios na Loja Física",
      tag: "Estoque no Centro de LEM",
      badge: "Pronta Entrega",
      solution: "Amplo catálogo de teclados, mouses, headsets gamer, adaptadores HDMI/Type-C, cabos de rede, suportes e peças para reposição.",
      turnaround: "Disponível para retirada no balcão",
      tip: "Passe na Rua Pará, 447 para testar e retirar na hora com nota e garantia."
    }
  };

  let currentDevice = "Notebook";
  let currentIssue = "lento-upgrade";

  const deviceBtns = document.querySelectorAll("[data-sim-device]");
  const issueBtns = document.querySelectorAll("[data-sim-issue]");
  const resultCard = document.getElementById("sim-result-card");

  function updateSimulator() {
    const data = SIMULATOR_DATABASE[currentIssue];
    if (!data || !resultCard) return;

    const waMsg = `Olá, Barão da Informática! Usei o simulador do site.\n• Equipamento: *${currentDevice}*\n• Serviço/Necessidade: *${data.title}*\n• Gostaria de saber mais e solicitar um orçamento!`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

    resultCard.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-4">
        <div>
          <span class="inline-block rounded-full bg-[#015294]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#015294]">${data.tag}</span>
          <h4 class="mt-2 text-xl font-bold text-apple-black">${data.title}</h4>
        </div>
        <span class="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-[12px] font-semibold text-emerald-700">
          ✓ ${data.badge}
        </span>
      </div>
      <div class="mt-5 space-y-4 text-[14px]">
        <p class="leading-relaxed text-apple-gray-2">${data.solution}</p>
        <div class="grid gap-3 sm:grid-cols-2">
          <div class="rounded-xl bg-apple-light p-3.5">
            <p class="text-[12px] font-semibold uppercase text-apple-black">Prazo Estimado</p>
            <p class="mt-0.5 text-[13px] text-apple-gray-2">${data.turnaround}</p>
          </div>
          <div class="rounded-xl bg-apple-light p-3.5">
            <p class="text-[12px] font-semibold uppercase text-apple-black">Garantia Barão</p>
            <p class="mt-0.5 text-[13px] text-apple-gray-2">90 dias com laudo e suporte local</p>
          </div>
        </div>
        <div class="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3.5 text-[13px] text-amber-900 p-2">
          <strong>💡 Dica do Técnico:</strong> ${data.tip}
        </div>
      </div>
      <div class="mt-6 flex flex-col gap-3 sm:flex-row">
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-barao inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium text-white shadow-lg transition">
          Consultar este Caso no WhatsApp →
        </a>
        <a href="#localizacao" class="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-3.5 text-[14px] font-medium text-apple-black transition hover:bg-apple-light">
          Trazer à Loja Física
        </a>
      </div>
    `;
  }

  deviceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      deviceBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentDevice = btn.getAttribute("data-sim-device");
      updateSimulator();
    });
  });

  issueBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      issueBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentIssue = btn.getAttribute("data-sim-issue");
      updateSimulator();
    });
  });

  if (resultCard) {
    updateSimulator();
  }

  // 6. Copy Address Button
  const copyBtn = document.getElementById("copy-address-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const address = "Rua Pará, 447, Centro, Luís Eduardo Magalhães - BA, CEP 47850-051";
      navigator.clipboard.writeText(address).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = "✓ Endereço Copiado!";
        copyBtn.classList.add("bg-emerald-600", "text-white");
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.classList.remove("bg-emerald-600", "text-white");
        }, 2200);
      });
    });
  }

});