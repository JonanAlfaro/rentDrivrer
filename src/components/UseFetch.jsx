import { PropTypes } from 'prop-types'
import Axios from 'axios'
import {useEffect,useState} from 'react'

const config = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000
});



const useFetch = ({url, type, info}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const fetchData = async ()=>{
            try {
                const response;
                switch(type){
                    case 'get':
                        response = await Axios.get(url, config)
                    break;
                    case 'post':
                        response = await Axios.post(url,info,config)
                    break;
                    case 'put':
                        response = await Axios.put(url,info,config)
                    break;
                    case 'delete':
                        response = await Axios.delete(url, config)
                    break;
                }
                setData(response)
                setLoading(false)
            }
            catch(error){
                if(Axios.isCancel(error)){
                    console.log("caught cancel")
                }
                else {
                    throw error
                }
            }
        }
        fetchData()
    }, [url])
    return [data, loading]
    }

useFetch.propTypes = {
    url: PropTypes.string.isRequired
}
export default useFetch 