export class ViewportUtils {
    /**
     * Returns the index of the last section (from a list of {id} items) whose top
     * is in the upper half of the viewport. Falls back to 0 if none qualify.
     *
     * @param {Array<{id: string}>} sections
     * @returns {number}
     */
    static getActiveSectionIndex(sections) {
        const viewportHeight = window.innerHeight;
        const lastIdx = sections.length - 1;

        // A section should become active when its content is actually visible to
        // the user — i.e. when its top edge has cleared the fixed nav header.
        // Querying the header's bottom dynamically handles any size/breakpoint.
        const headerEl = document.getElementById('header');
        const threshold = headerEl ? Math.max(1, headerEl.getBoundingClientRect().bottom) : 80;

        let selected = 0;
        let maxVisible = 0;
        let lastVisible = 0;

        sections.forEach((item, index) => {
            if (!item?.id) return;
            const el = document.getElementById(item.id);
            if (!el) return;
            const rect = el.getBoundingClientRect();

            if (rect.top <= threshold) selected = index;

            const visible = Math.max(0, Math.min(viewportHeight, rect.bottom) - Math.max(0, rect.top));
            if (visible > maxVisible) maxVisible = visible;
            if (index === lastIdx) lastVisible = visible;
        });

        // The last section may never reach rect.top <= threshold when the page
        // isn't tall enough to scroll it up that far. Activate it when it's the
        // dominant section: more than 50% of the viewport and more than any other.
        if (selected < lastIdx && lastVisible > viewportHeight * 0.5 && lastVisible >= maxVisible) {
            selected = lastIdx;
        }

        return selected;
    }
}

export default ViewportUtils;