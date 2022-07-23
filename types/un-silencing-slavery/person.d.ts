type SortKey =
  | "name"
  | "age"
  | "gender"
  | "race"
  | "family"
  | "origin"
  | "duties";

interface Person {
  personId: string;
  name: string;
  otherNames: string | null;
  christianNames: string | null;
  familyNames: string | null;
  country: string;
  colour: string;
  gender: string;
  age1817List: string | null;
  familyNotes: string | null;
  mother: string | null;
  motherId: string | null;
  grandmother: string | null;
  grandmotherId: string | null;
  greatgrandmother: string | null;
  greatgrandmotherId: string | null;
  comments: string | null;
  journalInfo: string | null;
  age1817: string | null;
  age1820: string | null;
  age1823: string | null;
  age1826: string | null;
  age1829: string | null;
  age1832: string | null;
  age1832List: string | null;
  duties: string | null;
  condition: string | null;
  disposition: string | null;
  valuation: string | null;
  birthYear: number | null;
  arrivalYear: number | null;
  exitYear: number | null;
  displayName: string | null;
  profile: string | null;
}