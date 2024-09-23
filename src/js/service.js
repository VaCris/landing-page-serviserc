const servicios = [
    {
        titulo: "Constitución de Empresas",
        descripcion: "Te ayudamos a constituir tu empresa de manera eficiente y conforme a la ley.",
        icono: "M12 6v6l4 2",
    },
    {
        titulo: "Asesoría Contable, Laboral y Tributaria",
        descripcion: "Te brindamos asesoría para que cumplas con tus obligaciones contables, laborales y tributarias.",
        icono: "M21 12H3m18 0c0-4.97-4.03-9-9-9",
    },
    {
        titulo: "Planeamiento Tributario",
        descripcion: "Desarrollamos estrategias tributarias para optimizar tu carga fiscal.",
        icono: "M3 7.5h18M3 12h18M3 16.5h18M4.5 4.5h15m-15 15h15",
    },
    {
        titulo: "Contabilidad Computarizada y Electrónica",
        descripcion: "Implementamos sistemas contables computarizados para mayor precisión y eficiencia.",
        icono: "M4.5 12l1.5 1.5 3-3m-1.5 4.5L9 12m6 0h6m-9-3h3m-1.5 3l3 3M12 6h9",
    },
    {
        titulo: "Facturación Electrónica",
        descripcion: "Automatizamos tu proceso de facturación para mayor control y eficiencia.",
        icono: "M4.5 4.5h15m-15 15h15M4.5 4.5V12m0 7.5V12m15 7.5V12m0-7.5V12M3 12h18M12 21v-6.75M12 21v-6.75M12 12v-1.5M12 12v1.5",
    },
    {
        titulo: "Actualización y Llenado de Libros Contables",
        descripcion: "Nos encargamos de mantener al día tus libros contables según las normativas vigentes.",
        icono: "M4.5 6h15m-15 15h15M4.5 6v12m15-12v12M4.5 18H12v-3H4.5m15 3h-4.5v-3H19.5",
    },
    {
        titulo: "Solicitud de Devolución del IGV",
        descripcion: "Gestionamos la devolución del IGV por detracciones, retenciones, y otros conceptos.",
        icono: "M9 9v6h6V9H9zM7.5 6h9v12h-9V6z",
    },
    {
        titulo: "Elaboración de Declara Fácil - PLAME 601 SIRE",
        descripcion: "Nos encargamos de la correcta elaboración de tus declaraciones electrónicas.",
        icono: "M3 12h18M12 6v6m0 0v6",
    },
    {
        titulo: "Presentación de Solicitudes de Reclamación y Apelación",
        descripcion: "Asistimos en la presentación de solicitudes de reclamación ante la SUNAT y el Tribunal Fiscal.",
        icono: "M4.5 6h15m-15 15h15M4.5 6v12m15-12v12M4.5 18H12v-3H4.5m15 3h-4.5v-3H19.5",
    },
    {
        titulo: "Venta de Libros Contables y Legalización",
        descripcion: "Ofrecemos la venta de libros contables y su legalización ante las autoridades competentes.",
        icono: "M4.5 6h15m-15 15h15M4.5 6v12m15-12v12M4.5 18H12v-3H4.5m15 3h-4.5v-3H19.5",
    },
];

function generarServicios() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    servicios.forEach(servicio => {
        const slide = document.createElement('div');
        slide.className = "swiper-slide service-item bg-gray-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto service-card";
        slide.innerHTML = `
        <div class="service flex items-center justify-center text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="${servicio.icono}" />
          </svg>
        </div>
        <h4 class="mt-4 text-xl font-semibold">${servicio.titulo}</h4>
        <p class="mt-2 text-gray-600">${servicio.descripcion}</p>
      `;
        swiperWrapper.appendChild(slide);
        serviceObserver.observe(slide);
    });
}
const serviceOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01
};

const serviceCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            serviceObserver.unobserve(entry.target);
        }
    });
};

const serviceObserver = new IntersectionObserver(serviceCallback, serviceOptions);
generarServicios();
