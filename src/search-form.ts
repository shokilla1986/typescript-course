import { renderBlock } from './lib.js'

export function renderSearchFormBlock() {
  function addZero(num) {
    if (num >= 0 && num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  }
  //
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`
  const startRentDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate() + 1)}`
  
  const lastDay = new Date()
  lastDay.setFullYear(date.getFullYear(), date.getMonth() + 2, 0)
  const maxDate = `${lastDay.getFullYear()}-${addZero(lastDay.getMonth() + 1)}-${lastDay.getDate()}`
  
  let checkOutDate = ''  
  
  //render HTML 
  renderBlock(
    'search-form-block',
    `
    <form >
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" min=${startRentDate} max=${maxDate} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDate}" min="${checkOutDate}"  name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )

  const form = document.querySelector('form');
 
  
  function handlerSubmitForm(event) {
    event.preventDefault();
    const checkin = form.checkin.value;
    const checkInArr = checkin.split('-')
  
    const checkinDate = new Date(checkInArr[0], Number(checkInArr[1]) - 1, Number(checkInArr[2]) + 2)
    checkOutDate = `${checkinDate.getFullYear()}-${addZero(checkinDate.getMonth() + 1)}-${addZero(checkinDate.getDate())}`
    form.checkout.min = checkOutDate;    
  }
  
  form.addEventListener('change', handlerSubmitForm)
  // if (form !=null) {
    
  // }
  
}
