async function initPanorama() {
    data.products.forEach(product => {

        markersPlugin.addMarker({

            id: product.id,

            longitude: product.longitude,
            latitude: product.latitude,

            image: './images/hotspot.png',

            width: 42,
            height: 42,

            anchor: 'bottom center',

            tooltip: product.title,

            data: product
        });
    });

    markersPlugin.addEventListener('select-marker', ({ marker }) => {

        const product = marker.data;

        document.getElementById('akv-product-title').innerText =
            product.title;

        document.getElementById('akv-product-description').innerText =
            product.description;

        document.getElementById('akv-product-image').src =
            product.image;

        document.getElementById('akv-product-panel')
            .classList.add('active');

    });
}

window.addEventListener('load', initPanorama);

const closeBtn = document.getElementById('akv-close-panel');

if (closeBtn) {

    closeBtn.addEventListener('click', () => {

        document.getElementById('akv-product-panel')
            .classList.remove('active');

    });
}
