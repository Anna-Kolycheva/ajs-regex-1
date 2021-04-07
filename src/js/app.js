export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[\w-]+$/.test(this.name) && /^[a-z].+[a-z]$/.test(this.name) && !/[\d]{4,}/.test(this.name);
  }
}
