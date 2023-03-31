export interface GetDocumentsAPI {
  documents: DocumentType[];
  isLast: boolean;
}

export interface DocumentType {
  faviconUrl: string;
  id: string;
  imageUrl: string;
  isSaved: boolean;
  netloc: string;
  title: string;
  url: string;
}
