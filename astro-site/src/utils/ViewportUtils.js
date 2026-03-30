export class ViewportUtils {
    /**
     * Returns true if the web element passed as a parameter is inside the viewport
     * of the browser, false otherwise
     *
     * @param {Element} element 
     * @returns {boolean}
     */
    static isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
    
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

export default ViewportUtils;