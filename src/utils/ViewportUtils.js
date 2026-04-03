export class ViewportUtils {
    /**
     * Returns the index of the last section (from a list of {id} items) whose top
     * is in the upper half of the viewport. Falls back to 0 if none qualify.
     *
     * @param {Array<{id: string}>} sections
     * @returns {number}
     */
    static getActiveSectionIndex(sections) {
        let selected = 0;
        sections.forEach((item, index) => {
            if (item?.id) {
                const element = document.getElementById(item.id);
                if (!element) return;
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight / 2) {
                    selected = index;
                }
            }
        });
        return selected;
    }
}

export default ViewportUtils;