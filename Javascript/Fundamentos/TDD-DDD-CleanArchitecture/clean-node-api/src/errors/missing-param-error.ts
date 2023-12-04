export class MissingParamError extends Error {
  /***
   * Handler de erro para parametros faltantes
   * @param {string} paramName Nome do parametro
   */
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
