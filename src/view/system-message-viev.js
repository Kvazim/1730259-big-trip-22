import { SystemMessageList } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

function createSystemMessageTemplate(filterType) {
  return `<p class="trip-events__msg">${SystemMessageList[filterType]}</p>`;
}

export default class SystemMessageView extends AbstractView {
  #messageType = null;

  constructor({messageType}) {
    super();

    this.#messageType = messageType;
  }

  get template() {
    return createSystemMessageTemplate(this.#messageType);
  }
}
