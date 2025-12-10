function crearAnimacion() {
    const copo = document.createElement('div');
    copo.classList.add('snowflake');
    copo.textContent = '❄';

    // Posición horizontal aleatoria
    copo.style.left = Math.random() * window.innerWidth + 'px';

    // Tamaño aleatorio
    copo.style.fontSize = (Math.random() * 20 + 10) + 'px';

    // Duración aleatoria de la caída
    copo.style.animationDuration = (Math.random() * 5 + 5) + 's';

    // Añadir al body
    document.body.appendChild(copo);

    // Remover después de la animación
    setTimeout(() => copo.remove(), parseFloat(copo.style.animationDuration) * 1000);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setInterval(crearAnimacion, 200);
});