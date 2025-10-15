

// botão de voltar ao topo
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("botao-topo").style.display = "flex";
    } else {
        document.getElementById("botao-topo").style.display = "none";
    }
};

// rolagem suave ao topo
document.addEventListener('DOMContentLoaded', function() {
    const botaoTopo = document.getElementById("botao-topo");
    if (botaoTopo) {
        botaoTopo.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    // menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('change', function() {
            document.body.classList.toggle('menu-aberto', this.checked);
        });
    }

    // Fecha o menu 
    const menuLinks = document.querySelectorAll('.menu-lista a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuToggle && window.innerWidth <= 768) {
                menuToggle.checked = false;
                document.body.classList.remove('menu-aberto');
            }
        });
    });
});