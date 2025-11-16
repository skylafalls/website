interface DocumentItem {
  docHeading: string;
  documentLink: string;
  arrayOfInfo: Array<string>;
  id: string;
}

export const documents: DocumentItem[] = [
  {
    docHeading: "The FG Expansion Spreadsheet",
    documentLink: "https://docs.google.com/spreadsheets/d/1iYp6VyEhT5JeENpVRjqs7BT9yJd0l-8kHFX_ct7BZMI/edit",
    arrayOfInfo: [
      `This is the FG Expansion Spreadsheet, version 2, a spreadsheet that houses many of the numbers of the Fictional Googology community`,
      `It is meant to be a resource for all things related to FG, such as scales and definitions.`,
      `Currently in alpha and quite unstable due to weird scaling issues, I ask you help us.`
    ],
    id: "fg-exp+bbn"
  }
];
