import { renderBlock } from './lib.js';

import { UserI } from './interfaces.js';
import { APILocal } from './APILocal';

//функции к 1 пункту дз
export function getUserData(key): UserI | null {
  const lsUser = APILocal.get(key);
  if (lsUser) {
    const user = JSON.parse(lsUser);
    if (typeof user === 'object' && 'userName' in user && 'avatarUrl' in user) {
      return { userName: user['userName'], avatarUrl: user['avatarUrl'] };
    }
  }

  return null;
}

export function getFavoritesAmount(key): number {
  const amount: unknown = APILocal.get(key);
  if (!isNaN(Number(amount))) {
    return Number(amount);
  } else {
    return 0;
  }
}

export function renderUserBlock(
  userName: string,
  userAvatar: string,
  favoriteItemsAmount?: number
): void {
  const favoritesCaption =
    favoriteItemsAmount > 1 ? favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount > 1 ? true : false;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userAvatar}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${
  hasFavoriteItems ? ' active' : ''
}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}
