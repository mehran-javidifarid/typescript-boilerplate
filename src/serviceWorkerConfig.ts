export async function onUpdate(registration:any) {
    const event = new Event("newContentAvailable");
    window.dispatchEvent(event);

    window.addEventListener('getUpdateFromServer',()=>{
        registration.unregister().then(() => {
            if(window.caches){
                window.caches.keys().then(function(cacheNames) {
                    cacheNames.forEach(function(cacheName) {
                        window.caches.delete(cacheName);
                    });
                });
                window.location.reload()
            }
        })
    })
}

export async function onSuccess(registration:any) {
    const event = new Event("newContentUpdated");
    window.dispatchEvent(event);
}