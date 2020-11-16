import Axios from 'axios'


const instanse = Axios.create({
    baseURL: 'https://tinder-clo.herokuapp.com/'
})

export default instanse