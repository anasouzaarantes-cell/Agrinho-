// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MENU RESPONSIVO (HAMBÚRGUER)
    const btnMenu = document.getElementById("btnMenu");
    const navMenu = document.getElementById("navMenu");

    btnMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em qualquer link (Modo Mobile)
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // 2. INTERAÇÃO DO BOTÃO DE TECNOLOGIA (ALERTA INTERATIVO)
    const btnAlerta = document.getElementById("btnAlerta");
    
    btnAlerta.addEventListener("click", () => {
        alert("📊 Estatística de Impacto:\nA agricultura de precisão reduz em até 30% o uso de defensivos e economiza até 25% de água no manejo controlado!");
    });

    // 3. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
    const formContato = document.getElementById("formContato");

    formContato.addEventListener("submit", (event) => {
        // Impede o recarregamento padrão da página
        event.preventDefault();

        // Captura os valores inseridos
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        // Exibe uma mensagem de sucesso elegante
        alert(`Obrigado pelo contato, ${nome}!\nEnviamos uma confirmação simulada para o e-mail: ${email}.`);
        
        // Limpa os campos do formulário
        formContato.reset();
    });
});
