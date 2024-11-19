const servicios = [
    {
        titulo: "Constitución de Empresas",
        descripcion: "Te ayudamos a constituir tu empresa de manera eficiente, en el menor lapso de tiempo y de acuerdo a tus requerimientos.",
        icono: "corporate_fare",
    },
    {
        titulo: "Asesoría Contable, Laboral y Tributaria",
        descripcion: "Te brindamos asesoría para que cumplas con tus obligaciones contables, laborales y tributarias.",
        icono: "account_balance",
    },
    {
        titulo: "Planeamiento Tributario",
        descripcion: "Desarrollamos estrategias tributarias para optimizar tu carga fiscal.",
        icono: "analytics",
    },
    {
        titulo: "Contabilidad Computarizada y Electrónica",
        descripcion: "Implementamos sistemas contables computarizados para mayor precisión y eficiencia.",
        icono: "computer",
    },
    {
        titulo: "Facturación Electrónica",
        descripcion: "Automatizamos tu proceso de facturación para mayor control y eficiencia.",
        icono: "receipt",
    },
    {
        titulo: "Actualización y Llenado de Libros Contables",
        descripcion: "Nos encargamos de mantener al día tus libros contables según las normativas vigentes.",
        icono: "library_books",
    },
    {
        titulo: "Solicitud de Devolución del IGV",
        descripcion: "Gestionamos la devolución del IGV por detracciones, retenciones, y otros conceptos.",
        icono: "money_off",
    },
    {
        titulo: "Elaboración de Declara Fácil - SIRE - PLAME 601",
        descripcion: "Nos encargamos de la correcta elaboración de tus declaraciones electrónicas.",
        icono: "article",
    },
    {
        titulo: "Presentación de Solicitudes de Reclamación y Apelación",
        descripcion: "Asistimos en la presentación de solicitudes de reclamación ante la SUNAT y el Tribunal Fiscal.",
        icono: "gavel",
    }
];

function generarServicios() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    servicios.forEach(servicio => {
        const slide = document.createElement('div');
        slide.className = "swiper-slide service-item bg-gray-50 p-6 rounded-lg shadow-lg max-w-xs mx-auto service-card";
        slide.innerHTML = `
        <div class="service flex items-center justify-center text-red-600">
            <i class="material-icons">${servicio.icono}</i>
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
