import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { getFavoritesAmount, getUserData, renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";
import { UserI } from "./interfaces.js";
import { APILocal } from "./APILocal.js";
//в комментариях код для варианта с переданными датами
//даты для функции
// const dateIn = '25-09-2022';
// const dateOut = '25-11-2022';

//создаем интерфейс и объект юзера и отправляем в локалСтораж

const user: UserI = {
  userName: "Dima Shikalov",
  avatarUrl: "/img/dimaAva.jpeg",
};

//запись в локал необходимых данных
APILocal.set("user", JSON.stringify(user));
APILocal.set("favoritesAmount", "5");

//получение данных с ЛС
const localUser = getUserData("user");
const favoritesAmount = getFavoritesAmount("favoritesAmount");

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock(
    localUser.userName,
    localUser.avatarUrl,
    Number(favoritesAmount)
  );
  // renderSearchFormBlock(dateIn, dateOut)
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления. Используйте его при необходимости",
      type: "success",
    },
    {
      name: "Понял",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );
});
