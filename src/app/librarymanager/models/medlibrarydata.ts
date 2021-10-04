import { Row } from "./row";

  export interface MedLibraryData {
    data: Array<Row>;
    csv: string;
    parsed?: string;
  }