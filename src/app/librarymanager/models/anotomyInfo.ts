export interface AnotomyInfo {
    _embedded: Embedded;
  }
  export interface Embedded {
    terms: (TermsEntity)[];
  }
  export interface TermsEntity {
    iri: string;
    label: string;
    description?: null;
    annotation: Annotation;
    obo_id: string;
  }
  export interface Annotation {
    // database_cross_reference?: (string)[] | null;
    definition?: (string)[] | null;
    // has_exact_synonym?: (string)[] | null;
    // has_obo_namespace?: (string)[] | null;
    // has_related_synonym?: (string)[] | null;
    // homology_notes?: (string)[] | null;
    // id?: (string)[] | null;
  }