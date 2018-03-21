document.addEventListener("beforeload", handleBeforeLoad , true);

function handleBeforeLoad() {
    document.removeEventListener("beforeload", handleBeforeLoad, true)

    var bitskiScript = document.createElement('script');
    bitskiScript.type = 'text/javascript';
    bitskiScript.src = safari.extension.baseURI + 'bitski.js';
    document.head.appendChild(bitskiScript);

    var initializeScript = document.createElement('script');
    initializeScript.type = 'text/javascript';
    initializeScript.src = safari.extension.baseURI + 'initialize.js';
    document.head.appendChild(initializeScript);
}
