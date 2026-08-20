self.addEventListener("install",(event)=>{
  event.waitUntil(
    caches.open('pwa-cache').then((cache)=>{
      return caches.addAll([
        'https://jiro-tt.github.io/DTI224/'.
        'index.html',
        'style.css'
      ]);
    })
  );
});

self.addEventListener("fetch",(event)=>{
  event.respondWith(
    caches.match(event,request).then((response)=>{
      return response || fetch(event,request);
    })
  );
});
