export type AuthorID = "alex_nepsha" | "polina_gordienko" | "olga_sergeevna";
export interface AuthorData {
  fullName: string;
  link: string;
  photo: ImageMetadata;
}

export type Authors = Record<AuthorID, AuthorData>;
