const body = document.querySelector('body')
const url ='http://localhost/wordpress/wp-json/wp/v2'

async function get(){
    const data = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts')
    const json = await data.json()
    console.log(json)

    for(let i in json){


        const li = document.createElement('li')
        li.innerHTML = json[i].title.rendered
        document.querySelector('#list').appendChild(li)


        
    }

    for(let i in json){

        const div = document.createElement('div')
        div.classList.add('divs')

        const p = document.createElement('p')
        p.innerHTML = json[i.title]


        const publish = document.createElement('button')
        publish.innerHTML('publish')


        const pending = document.createElement('button')
        pending.innerHTML('pending')
        pending.addEventListener('click', ()=>{
            changeStatus(json.id, 'pending')
        })

        div.appendChild(p)
        div.appendChild(pending)
        div.appendChild(publish)
        body.appendChild(div)
    }
}
async function changeStatus(id, status){
    const urlObj = new URL(url+`/${id}`)
    const params = {
        status: status
    }

    for( let i in params){
        urlObj.searchParams.append(i, params[i])
    }

    console.log(urlObj)

    const data = await fetch(urlObj, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa('ZmlsaXA6aGFzbG8xMjNoYXNsbw==')}`
        }
    })


}
    
get()