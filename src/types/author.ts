export type AuthorID = "alex_nepsha";
export interface AuthorData {
  fullName: string;
  link: string;
}

export type Authors = Record<AuthorID, AuthorData>;
