/**
 * Creates class-generator for dto
 * @constructor
 * @param { class } constructor <h3>DTO class</h3>
 * @return { class }
 */
const DtoGenerator =
  <T extends { new(...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      // TODO: generator
      // eslint-disable-next-line require-jsdoc
      static default() {
        return new this();
      }
    };
  };

export { DtoGenerator };