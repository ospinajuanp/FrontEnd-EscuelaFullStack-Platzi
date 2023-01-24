const btn = document.getElementById('btn')

btn.addEventListener('click',async function () {
    const module = await import('./06-dynamic-import-module.mjs')
    console.log(module);
    module.hello()
})