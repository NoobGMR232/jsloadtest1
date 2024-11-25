console.log('Malicious script loaded.');

(async function testFetch() {
    console.log('Testing fetch from malicious.js...');
    try {
        const response = await fetch('https://httpbin.org/get', { method: 'GET', mode: 'no-cors' });
        console.log('Fetch success:', response);
    } catch (error) {
        console.error('Fetch failed:', error);
    }
})();
