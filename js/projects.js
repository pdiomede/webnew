  // image fallbacks (CSP-safe: no inline handlers)
  document.querySelectorAll('.avatar img').forEach(function(img){
    img.addEventListener('error',function(){ this.replaceWith(document.createTextNode('PD')); });
  });
