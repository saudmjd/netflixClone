// Event listen
// Loop through array

const featureItems = document.querySelectorAll('.feature-unit');
const featureContentItems = document.querySelectorAll('.feature-content-unit');

// Select feature content item
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add Border to current feature
    this.classList.add('feature-border');
    // Grab content item from DOM
    const featureContentItem = document.querySelector(`#${this.id}-content`);
    // Add show
    featureContentItem.classList.add('show');
}

function removeBorder() {
    featureItems.forEach(item => item.classList.remove('feature-border'));
}

function removeShow() {
    featureContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for feature click
featureItems.forEach(item => item.addEventListener('click', selectItem));