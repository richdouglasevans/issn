export = issn;

declare type ValidationOptions = {
  strict: boolean;
};

declare function issn(issn: any, options?: ValidationOptions): boolean;

declare namespace issn {
  function format(issn: any): string;

  function calculateCheckDigit(digits: string): string;
}
