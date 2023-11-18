export interface PageableRes<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginatedParams {
  page?: number;
  pageSize?: number;
}

export interface SearchableParams {
  search?: string;
}
