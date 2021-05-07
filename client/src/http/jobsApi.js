import { host } from "."

export const createJob = async(profession,experience,salary,location,author,phone,social,img) => {    
    const {data} = await host.post('api/jobs/createjob', {profession,experience,salary,author,location,author,phone,social,img})
    return data
}
export const getResume = async (id) => {
    const data = await host.get('api/jobs/resume/?id=' + id)
    console.log(data +  " - " + id)
    return data
}