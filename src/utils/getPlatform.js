/**
 * Detects the current OS, returning the same vocabulary as
 * `navigator.userAgentData.platform` ("Windows", "macOS", "Linux",
 * "Android", "iOS", "Chrome OS").
 *
 * `navigator.userAgentData` is Chromium-only, so it's undefined in
 * Firefox and Safari. This falls back to parsing the user-agent string
 * there, keeping platform-dependent logic working across browsers.
 *
 * @export
 * @return {string} the platform name, or '' if it can't be determined
 */
export function getPlatform() {
    // Modern: User-Agent Client Hints (Chromium only)
    const uaDataPlatform = navigator?.userAgentData?.platform
    if (uaDataPlatform) return uaDataPlatform

    // Fallback: parse the user-agent string (Firefox, Safari, older browsers)
    const ua = navigator?.userAgent || ''

    if (/Windows/i.test(ua)) return 'Windows'
    if (/Android/i.test(ua)) return 'Android' // must precede Linux ("Linux; Android")
    if (/iPhone|iPad|iPod/i.test(ua)) return 'iOS'
    if (/Mac OS X|Macintosh/i.test(ua)) return 'macOS'
    if (/CrOS/i.test(ua)) return 'Chrome OS'
    if (/Linux/i.test(ua)) return 'Linux'

    return ''
}
