import { v4 as uuid, validate } from "uuid";

import { EntityError } from "../Error";

export class Entity {
  public readonly id: string;

  constructor(id?: string) {
    if (id) {
      if (!validate(id)) {
        throw new EntityError("Core", "id", 400, "Invalid id");
      }
      this.id = id;
    } else {
      this.id = uuid();
    }
  }
}
