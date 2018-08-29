/* global window, document, Event */

export default (route) => {
  window.history.pushState({}, '', route);
  const historyEvent = new Event('historyChange', { bubbles: true });
  document.dispatchEvent(historyEvent);
};
