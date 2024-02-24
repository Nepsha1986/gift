export type AuthorID = "alex_nepsha" | "polina_gordienko";
export interface AuthorData {
  fullName: string;
  link: string;
  photo: ImageMetadata;
}

export type Authors = Record<AuthorID, AuthorData>;
