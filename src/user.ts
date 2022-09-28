import { renderBlock } from './lib.js'


//функции к 1 пункту дз
export function getUserData(key) { 
  return localStorage.getItem(key)
}

export function getFavoritesAmount(key) {
  return localStorage.getItem(key)
}


export function renderUserBlock (userName:string, userAvatar:string,favoriteItemsAmount?:number): void {
  const favoritesCaption = favoriteItemsAmount > 1 ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount > 1  ? true : false
 
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userAvatar}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}

