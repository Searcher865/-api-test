export class PageSpeed {

    async checkYellowValue(performance, firstContentfulPaint, speedIndex, largestContentfulPaint, totalBlockingTime, interactive, cumulativeLayoutShift) {
        let result = true
        if (performance <= 50) {result = false }
        console.log(performance);
        
        // if (firstContentfulPaint >= 3.0) {result = false }
        // if (speedIndex >= 5.8) {result = false }
        // if (largestContentfulPaint >= 4.0) {result = false }
        // if (totalBlockingTime >= 600) {result = false }
        // if (interactive >= 7.3) {result = false }
        // if (cumulativeLayoutShift >= 0.25) {result = false }
        return result
    }

    async checkGreenValue(performance, firstContentfulPaint, speedIndex, largestContentfulPaint, totalBlockingTime, interactive, cumulativeLayoutShift) {
        let result = true
        if (performance <= 90) {result = false }
        // if (firstContentfulPaint >= 1.8) {result = false }
        // if (speedIndex >= 3.4) {result = false }
        // if (largestContentfulPaint >= 2.5) {result = false }
        // if (totalBlockingTime >= 200) {result = false }
        // if (interactive >= 3.8) {result = false }
        // if (cumulativeLayoutShift >= 0.1) {result = false }
        return result
    }
}
export const pageSpeed = new PageSpeed() 