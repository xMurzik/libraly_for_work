export interface IBooks {
  totalItems: number;
  items: Array<items>;
}

export interface items {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
}

export interface VolumeInfo {
  title: string;
  subtitle?: string;
  authors?: string[];
  publishedDate?: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories?: string[];
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary?: PanelizationSummary;
  imageLinks?: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  publisher?: string;
  description?: string;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  buyLink?: string;
  listPrice?: ListPrice;
  retailPrice?: RetailPrice;
  offers?: Offer[];
}

export interface ListPrice {
  amount: number;
  currencyCode: string;
}

export interface RetailPrice {
  amount: number;
  currencyCode: string;
}

export interface Offer {
  finskyOfferType: number;
  listPrice: ListPrice2;
  retailPrice: RetailPrice2;
}

export interface ListPrice2 {
  amountInMicros: number;
  currencyCode: string;
}

export interface RetailPrice2 {
  amountInMicros: number;
  currencyCode: string;
}

export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Epub;
  pdf: Pdf;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface Epub {
  isAvailable: boolean;
  downloadLink?: string;
  acsTokenLink?: string;
}

export interface Pdf {
  isAvailable: boolean;
  acsTokenLink?: string;
}
