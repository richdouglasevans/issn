export = issn;

declare function issn(issn: any): boolean;

declare namespace issn {

    function format(issn: any): string;

    function calculateCheckDigit(digits: string): string;
}
