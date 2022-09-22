import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

//даты для функции
const dateIn = '25-09-2022';
const dateOut = '25-11-2022';


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Dima Shik','/img/dimaAva.jpeg', 120)
  renderSearchFormBlock(dateIn, dateOut)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
