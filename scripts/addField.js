document.querySelector('#add-time')
.addEventListener('click', cloneField)


function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //node = refere-se a uma tag html = no

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        field.value = ''
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}