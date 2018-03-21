var knownClientIDs = {
    "wallet.ethereum.org": "0ihGY4L3PDWOlud1ohYLQMwilw14_k1Q4ydEq5tykCxs0UYqO5CPBmih4886fdCB",
    "tugofwar.io": "0ihGY4L3PDWOlud1ohYLQMwilw14_k1Q4ydEq5tykCxs0UYqO5CPBmih4886fdCC",
    "www.gameofblocks.io": "0ihGY4L3PDWOlud1ohYLQMwilw14_k1Q4ydEq5tykCxs0UYqO5CPBmih4886fdCD"
}

var hostname = window.location.hostname;
var knownClientID = knownClientIDs[hostname];

if (knownClientID) {
    window.web3 = bitski.InitializeWeb3(knownClientID, 'rinkeby');
} else {
    // TODO: Make this work, maybe native app?
    // window.web3 = bitski.InitializeWeb3('0ihGY4L3PDWOlud1ohYLQMwilw14_k1Q4ydEq5tykCxs0UYqO5CPBmih4886fdCA', 'rinkeby', 'bitski://application/auth-callback', 'bitski://application/auth-callback');
}


