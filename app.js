var encodedecode = document.querySelector('.encode-decode');
var text = document.querySelector('.text');
var encodedecodetext = document.querySelector('.encode-decode-text');

function encodetext(){
        if(encodedecode.value == "encode"){
        encodedecodetext.value = btoa(text.value);
    }else if(encodedecode.value == "decode"){
        encodedecodetext.value = text.value;
    }
}