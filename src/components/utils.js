export const Position = {
  BEFORE_BEGIN: `beforeBegin`,
  AFTER_BEGIN: `afterBegin`,
  BEFORE_END: `beforeEnd`,
  AFTER_END: `afterEnd`
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const render = (container, element, place) => {
  switch (place) {
    case Position.BEFORE_BEGIN:
      container.before(element);
      break;
    case Position.AFTER_BEGIN:
      container.prepend(element);
      break;
    case Position.BEFORE_END:
      container.append(element);
      break;
    case Position.AFTER_END:
      container.after(element);
      break;
  }
};

export const unRender = (element) => {
  if (element) {
    element.remove();
  }
};
