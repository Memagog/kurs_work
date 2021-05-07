import { host } from "."

export const createEvent = async(title,description,price,profession,location,people,author,phone,social,img) => {    
    const {data} = await host.post('api/events/create', {title,description,price,profession,location,people,author,phone,social,img})
    return data
}

export const getEvents = async() => {
    const {data} = await host.get('api/events/events')
    return data
}

export const getOneEvent = async(id) => {
    console.log(id + " IDDD")
    const {data} = await host.get('api/events/?id=' + id)
    return data
}
export const getAuthor = async(id) => {
    console.log(id + "Author Id")
    const {data} = await host.get('api/events/author/?id=' + id)
    return data
} 

export const myEvents = async (id) => {
    const data = await host.get('api/user/events/?id=' + id)
    console.log(data +  " - " + id)
    return data
}