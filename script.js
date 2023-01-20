const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-18', '01-19', '01-20'],
    water: ['01-19', '01-20'],
    exercises: ['01-20', '01-21'],
    study: ['01-18']
}

nlwSetup.setData(data)
nlwSetup.load()