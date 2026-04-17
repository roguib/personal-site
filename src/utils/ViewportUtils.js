export class ViewportUtils {
    /**
     * Returns the index of the section whose bounding box crosses the vertical
     * center of the visible content area (viewport minus fixed header). If no
     * section straddles the center, falls back to the nearest section, with
     * explicit pins for the top and bottom of the page.
     *
     * @param {Array<{id: string}>} sections
     * @returns {number}
     */
    static getActiveSectionIndex(sections) {
        const viewportHeight = window.innerHeight;
        const lastIdx = sections.length - 1;
        if (lastIdx < 0) return 0;

        // Pin top/bottom so the first/last nav item is always highlighted at the
        // page extremes, even when the section doesn't fill the content area.
        const scrollY = window.scrollY || window.pageYOffset || 0;
        const docHeight = document.documentElement.scrollHeight;
        if (scrollY <= 0) return 0;
        if (scrollY + viewportHeight >= docHeight - 1) return lastIdx;

        const headerEl = document.getElementById('header');
        const headerBottom = headerEl ? Math.max(0, headerEl.getBoundingClientRect().bottom) : 0;
        const centerY = headerBottom + (viewportHeight - headerBottom) / 2;

        let nearestIdx = 0;
        let nearestDist = Infinity;

        for (let index = 0; index <= lastIdx; index++) {
            const item = sections[index];
            if (!item?.id) continue;
            const el = document.getElementById(item.id);
            if (!el) continue;
            const rect = el.getBoundingClientRect();

            if (rect.top <= centerY && rect.bottom > centerY) return index;

            const dist = Math.abs((rect.top + rect.bottom) / 2 - centerY);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearestIdx = index;
            }
        }

        return nearestIdx;
    }
}

export default ViewportUtils;