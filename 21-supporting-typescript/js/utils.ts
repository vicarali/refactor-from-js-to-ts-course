export function countWords(str: string) {
  return str.split(" ").length;
}

export function countChars(str: string) {
  return str.split("").length;
}

export function show(element: HTMLElement) {
  element.classList.remove("hidden");
}

export function hide(element: HTMLElement) {
  element.classList.add("hidden");
}

export function createUser(form: HTMLFormElement) {
  return new Promise((resolve) => {
    const newUser = Object.values(form.elements).reduce((user, element) => {
      if (element.id) {
        // @ts-expect-error
        user[element.id] = element.value;
      }
      return user;
    }, {});

    resolve({
      success: true,
      data: newUser,
    });
  });
}
