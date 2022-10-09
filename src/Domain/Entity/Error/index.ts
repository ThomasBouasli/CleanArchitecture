export class EntityError extends Error {
  public entity: string;
  public field: string;
  public statusCode: number;

  constructor(
    entity: string,
    field: string,
    statusCode: number,
    message: string
  ) {
    super(message);
    this.entity = entity;
    this.field = field;
    this.statusCode = statusCode || 500;
  }
}
