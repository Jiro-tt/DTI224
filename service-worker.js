self.addEventListener("install",(event)=>{
  event.waitUntil(
    caches.open('pwa-cache').then((cache)=>{
      return caches.addAll([
        ])
    })
  )
});
self.addEventListener("fetch",(event)=>{

});
  
