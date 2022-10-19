import { renderBlock } from "./lib.js";
import { getUserData } from "./user.js";
import { ISearchFormData } from "./interfaces.js";

function addZero(num) {
  if (num >= 0 && num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}

//функция ко второму пункту дз
function search(
  startRentDate: string,
  checkOutDate: string,
  maxPrice?: number | null
): void {
  findArgument(startRentDate);
  findArgument(checkOutDate);
  findArgument(maxPrice);
}

function findArgument(arg): void {
  console.log(arg);
}

//в комментариях код для варианта с переданными

export function renderSearchFormBlock() {
  const date = new Date();

  const startRentDate = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1
  )}-${addZero(date.getDate() + 1)}`;

  const lastDay = new Date();
  lastDay.setFullYear(date.getFullYear(), date.getMonth() + 2, 0);
  const maxDate = `${lastDay.getFullYear()}-${addZero(
    lastDay.getMonth() + 1
  )}-${lastDay.getDate()}`;

  let checkOutDate = "";
  let checkOutDateMin = "";
  let checkinDate;
  let maxPrice = 0;

  function sendDatesAndPrise(event) {
    event.preventDefault();
    console.log("click: ", checkinDate, checkOutDate, maxPrice);
  }

  function handlerSubmitForm(event) {
    event.preventDefault();
    const checkin = form.checkin.value;
    checkinDate = form.checkin.value;
    const checkInArr = checkin.split("-");

    checkOutDateMin = `${checkInArr[0]}-${checkInArr[1]}-${
      Number(checkInArr[2]) + 2
    }`;

    form.checkout.min = checkOutDateMin;
    checkOutDate = form.checkout.value;
    maxPrice = form.price.value;
  }

  //render HTML
  renderBlock(
    "search-form-block",
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
            <input id="check-out-date" type="date"  min="${checkOutDateMin}"  name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value=${maxPrice} name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );

  //после рендера присваиваем переменной нужный нам блок и навешиваем событие для автоматического изменения минимальной даты выезда
  const form = document.querySelector("form");
  const button = document.querySelector("button");

  button.addEventListener("click", sendDatesAndPrise);
  form.addEventListener("change", handlerSubmitForm);
  //вызываем функции search
  search(startRentDate, checkOutDate, maxPrice);
}
