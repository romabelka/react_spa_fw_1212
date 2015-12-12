import $ from 'jquery'

export function loadAll() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $.get('/api/article').then(resolve, reject)
        }, 1000)
    })
}
export function loadById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $.get(`/api/article/${id}`).then(resolve, reject)
        }, 1000)
    })
}